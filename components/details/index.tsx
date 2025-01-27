import styles from "./details.module.css";
import { RoundedButton } from "ui/buttons";
import { Body, PriceText, SecondaryTitle, Subtitle } from "ui/texts";
import { VisaIcon } from "ui/icons";
import { MasterIcon } from "ui/icons";
import { AmericanIcon } from "ui/icons";

export function Details(props) {
  return (
    <div className={styles["details-container"]}>
      <img
        src={props?.pic}
        alt={
          props?.title
            ? props?.title.toLowerCase().replaceAll(" ", "-")
            : "card-img"
        }
        className={styles["card-img"]}
      />
      <div className={styles["details__details-container"]}>
        <SecondaryTitle size="35px">{props?.title}</SecondaryTitle>
        <Body className={styles["details__description"]}>
          {props?.description}
        </Body>
        <PriceText className={styles["card-price"]} color="#f0efda">
          ${props?.price}
        </PriceText>
        <Subtitle className={styles["details__category"]}>
          Categoria: {props?.cat}
        </Subtitle>
        <div className={styles["details__button-container"]}>
          <RoundedButton color="#ac1a22" width="130px">
            Comprar
          </RoundedButton>
          <div className={styles["details__logo-container"]}>
            <VisaIcon />
            <MasterIcon />
            <AmericanIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
