import { useState } from "react";
import { Helmet } from "../components/common/Helmet";
import SectionTitle from "../components/common/SectionTitle";
import Button from "../components/common/Button";
import styles from "./Contact.module.css";

function Contact() {
  const [status, setStatus] = useState("idle");

  function handleSubmit(event) {
    event.preventDefault();
    setStatus("sent");
    event.target.reset();
  }

  return (
    <>
      <Helmet
        title="Կապվել — Adobe Animate 2D"
        description="Կապվեք մեզ հետ հարցերի կամ դասընթացներին գրանցվելու համար։"
      />

      <section className={`container ${styles.page}`}>
        <SectionTitle title="Հետադարձ Կապ" align="center" />

        <div className={styles.content}>
          <div>
            <form className={styles.formCard} onSubmit={handleSubmit}>
              <div className={styles.field}>
                <label htmlFor="name">Անուն</label>
                <input id="name" name="name" type="text" required />
              </div>

              <div className={styles.field}>
                <label htmlFor="email">Էլ. հասցե</label>
                <input id="email" name="email" type="email" required />
              </div>

              <div className={styles.field}>
                <label htmlFor="message">Հաղորդագրություն</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                />
              </div>

              <Button type="submit" variant="filled">
                Ուղարկել
              </Button>

              {status === "sent" && (
                <p
                  role="status"
                  style={{
                    marginTop: "1rem",
                    color: "var(--color-primary)",
                  }}
                >
                  Շնորհակալություն։ Ձեր հաղորդագրությունը ուղարկվեց։
                </p>
              )}
            </form>
          </div>

          <div className={styles.sideCard}>
            <h3>Կապ մեզ հետ</h3>

            <div className={styles.sideRow}>
              <span className={styles.iconWrap}>☎</span>
              +374 (99) 476-615
            </div>

            <div className={styles.sideRow}>
              <span className={styles.iconWrap}>✉</span>
              hovhannisyanseda@gmail.com
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;