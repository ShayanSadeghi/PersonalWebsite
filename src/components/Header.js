import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <nav className={styles.container}>
      <ul>
        <li>Home</li>
        <li>CV</li>
        <li>Papers</li>
        <li>Awards</li>
      </ul>
    </nav>
  );
}
