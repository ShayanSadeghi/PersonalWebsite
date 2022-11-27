import styles from "../styles/HomeInfo.module.css";
export default function HomeInfo() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>About me!</h1>
      <p className={styles.mainText}>In this section we have some main info</p>
    </div>
  );
}
