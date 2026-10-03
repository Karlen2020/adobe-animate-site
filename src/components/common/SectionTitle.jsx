import styles from "./SectionTitle.module.css";

function SectionTitle({ title, subtitle, align = "center" }) {
  return (
    <div className={`${styles.wrap} ${styles[align]}`}>
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}

export default SectionTitle;