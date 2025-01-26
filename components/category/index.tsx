import styles from "./category.module.css";
import Image from "next/image";

export function CategoryComp(props) {
  const nameLowerCase = props.name.toLowerCase().replaceAll(" ", "-");

  return (
    <div className={styles["cat-general-container"]} onClick={props.onClick}>
      <div className={styles["cat-container"]}>
        <Image
          className={styles["cat-img"]}
          src={props.pic}
          alt={nameLowerCase}
        />
        <h2 className={styles["text-overlay"]}>{props.name}</h2>
      </div>
    </div>
  );
}
