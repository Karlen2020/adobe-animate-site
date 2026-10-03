import { Link } from "react-router-dom";
import { Helmet } from "../components/common/Helmet";
import Button from "../components/common/Button";
import styles from "./NotFound.module.css";

function NotFound() {
  return (
    <>
      <Helmet title="Էջը չի գտնվել — Adobe Animate 2D" description="Հայցվող էջը գոյություն չունի։" />

      <section className={`container ${styles.page}`}>
        <span className={styles.code}>404</span>
        <h1 className={styles.title}>Էջը չի գտնվել</h1>
        <p className={styles.text}>
          Հայցվող էջը գոյություն չունի կամ տեղափոխվել է։
        </p>
        <Button to="/" variant="filled">
          Վերադառնալ գլխավոր էջ
        </Button>
      </section>
    </>
  );
}

export default NotFound;
