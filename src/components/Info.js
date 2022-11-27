import styles from "../styles/Info.module.css";

const infoList = [
  {
    title: "Location",
    value: " Iran",
    src: "../images/building-columns-solid.svg",
  },
  {
    title: "Education",
    value: "education value",
    src: "../images/building-columns-solid.svg",
  },
  {
    title: "University",
    value: "uni value",
    src: "../images/building-columns-solid.svg",
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
            <span className={styles.infoSmallText}>{item.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
