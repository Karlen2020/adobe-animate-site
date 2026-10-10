import { useState, useEffect, useRef, lazy, Suspense } from "react";
import { Helmet } from "../components/common/Helmet";
import { CodeIcon } from "../components/common/icons";
import styles from "./Courses.module.css";
const PdfViewer = lazy(() => import("../components/common/PdfViewer"));

const GUIDE_FILES = Array.from({ length: 7 }, (_, i) => ({
  title: `Ուղեցույց ${i + 1}`,
  src: `/docs/guide${i + 1}.pdf`,
}));

function GuidesViewer() {
  return (
    <Suspense fallback={<p>Բեռնվում է…</p>}>
      <PdfViewer files={GUIDE_FILES} />
    </Suspense>
  );
}

const SUBTITLE = "Լրացուցիչ նյութեր խորացված ուսումնասիրելու համար:";

const BLOCKS = {
  pdf: {
    title: "Ձեռնարկներ և PDF ֆայլեր",
    heading: "ԾԱՆՈԹԱՑՈՒՄ ADOBE ANIMATE ԾՐԱԳՐԻ ԱՇԽԱՏԱՆՔԱՅԻՆ ՏԻՐՈՒՅԹԻ ՀԵՏ",
  },
  templates: {
    title: "Նախագծային նմուշներ",
    heading: "ՈՒՍԱՆՈՂՆԵՐԻ ԿՈՂՄԻՑ ՊԱՏՐԱՍՏԱԾ ՆՅՈՒԹԵՐ",
  },
  actionscript: {
    title: "Action Script ուղեցույցներ",
    heading: "ԱՅՍ ՈՒՍՈՒՄՆԱԿԱՆ ՆՅՈՒԹԻ ԲՈՎԱՆԴԱԿՈՒԹՅՈՒՆԸ",
  },
};

const PDF_BULLETS = [
  "Ներածություն – Հակիրճ տեղեկատվություն Adobe Animate-ի նպատակների մասին:",
  "Աշխատանքային տիրույթի հիմնական տարրերը – Բեմահարթակի (Stage), ժամանակացույցի սանդղակի (Timeline), Գործիքների (Tools) և Հատկությունների (Properties) վահանակների, ինչպես նան Գրադարանի (Library) նկարագրությունը հարմար աղյուսակային/քարտային տեսքով:",
  "Աշխատանքային տիրույթի հարմարեցում – Խորհուրդներ, թե ինչպես փոփոխել վահանակների դիրքը կամ վերականգնել կորած պատուհանները:",
  "Օգտակար արագ ստեղներ (Shortcuts) – Ամենագործածական ստեղները (V, Q, F5, F6, Ctrl+Enter) անիմացիայի հետ աշխատանքն արագացնելու համար:",
];

const ACTIONSCRIPT_STEPS = [
  "Կոդի կազմակերպման ոճական ուղեցույցներ – Բացատրված է «Մեկ շերտի» (actions layer) կարևորությունը և մեկնաբանությունների (// և /* … */) ճիշտ օգտագործումը:",
  "Ընդհանուր սխալներ և դրանց լուծման ուղեցույցներ (Debugging) – Սկսնակների համար ամենահաճախ հանդիպող խնդիրների վերլուծություն՝ Սխալ #1009 (Null Object Reference) – Ինչու է այն հայտնվում և ինչպես ուղղել:",
  "Ռեգիստրի զգայունություն (Case Sensitivity) – Մեծատառերի և փոքրատառերի խիստ տարբերակման ուղեցույց:",
  "Կոդի կառուցման պատրաստի կաղապարներ (Snippets) – Գործնական կոդի կտորներ՝",
  "Կադրերի ավտոմատ կրկնության (Loop) արգելափակում (stop();):",
  "Կոճակի սեղմումով ձայնային էֆեկտի միացում (Sound օբյեկտի և MouseEvent.CLICK-ի համակցմամբ):",
];

const ACTIONSCRIPT_NOTE =
  "Լավագույն պրակտիկայի Հուշաթերթիկ (Best Practices) – Օբյեկտների անվանակոչման հատուկ մշակույթը (camelCase ոճ) և _btn ու _txt սուֆիքսների օգտագործումը, ինչը կոդն ավելի ընթեռնելի է դարձնում:";

function DocumentIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M6 3h9l4 4v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
      <path d="M14 3v5h5M8 12h8M8 16h5" />
    </svg>
  );
}

function TemplatesIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="7" y="7" width="12" height="14" rx="2" />
      <path d="M5 15V5a2 2 0 0 1 2-2h10" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function ArrowIcon({ direction = "right" }) {
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

function PillButton({ children, onClick }) {
  return (
    <button type="button" className={styles.pillButton} onClick={onClick}>
      {children}
    </button>
  );
}

function BackLink({ onClick }) {
  return (
    <button type="button" className={styles.backLink} onClick={onClick}>
      ← Ուսումնական նյութեր
    </button>
  );
}

function PdfBlock() {
  return (
    <>
      <h2 className={styles.blockHeading}>{BLOCKS.pdf.heading}</h2>
      <p className={styles.intro}>Ուսումնական նյութի բովանդակությունը ներառում է՝</p>
      <ol className={styles.bulletList}>
        {PDF_BULLETS.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
            <GuidesViewer />
    </>
  );
}

function TemplatesBlock() {
  const cards = [
    { id: 1, label: "Դիտել", src: "/video/template1.mp4" },
    { id: 2, label: "Դիտել", src: "/video/template2.mp4" },
    { id: 3, label: "Դիտել", src: "/video/template3.mp4" },
    { id: 4, label: "Դիտել", src: "/video/template4.mp4" },
  ];

  const [start, setStart] = useState(0);
  const [playingId, setPlayingId] = useState(null);
  const [enteringId, setEnteringId] = useState(null);
  const [direction, setDirection] = useState("next");
  const [isAnimating, setIsAnimating] = useState(false);
  const videoRefs = useRef({});

  const visible = [cards[start % cards.length], cards[(start + 1) % cards.length]];

  function stopPlayback() {
    if (playingId != null) {
      videoRefs.current[playingId]?.pause();
      setPlayingId(null);
    }
  }

  function goTo(step, dir) {
    if (isAnimating) return;
    stopPlayback();

    const len = cards.length;
    const nextStart = (start + step + len) % len;
    const enteringCard = dir === "next" ? cards[(nextStart + 1) % len] : cards[nextStart];

    setDirection(dir);
    setEnteringId(enteringCard.id);
    setIsAnimating(true);
    setStart(nextStart);
  }

  function handlePlay(cardId) {
    const video = videoRefs.current[cardId];
    if (!video) return;

    if (playingId === cardId) {
      video.pause();
      setPlayingId(null);
    } else {
      if (playingId != null) videoRefs.current[playingId]?.pause();
      video.play();
      setPlayingId(cardId);
    }
  }

  return (
    <>
      <h2 className={styles.blockHeading}>{BLOCKS.templates.heading}</h2>

      <div className={styles.slider}>
        <button
          type="button"
          className={styles.sliderArrow}
          aria-label="Նախորդ"
          disabled={isAnimating}
          onClick={() => goTo(-1, "prev")}
        >
          <ArrowIcon direction="left" />
        </button>

        <div className={styles.sliderTrack}>
          {visible.map((card) => (
            <div
              key={card.id}
              className={`${styles.videoCard} ${
                card.id === enteringId
                  ? direction === "next"
                    ? styles.slideNext
                    : styles.slidePrev
                  : ""
              }`}
              onAnimationEnd={() => {
                if (card.id === enteringId) {
                  setEnteringId(null);
                  setIsAnimating(false);
                }
              }}
            >
              <video
                className={styles.video}
                src={card.src}
                playsInline
                ref={(el) => {
                  videoRefs.current[card.id] = el;
                }}
              />

              <PillButton onClick={() => handlePlay(card.id)}>
                {playingId === card.id ? "Դադարեցնել" : card.label}
              </PillButton>
            </div>
          ))}
        </div>

        <button
          type="button"
          className={styles.sliderArrow}
          aria-label="Հաջորդ"
          disabled={isAnimating}
          onClick={() => goTo(1, "next")}
        >
          <ArrowIcon direction="right" />
        </button>
      </div>
    </>
  );
}

function ActionScriptBlock() {
  return (
    <>
      <h2 className={styles.blockHeading}>{BLOCKS.actionscript.heading}</h2>
      <ol className={styles.numberedList}>
        {ACTIONSCRIPT_STEPS.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
      <p className={styles.note}>{ACTIONSCRIPT_NOTE}</p>
            <GuidesViewer />
    </>
  );
}

function Landing({ onOpen }) {
  const cards = [
    { key: "pdf", icon: <DocumentIcon />, title: "Ձեռնարկներ և\nPDF ֆայլեր" },
    { key: "templates", icon: <TemplatesIcon />, title: "Նախագծային\nնմուշներ" },
    { key: "actionscript", icon: <CodeIcon />, title: "Action Script\nուղեցույցներ" },
  ];

  return (
    <div className={styles.cardGrid}>
      {cards.map((card) => (
        <div key={card.key} className={styles.card}>
          <span className={styles.cardIcon}>{card.icon}</span>
          <h3 className={styles.cardTitle}>
            {card.title.split("\n").map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </h3>
          <PillButton onClick={() => onOpen(card.key)}>Դիտել</PillButton>
        </div>
      ))}
    </div>
  );
}

function Courses() {
  const [activeBlock, setActiveBlock] = useState(null);
  const active = activeBlock ? BLOCKS[activeBlock] : null;

  return (
    <>
      <Helmet
        title={
          active
            ? `${active.title} — Ուսումնական նյութեր`
            : "Ուսումնական նյութեր — Adobe Animate 2D"
        }
        description="Adobe Animate 2D ուսումնական նյութեր՝ ձեռնարկներ, նախագծային նմուշներ և ActionScript ուղեցույցներ։"
      />

      <section className={`container ${styles.page}`}>
        {active && <BackLink onClick={() => setActiveBlock(null)} />}

        <h1 className={styles.title}>{active ? active.title : "Ուսումնական նյութեր"}</h1>
        <p className={styles.subtitle}>{SUBTITLE}</p>

        {!active && <Landing onOpen={setActiveBlock} />}
        {activeBlock === "pdf" && <PdfBlock />}
        {activeBlock === "templates" && <TemplatesBlock />}
        {activeBlock === "actionscript" && <ActionScriptBlock />}
      </section>
    </>
  );
}

export default Courses;