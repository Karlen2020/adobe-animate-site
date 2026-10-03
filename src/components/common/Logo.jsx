import { Link } from "react-router-dom";
import styles from "./Logo.module.css";
import logo from "../../assets/favicon.png"

function Logo() {
  return (
    <Link to="/" className={styles.logo} aria-label="Գլխավոր էջ">
      <img className={styles.mark} src={logo} alt="Adobe Animate Logo"></img>
      <span className={styles.name}>Adobe Animate</span>
    </Link>
  );
}

export default Logo;
