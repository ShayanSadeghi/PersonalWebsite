import styles from "../styles/Sections.module.css";

const papersList = require("../assets/papers_list.json");

export default function Papers() {
  return (
    <div className={styles.container}>
      {papersList.map((paper) => (
        <div key={paper.id}>
          <h4>{paper.title}</h4>
          <p>{paper.authors}</p>
          <small>
            {paper.journal} - {paper.year}
          </small>
          <hr />
        </div>
      ))}
    </div>
  );
}
