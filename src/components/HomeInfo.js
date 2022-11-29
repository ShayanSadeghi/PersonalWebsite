import styles from "../styles/HomeInfo.module.css";

import aboutMe from "../assets/about_me.json";

export default function HomeInfo() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>{aboutMe.title}</h1>
      <div className={styles.mainText}>
        {aboutMe.text.split("\n").map((line, ind) => (
          <p key={ind}>{line}</p>
        ))}
      </div>
    </div>
  );
}
