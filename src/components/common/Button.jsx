import { Link } from "react-router-dom";
import styles from "./Button.module.css";
function Button({
  children,
  variant = "filled",
  to,
  href,
  onClick,
  type = "button",
  icon,
  className = "",
}) {
  const classes = `${styles.btn} ${styles[variant]} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={classes}>
        {icon && <span className={styles.icon}>{icon}</span>}
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noreferrer">
        {icon && <span className={styles.icon}>{icon}</span>}
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </button>
  );
}

export default Button;
