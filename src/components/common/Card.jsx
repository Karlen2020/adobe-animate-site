import styles from "./Card.module.css";
function Card({ icon, title, description, meta, action, onClick }) {
  const isInteractive = typeof onClick === "function";

  return (
    <div
      className={`${styles.card} ${isInteractive ? styles.clickable : ""}`}
      onClick={onClick}
      role={isInteractive ? "button" : undefined}
      tabIndex={isInteractive ? 0 : undefined}
    >
      {icon && <div className={styles.iconWrap}>{icon}</div>}
      <h3 className={styles.title}>{title}</h3>
      {description && <p className={styles.description}>{description}</p>}

      {(meta || action) && (
        <div className={styles.footer}>
          {meta && <span className={styles.meta}>{meta}</span>}
          {action && <span className={styles.action}>{action}</span>}
        </div>
      )}
    </div>
  );
}

export default Card;
