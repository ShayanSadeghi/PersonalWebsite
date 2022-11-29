import { Link } from "react-router-dom";
import cvFile from "../assets/testFile.pdf";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <nav className={styles.container}>
      <ul>
        <Link to="/" className={styles.link}>
          <li className={styles.item}>Home</li>
        </Link>
        <a
          href={cvFile}
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          <li className={styles.item}>CV</li>
        </a>
        <Link to="/papers" className={styles.link}>
          <li className={styles.item}>Papers</li>
        </Link>
        <Link to="/awards" className={styles.link}>
          <li className={styles.item}>Awards</li>
        </Link>
      </ul>
    </nav>
  );
}
