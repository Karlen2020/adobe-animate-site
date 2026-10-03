
const KEY_PREFIX = "aa-quiz-passed:";

export function isQuizPassed(quizId) {
  try {
    return localStorage.getItem(KEY_PREFIX + quizId) === "true";
  } catch {
    return false;
  }
}

export function markQuizPassed(quizId) {
  try {
    localStorage.setItem(KEY_PREFIX + quizId, "true");
  } catch {
    
  }
}

export function isFinalQuizUnlocked() {
  return isQuizPassed("quiz-1") && isQuizPassed("quiz-2");
}