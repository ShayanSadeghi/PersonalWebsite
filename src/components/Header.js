import { Link } from "react-router-dom";

import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <nav className={styles.container}>
      <ul>
        <li className={styles.item}>
          <Link to="/" className={styles.link}>
            Home
          </Link>
        </li>
        <li className={styles.item}>
          <Link to="/cv" className={styles.link}>
            CV
          </Link>
        </li>
        <li className={styles.item}>
          <Link to="/papers" className={styles.link}>
            Papers
          </Link>
        </li>
        <li className={styles.item}>
          <Link to="/awards" className={styles.link}>
            Awards
          </Link>
        </li>
      </ul>
    </nav>
  );
}
