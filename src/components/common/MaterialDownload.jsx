import styles from "./MaterialDownload.module.css";
function MaterialDownload({ label = "Դասընթացի նյութեր", fileName, href }) {
  return (
    <div className={styles.wrap}>
      <span className={styles.label}>{label}</span>
      <a
        href={href || "#"}
        download={Boolean(href)}
        className={styles.field}
        aria-disabled={!href}
      >
        <span className={styles.iconWrap} aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3v10.6l3.3-3.3 1.4 1.4L12 17l-4.7-4.7 1.4-1.4 3.3 3.3V3h0zM5 19h14v2H5z" />
          </svg>
        </span>
        <span className={styles.fileName}>{fileName || "Ներբեռնել նյութը"}</span>
      </a>
    </div>
  );
}

export default MaterialDownload;
