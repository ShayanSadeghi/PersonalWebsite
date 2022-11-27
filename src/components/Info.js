import building from "../images/building-columns-solid.svg";

import styles from "../styles/Info.module.css";
const infoList = [
  {
    title: "Location",
    value: " Iran",
    src: building,
  },
  {
    title: "Education",
    value: "education value",
    src: building,
  },
  {
    title: "University",
    value: "uni value",
    src: building,
  },
];

export default function Info() {
  return (
    <div className={styles.container}>
      <img className={styles.avatar} src="avatar.jpg" alt="avatar" />
      <p className={styles.NameText}>Mahsa Amini</p>

      <ul className={styles.smallInfo}>
        {infoList.map((item) => (
          <li key={item.title}>
            <img src={item.src} className={styles.icon} alt="icon" />
            <span className={styles.infoSmallText}>{item.title}: </span>
            <span>{item.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
