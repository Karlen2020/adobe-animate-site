import { useEffect, useRef, useState } from "react";
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf.mjs";
import workerSrc from "pdfjs-dist/legacy/build/pdf.worker.min.mjs?url";
import styles from "./PdfViewer.module.css";

pdfjsLib.GlobalWorkerOptions.workerSrc = workerSrc;

function ChevronIcon({ direction = "right" }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      style={{ transform: direction === "left" ? "rotate(180deg)" : "none" }}
    >
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}

function PdfViewer({ files }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPages] = useState(0);
  const [status, setStatus] = useState("loading");
  const [width, setWidth] = useState(0);

  const scrollerRef = useRef(null);
  const canvasRef = useRef(null);
  const pdfRef = useRef(null);
  const renderTaskRef = useRef(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const update = () => setWidth(Math.floor(scroller.clientWidth));
    update();

    const observer = new ResizeObserver(update);
    observer.observe(scroller);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let cancelled = false;
    setStatus("loading");
    setPageNumber(1);
    setNumPages(0);
    pdfRef.current = null;

    const task = pdfjsLib.getDocument(files[activeIndex].src);
    task.promise
      .then((pdf) => {
        if (cancelled) {
          pdf.destroy();
          return;
        }
        pdfRef.current = pdf;
        setNumPages(pdf.numPages);
        setStatus("ready");
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });

    return () => {
      cancelled = true;
      task.destroy();
    };
  }, [files, activeIndex]);

  useEffect(() => {
    if (status !== "ready" || !width) return;

    let cancelled = false;

    async function draw() {
      const pdf = pdfRef.current;
      const canvas = canvasRef.current;
      if (!pdf || !canvas) return;

      if (renderTaskRef.current) {
        renderTaskRef.current.cancel();
        try {
          await renderTaskRef.current.promise;
        } catch {
          // предыдущая отрисовка отменена — это нормально
        }
      }
      if (cancelled) return;

      const page = await pdf.getPage(pageNumber);
      if (cancelled) return;

      const base = page.getViewport({ scale: 1 });
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      const viewport = page.getViewport({ scale: (width / base.width) * ratio });

      canvas.width = Math.floor(viewport.width);
      canvas.height = Math.floor(viewport.height);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${Math.floor(viewport.height / ratio)}px`;

      const task = page.render({
        canvasContext: canvas.getContext("2d"),
        canvas,
        viewport,
      });
      renderTaskRef.current = task;

      try {
        await task.promise;
      } catch (error) {
        if (error?.name !== "RenderingCancelledException" && !cancelled) {
          setStatus("error");
        }
      }
    }

    draw();
    return () => {
      cancelled = true;
    };
  }, [status, width, pageNumber]);

  function goToPage(next) {
    setPageNumber(next);
    if (scrollerRef.current) scrollerRef.current.scrollTop = 0;
  }

  return (
    <div className={styles.viewer}>
      <div className={styles.tabs} role="tablist">
        {files.map((file, index) => (
          <button
            key={file.src}
            type="button"
            role="tab"
            aria-selected={index === activeIndex}
            className={`${styles.tab} ${index === activeIndex ? styles.tabActive : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            {file.title}
          </button>
        ))}
      </div>

      <div className={styles.stage}>
        <div ref={scrollerRef} className={styles.scroller}>
          <canvas ref={canvasRef} className={styles.canvas} />
        </div>

        {status === "loading" && <div className={styles.status}>Բեռնվում է…</div>}
        {status === "error" && (
          <div className={styles.status}>Չհաջողվեց բացել ֆայլը</div>
        )}
      </div>

      <div className={styles.controls}>
        <button
          type="button"
          className={styles.navBtn}
          aria-label="Նախորդ էջ"
          disabled={status !== "ready" || pageNumber <= 1}
          onClick={() => goToPage(pageNumber - 1)}
        >
          <ChevronIcon direction="left" />
        </button>

        <span className={styles.counter}>
          {numPages ? `${pageNumber} / ${numPages}` : "—"}
        </span>

        <button
          type="button"
          className={styles.navBtn}
          aria-label="Հաջորդ էջ"
          disabled={status !== "ready" || pageNumber >= numPages}
          onClick={() => goToPage(pageNumber + 1)}
        >
          <ChevronIcon direction="right" />
        </button>
      </div>
    </div>
  );
}

export default PdfViewer;