import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "../components/common/Helmet";
import MediaPlaceholder from "../components/common/MediaPlaceholder";
import MaterialDownload from "../components/common/MaterialDownload";
import {
  beginnerLessons,
  advancedLessons,
  lessonVideos,
} from "../data/content";
import styles from "./LessonDetail.module.css";

const ALL_LESSONS = [...beginnerLessons, ...advancedLessons];

function LessonDetail() {
  const { slug } = useParams();
  const lesson = ALL_LESSONS.find((item) => item.slug === slug);
  const video = lessonVideos[slug];

  if (!lesson || !video) {
    return <Navigate to="/lessons" replace />;
  }

  return (
    <>
      <Helmet
        title={`${lesson.title} — Տեսադասեր`}
        description={`Տեսադասեր և ուսուցողական նյութեր՝ «${lesson.title}» թեմայով։`}
      />

      <section className={`container ${styles.page}`}>
        <Link to="/lessons" className={styles.back}>
          ← Բոլոր տեսադասերը
        </Link>

                <h1 className={styles.pageTitle}>{lesson.title}</h1>

        <div className={styles.list}>
  <article className={styles.block}>
    <MediaPlaceholder
      type="video"
      videoSrc={video.src}
      ratio="16 / 9"
      alt={video.title}
    />

    <MaterialDownload
  fileName={video.fileName}
  href={video.src}
/>
  </article>
</div>
      </section>
    </>
  );
}

export default LessonDetail;
