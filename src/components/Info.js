import "material-icons/iconfont/material-icons.css";

import styles from "../styles/Info.module.css";

const infoList = require("../assets/info.json");

export default function Info() {
  return (
    <div className={styles.container}>
      <img className={styles.avatar} src="avatar.jpg" alt="avatar" />
      <p className={styles.NameText}>Mahsa Amini</p>

      <ul className={styles.smallInfo}>
        {infoList.map((item) => (
          <li key={item.title}>
            <span className={["material-icons", styles.icon].join(" ")}>
              {item.icon}
            </span>
            {/* <span>{item.title}: </span> */}
            <span className={styles.infoSmallText}>{item.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
