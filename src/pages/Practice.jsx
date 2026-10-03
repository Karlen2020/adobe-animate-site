import { Link } from "react-router-dom";
import { Helmet } from "../components/common/Helmet";
import { practiceTasks } from "../data/practiceTasks";
import { isFinalQuizUnlocked,isQuizPassed } from "../hooks/useQuizUnlock";
import styles from "./Practice.module.css";

const svgProps = {
  width: 30,
  height: 30,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

function BallBounceIcon() {
  return (
    <svg {...svgProps}>
      <circle cx="12" cy="7" r="3" />
      <path d="M6 19c1-3 3-4 6-4s5 1 6 4" strokeDasharray="2 3" />
    </svg>
  );
}

function LightningIcon() {
  return (
    <svg {...svgProps}>
      <path d="M13 3 6 13h5l-1 8 7-11h-5z" />
    </svg>
  );
}

function ExportHtmlIcon() {
  return (
    <svg {...svgProps}>
      <path d="M12 3v11" />
      <path d="M8 10l4 4 4-4" />
      <path d="M5 17v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2" />
    </svg>
  );
}

function ChecklistIcon() {
  return (
    <svg {...svgProps}>
      <path d="M5 6h2M5 12h2M5 18h2" />
      <path d="M10 6h9M10 12h9M10 18h9" />
    </svg>
  );
}

function TrophyIcon() {
  return (
    <svg {...svgProps}>
      <path d="M8 4h8v4a4 4 0 0 1-8 0V4z" />
      <path d="M8 5H5a3 3 0 0 0 3 3M16 5h3a3 3 0 0 1-3 3" />
      <path d="M10 15h4v3h-4z" />
      <path d="M8 21h8" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="5" y="11" width="14" height="9" rx="1.5" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

const TASK_ICONS = [<BallBounceIcon />, <LightningIcon />, <ExportHtmlIcon />];

function Practice() {
  const finalUnlocked = isFinalQuizUnlocked();
  const quiz1Passed = isQuizPassed("quiz-1");
  const quiz2Passed = isQuizPassed("quiz-2");
  const quizFinalPassed = isQuizPassed("quiz-final");

  return (
    <>
      <Helmet
        title="Գործնական աշխատանք — Adobe Animate 2D"
        description="Գործնական առաջադրանքներ և ինքնաստուգման թեստեր Adobe Animate 2D-ի ուսուցման ամրապնդման համար։"
      />

      <section className={`container ${styles.page}`}>
        <h1 className={styles.title}>Գործնական աշխատանք</h1>
        <p className={styles.subtitle}>Ամրապնդել ձեռք բերված գիտելիքները</p>

        <h2 className={styles.sectionTitle}>Փոքր առաջադրանքներ</h2>
        <div className={styles.taskGrid}>
          {practiceTasks.map((task, i) => (
            <div key={task.id} className={styles.card}>
              <span className={styles.cardIcon}>{TASK_ICONS[i]}</span>
              <h3 className={styles.cardTitle}>{task.title}</h3>
              <Link to={`/practice/tasks/${task.id}`} className={styles.pillButton}>
                Սկսել
              </Link>
            </div>
          ))}
        </div>

        <h2 className={styles.sectionTitle}>Ինքնաստուգման թեստեր</h2>
        <div className={styles.quizGrid}>
                    <div className={styles.card}>
            {quiz1Passed && <span className={styles.passedBadge}>Հանձնված ✓</span>}
            <span className={styles.cardIcon}>
              <ChecklistIcon />
            </span>
            <h3 className={styles.cardTitle}>Թեստ 1</h3>
            <Link to="/practice/quizzes/quiz-1" className={styles.pillButton}>
              Սկսել թեստը
            </Link>
          </div>

          <div className={styles.card}>
            {quiz2Passed && <span className={styles.passedBadge}>Հանձնված ✓</span>}
            <span className={styles.cardIcon}>
              <ChecklistIcon />
            </span>
            <h3 className={styles.cardTitle}>Թեստ 2</h3>
            <Link to="/practice/quizzes/quiz-2" className={styles.pillButton}>
              Սկսել թեստը
            </Link>
          </div>

          <div className={`${styles.card} ${!finalUnlocked ? styles.locked : ""}`}>
            {quizFinalPassed && <span className={styles.passedBadge}>Հանձնված ✓</span>}
            <span className={styles.cardIcon}>
              <TrophyIcon />
            </span>
            <h3 className={styles.cardTitle}>Ամփոփիչ թեստ</h3>

            {finalUnlocked ? (
              <Link to="/practice/quizzes/quiz-final" className={styles.pillButton}>
                Սկսել թեստը
              </Link>
            ) : (
              <>
                <span className={styles.pillButtonDisabled}>
                  <LockIcon /> Սկսել թեստը
                </span>
                <span className={styles.lockedNote}>
                  Բացվում է Թեստ 1-ը և Թեստ 2-ը հանձնելուց հետո
                </span>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Practice;