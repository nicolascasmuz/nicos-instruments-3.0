import { useRouter } from "next/router";
import { RoundedButton } from "ui/buttons";
import styles from "./approved-card.module.css";

export function ApprovedCard(props) {
  const router = useRouter();

  function HandleClick(e) {
    e.preventDefault();
    router.push("/approved-purchase/" + props.id);
  }

  return (
    <div className={styles["card-container"]}>
      <img
        src={props.pic}
        alt={props.name.toLowerCase().replaceAll(" ", "-")}
        className={styles["card-img"]}
      />
      <h2 className={styles["card__title"]}>
        {props.name.length <= 18
          ? props.name
          : props.name.substring(0, 18) + "..."}
      </h2>
      <RoundedButton
        className={styles["card__button"]}
        onClick={HandleClick}
        color="#ac1a22"
        width="75px"
      >
        ver
      </RoundedButton>
    </div>
  );
}
