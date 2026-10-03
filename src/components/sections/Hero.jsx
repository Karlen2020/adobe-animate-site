import Button from "../common/Button";
import MediaPlaceholder from "../common/MediaPlaceholder";
import styles from "./Hero.module.css";
import { useRef } from "react";
function Hero() {
  const videoRef = useRef(null);

const handlePlay = () => {
  videoRef.current?.play();
};
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <h1 className={styles.title}>
            ԲԱՐԻ ԳԱԼՈՒՍՏ ADOBE ANIMATE 2D ԱՆԻՄԱՑԻՈՆ ԾՐԱԳՐԻ ՈՒՍՈՒՑՄԱՆ ՀԱՐԹԱԿ
          </h1>
          <p className={styles.description}>
            Այս կայքը նախատեսված է Adobe Animate 2D
            անիմացիոն ծրագիրը ուսանողներին ուսուցանելու համար։
          </p>
          <div className={styles.actions}>
            <Button to="/courses" variant="filled">
              Սկսել
            </Button>
<Button
  variant="ghost"
  icon={<PlayIcon />}
  onClick={handlePlay}
>
  Դիտել տեսանյութը
</Button>
          </div>
        </div>

        <div className={styles.media}>
<MediaPlaceholder
  ref={videoRef}
  type="video"
  videoSrc="/video/Intro1.mp4"
  ratio="1 / 1"
/>
</div>
      </div>
    </section>
  );
}

function PlayIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

export default Hero;
