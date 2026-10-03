import { useReveal } from "../../hooks/useReveal";
import SectionTitle from "../common/SectionTitle";
import Card from "../common/Card";
import styles from "./CardGridSection.module.css";

function CardGridSection({ title, subtitle, items, columns = 3 }) {
  const [ref, isVisible] = useReveal();

  return (
    <section className={styles.section} ref={ref}>
      <div className="container">
        {title && <SectionTitle title={title} subtitle={subtitle} />}

        <div
          className={`${styles.grid} ${isVisible ? styles.visible : ""}`}
          style={{ "--columns": columns }}
        >
          {items.map((item, index) => (
            <div
              key={item.title}
              className={styles.gridItem}
              style={{ "--delay": `${index * 0.08}s` }}
            >
              <Card {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CardGridSection;
