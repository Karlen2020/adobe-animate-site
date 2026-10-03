import { useState } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { Helmet } from "../components/common/Helmet";
import { quizzes } from "../data/quizzes";
import { isFinalQuizUnlocked, markQuizPassed } from "../hooks/useQuizUnlock";
import styles from "./Quiz.module.css";

function Quiz() {
  const { quizId } = useParams();
  const quiz = quizzes[quizId];
  const [answers, setAnswers] = useState({});

  if (!quiz) {
    return <Navigate to="/practice" replace />;
  }

  const isFinal = quizId === "quiz-final";
  if (isFinal && !isFinalQuizUnlocked()) {
    return <Navigate to="/practice" replace />;
  }

  function handleSelect(questionIndex, optionIndex) {
    if (answers[questionIndex] !== undefined) return;

    const updated = { ...answers, [questionIndex]: optionIndex };
    setAnswers(updated);

    const allAnswered = quiz.questions.every((_, i) => updated[i] !== undefined);
    if (allAnswered) {
      const allCorrect = quiz.questions.every((q, i) => updated[i] === q.correctIndex);
      if (allCorrect) markQuizPassed(quizId);
    }
  }

  return (
    <>
      <Helmet title={`${quiz.title} — Գործնական աշխատանք`} description={quiz.title} />

      <section className={`container ${styles.page}`}>
        <Link to="/practice" className={styles.back}>
          ← Գործնական աշխատանք
        </Link>

        <h1 className={styles.title}>{quiz.title}</h1>

        <div className={styles.list}>
          {quiz.questions.map((q, qIndex) => {
            const selected = answers[qIndex];
            const answered = selected !== undefined;

            return (
              <div key={qIndex} className={styles.questionBlock}>
                <h2 className={styles.questionTitle}>Հարց {qIndex + 1}</h2>
                <p className={styles.questionText}>{q.question}</p>

                <div className={styles.options}>
                  {q.options.map((option, optIndex) => {
                    const isCorrectOption = optIndex === q.correctIndex;
                    const isSelectedOption = optIndex === selected;

                    let stateClass = "";
                    if (answered && isCorrectOption) stateClass = styles.correct;
                    else if (answered && isSelectedOption) stateClass = styles.incorrect;

                    return (
                      <button
                        key={optIndex}
                        type="button"
                        className={`${styles.option} ${stateClass}`}
                        onClick={() => handleSelect(qIndex, optIndex)}
                        disabled={answered}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>

                                {answered && (
                  <p className={styles.explanation}>Բացատրություն՝ {q.explanation}</p>
                )}
              </div>
            );
          })}
        </div>

        {(() => {
          const allAnswered = quiz.questions.every((_, i) => answers[i] !== undefined);
          if (!allAnswered) return null;

          const score = quiz.questions.reduce(
            (total, q, i) => (answers[i] === q.correctIndex ? total + 1 : total),
            0
          );
          const isPassed = score === quiz.questions.length;

          return (
            <div className={styles.result}>
              <span className={isPassed ? styles.resultBadgeSuccess : styles.resultBadge}>
                {isPassed ? "Թեստը հանձնված է ✓" : "Փորձեք կրկին"}
              </span>
              <span className={styles.resultScore}>
                Ձեր արդյունքը՝ {score}/{quiz.questions.length}
              </span>
              <Link to="/practice" className={styles.resultButton}>
                ← Վերադառնալ
              </Link>
            </div>
          );
        })()}
      </section>
    </>
  );
}

export default Quiz;