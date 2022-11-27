import { Link } from "react-router-dom";

import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <nav className={styles.container}>
      <ul>
        <li>
          <Link to="/" className={styles.link}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/cv" className={styles.link}>
            CV
          </Link>
        </li>
        <li>
          <Link to="/papers" className={styles.link}>
            Papers
          </Link>
        </li>
        <li>
          <Link to="/awards" className={styles.link}>
            Awards
          </Link>
        </li>
      </ul>
    </nav>
  );
}
