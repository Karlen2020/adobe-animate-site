import { Helmet } from "../components/common/Helmet";
import { Link } from "react-router-dom";
import { beginnerLessons, advancedLessons } from "../data/content";
import styles from "./VideoLessons.module.css";

const stroke = {
  width: 100,
  height: 100,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

function LaptopGameIcon() {
  return (
    <svg {...stroke}>
      <rect x="3" y="5" width="18" height="12" rx="1.5" />
      <path d="M2 19h20" />
      <circle cx="9.5" cy="11" r="1.5" />
      <path d="M8 11h3" />
      <circle cx="16" cy="9.8" r="0.6" fill="currentColor" />
      <circle cx="16" cy="12.2" r="0.6" fill="currentColor" />
    </svg>
  );
}

function ArticleClockIcon() {
  return (
    <svg {...stroke}>
      <rect x="3" y="6" width="13" height="10" rx="1.2" />
      <path d="M6 9.5h7M6 12h4" />
      <circle cx="17.5" cy="15.5" r="4" />
      <path d="M17.5 13.5v2l1.3 1" />
    </svg>
  );
}

function RunnerMonitorIcon() {
  return (
    <svg {...stroke}>
      <rect x="4" y="4" width="16" height="11" rx="1.2" />
      <path d="M9 18h6M12 15v3" />
      <circle cx="9.5" cy="8" r="1" fill="currentColor" />
      <path d="M8 12l2-2 1.5 1.5L14 9M6.5 10.5h.01M6.5 12.5h.01" />
    </svg>
  );
}

function CodeBracketsIcon() {
  return (
    <svg {...stroke}>
      <path d="M9 6 4 12l5 6M15 6l5 6-5 6" />
    </svg>
  );
}

function ClickHandIcon() {
  return (
    <svg {...stroke}>
      <path d="M11 4v4M6.5 6l1.8 1.8M15.5 6l-1.8 1.8" />
      <path d="M10 10V8.3a1.3 1.3 0 1 1 2.6 0V10M12.6 10.5V9a1.2 1.2 0 1 1 2.4 0v2M10 10.2a1.1 1.1 0 0 0-2.1.4c0 .4.1.7.3 1l2.6 3.6c.5.7 1.3 1.1 2.2 1.1h1.4c1.4 0 2.5-1.1 2.5-2.5v-2.3a1.2 1.2 0 0 0-2.4 0" />
    </svg>
  );
}

function GlobeIconLocal() {
  return (
    <svg {...stroke}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.5 3.8 5.6 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.6-3.8-9s1.3-6.5 3.8-9z" />
    </svg>
  );
}

function ClockIconSmall() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function PlayIconSmall() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

const ICONS = {
  GameIcon: <LaptopGameIcon />,
  ExamIcon: <ArticleClockIcon />,
  MonitorIcon: <RunnerMonitorIcon />,
  CodeIcon: <CodeBracketsIcon />,
  ClickIcon: <ClickHandIcon />,
  GlobeIcon: <GlobeIconLocal />,
};

function LessonCard({ lesson }) {
  return (
    <Link to={`/lessons/${lesson.slug}`} className={styles.card}>
      <span className={styles.cardIcon}>{ICONS[lesson.icon]}</span>
      <h3 className={styles.cardTitle}>{lesson.title}</h3>
      <div className={styles.cardMeta}>
        <span className={styles.metaLeft}>
          <ClockIconSmall /> {lesson.meta}
        </span>
        <span className={styles.metaRight}>
          <PlayIconSmall /> {lesson.action || "Տեսանյութ"}
        </span>
      </div>
    </Link>
  );
}

function LessonGroup({ title, lessons }) {
  return (
    <div className={styles.group}>
      <h2 className={styles.groupTitle}>{title}</h2>
      <div className={styles.grid}>
        {lessons.map((lesson) => (
          <LessonCard key={lesson.slug} lesson={lesson} />
        ))}
      </div>
    </div>
  );
}

function VideoLessons() {
  return (
    <>
      <Helmet
        title="Տեսադասեր — Adobe Animate 2D ուսուցում"
        description="Adobe Animate 2D տեսադասեր սկսնակների և փորձառուների համար։"
      />

      <section className={`container ${styles.page}`}>
        <h1 className={styles.pageTitle}>Տեսադասեր</h1>

        <LessonGroup title="Սկսնակների համար" lessons={beginnerLessons} />
        <LessonGroup title="Փորձառուների համար" lessons={advancedLessons} />
      </section>
    </>
  );
}

export default VideoLessons;
