import styles from "../styles/Info.module.css";

import building from "../images/building-columns-solid.svg";

export default function Info() {
  return (
    <div className={styles.container}>
      <img className={styles.avatar} src="avatar.png" alt="avatar" />
      <p className={styles.NameText}>Name</p>
      <ul className={styles.smallInfo}>
        <li>
          <img src={building} className={styles.icon} alt="avatar" />
          <span className={styles.infoSmallText}>Location: Mashhad, Iran</span>
        </li>
        <li>
          <img src={building} className={styles.icon} alt="avatar" />
          <span className={styles.infoSmallText}>
            University: Ferdowsi University of Mashhad
          </span>
        </li>
        <li>
          <img src={building} className={styles.icon} alt="avatar" />
          <span className={styles.infoSmallText}>E-mail: user@test.com</span>
        </li>
      </ul>
    </div>
  );
}
