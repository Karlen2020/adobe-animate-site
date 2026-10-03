import { useParams, Navigate, Link } from "react-router-dom";
import { Helmet } from "../components/common/Helmet";
import MediaPlaceholder from "../components/common/MediaPlaceholder";
import { practiceTasks } from "../data/practiceTasks";
import styles from "./PracticeTask.module.css";

function PracticeTask() {
  const { taskId } = useParams();
  const task = practiceTasks.find((item) => item.id === taskId);

  if (!task) {
    return <Navigate to="/practice" replace />;
  }

  return (
    <>
      <Helmet title={`${task.title} — Գործնական աշխատանք`} description={task.description} />

      <section className={`container ${styles.page}`}>
        <Link to="/practice" className={styles.back}>
          ← Գործնական աշխատանք
        </Link>

        <div className={styles.grid}>
          <div className={styles.textCol}>
            <h1 className={styles.title}>{task.title}</h1>
            <p className={styles.description}>{task.description}</p>
          </div>

          <div className={styles.videoCol}>
            <MediaPlaceholder type="video" ratio="16 / 9" alt={task.title} videoSrc={task.video} />
          </div>
        </div>
      </section>
    </>
  );
}

export default PracticeTask;