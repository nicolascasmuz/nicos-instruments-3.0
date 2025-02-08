import { useRouter } from "next/router";
import { RoundedButton } from "ui/buttons";
import { PriceText } from "ui/texts";
import styles from "./purchase-card.module.css";

export function PurchaseCard(props) {
  const router = useRouter();

  function HandleClick(e) {
    e.preventDefault();
    const attribute = e.target.getAttribute("name");
    const attModified = attribute.toLowerCase().replaceAll(" ", "-");

    router.push("/approved-purchase/" + attModified);
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
      <PriceText className={styles["card__price"]} color="#080808">
        ${props.price}
      </PriceText>
      <RoundedButton
        className={styles["card__button"]}
        name={props.name}
        onClick={HandleClick}
        color="#ac1a22"
        width="75px"
      >
        {props.buttonText}
      </RoundedButton>
    </div>
  );
}
