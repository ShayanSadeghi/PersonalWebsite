import styles from "../styles/Sections.module.css";

const AwardsList = require("../assets/awards_list.json");

export default function Awards() {
  return (
    <div className={styles.container}>
      {AwardsList.map((award) => (
        <div key={award.id}>
          <h4>{award.title}</h4>
          <small>{award.year}</small>
          <hr />
        </div>
      ))}
    </div>
  );
}
