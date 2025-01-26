import { useRouter } from "next/router";
import { RoundedButton } from "ui/buttons";
import { PriceText, SecondaryTitle } from "ui/texts";
import styles from "./card.module.css";

export function Card(props) {
  const router = useRouter();

  function HandleClick(e) {
    e.preventDefault();
    const attribute = e.target.getAttribute("name");
    const attModified = attribute.toLowerCase().replaceAll(" ", "-");

    router.push("/product/" + attModified);
  }

  return (
    <div className={styles["card-container"]}>
      <img
        src={props.pic}
        alt={props.name.toLowerCase().replaceAll(" ", "-")}
        className={styles["card-img"]}
      />
      <div className={styles["card-price-link"]}>
        <SecondaryTitle className={styles["card__title"]} size="18px">
          {props.name}
        </SecondaryTitle>
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
          Ver mas...
        </RoundedButton>
      </div>
    </div>
  );
}
