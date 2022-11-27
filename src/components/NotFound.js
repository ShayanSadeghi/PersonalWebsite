import { Link } from "react-router-dom";

import styles from "../styles/NotFound.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>OooOps! Page Not Found</h2>
      <p>It seems this page doesn't exist.</p>
      <p className={styles.text}> You can go to</p>
      <Link to="/" className={styles.link}>
        home
      </Link>
      page.
    </div>
  );
}
