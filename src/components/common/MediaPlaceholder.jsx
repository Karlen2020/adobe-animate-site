import { forwardRef, useEffect, useRef, useState } from "react";
import styles from "./MediaPlaceholder.module.css";

const MediaPlaceholder = forwardRef(function MediaPlaceholder(
  {
    type = "video",
    videoSrc,
    src,
    alt = "",
    ratio = "16 / 9",
    glow = true,
    className = "",
  },
  ref
) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTogglePlay = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <div
      className={`${styles.frame} ${glow ? styles.glow : ""} ${className}`}
      style={{ aspectRatio: ratio }}
    >
      {type === "video" && videoSrc ? (
        <>
          <video
            ref={(element) => {
              videoRef.current = element;

              if (typeof ref === "function") {
                ref(element);
              } else if (ref) {
                ref.current = element;
              }
            }}
            src={videoSrc}
            className={styles.media}
            onClick={handleTogglePlay}
          />

          {!isPlaying && (
            <button
              className={styles.playButton}
              onClick={handleTogglePlay}
              aria-label="Play video"
            >
              ▶
            </button>
          )}
        </>
      ) : src ? (
        <img src={src} alt={alt} className={styles.media} />
      ) : (
        <div className={styles.empty}>
          <span className={styles.placeholderLabel}>
            Տեղադրեք տեսանյութը այստեղ
          </span>
        </div>
      )}
    </div>
  );
});

export default MediaPlaceholder;