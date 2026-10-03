import { useState,useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../common/Logo";
import Button from "../common/Button";
import styles from "./Header.module.css";

const NAV_ITEMS = [
  { to: "/", label: "Գլխավոր էջ" },
  { to: "/courses", label: "Ուսումնական նյութեր" },
  { to: "/lessons", label: "Տեսադասեր" },
  { to: "/practice", label: "Գործնական աշխատանք" },
  { to: "/contact", label: "Հետադարձ Կապ" },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
    const mq = window.matchMedia("(min-width: 1101px)");
    const onChange = (e) => {
      if (e.matches) setIsOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    mq.addEventListener("change", onChange);
    window.addEventListener("keydown", onKey);
    return () => {
      mq.removeEventListener("change", onChange);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Logo />

          <nav id="main-nav" className={`${styles.nav} ${isOpen ? styles.navOpen : ""}`}>
          <ul className={styles.navList}>
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    isActive ? `${styles.link} ${styles.active}` : styles.link
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

                <button
          type="button"
          className={`${styles.burger} ${isOpen ? styles.burgerOpen : ""}`}
          aria-label={isOpen ? "Փակել մենյուն" : "Բացել մենյուն"}
          aria-expanded={isOpen}
          aria-controls="main-nav"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export default Header;
