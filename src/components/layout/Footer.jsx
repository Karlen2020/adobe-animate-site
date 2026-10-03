import Logo from "../common/Logo";
import styles from "./Footer.module.css";

const NAV_LINKS = [
  { to: "/", label: "Գլխավոր էջ" },
  { to: "/courses", label: "Ուսումնական նյութեր" },
  { to: "/lessons", label: "Տեսադասեր" },
  { to: "/practice", label: "Գործնական աշխատանք" },
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <Logo />
        </div>

        <nav className={styles.nav} aria-label="Կայքի հատվածներ">
          <ul>
            {NAV_LINKS.map((item) => (
              <li key={item.to}>
                <a href={item.to}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.contacts}>
          <h3>Հետադարձ Կապ</h3>
          <a href="tel:+37499476615" className={styles.contactRow}>
            <PhoneIcon /> +374 (99) 476-615
          </a>
          <a href="mailto:hovhannisyanseda@gmail.com" className={styles.contactRow}>
            <MailIcon /> hovhannisyanseda@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.7 3.6.7.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.7 3.6.1.3.1.7-.2 1l-2.2 2.2z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4 4h16c.6 0 1 .4 1 1v14c0 .6-.4 1-1 1H4c-.6 0-1-.4-1-1V5c0-.6.4-1 1-1zm1.4 2 6.6 5.8L18.6 6H5.4zM5 8.2V18h14V8.2l-7 6.2-7-6.2z" />
    </svg>
  );
}
export default Footer;
