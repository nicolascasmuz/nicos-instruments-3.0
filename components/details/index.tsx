import React, { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./details.module.css";
import logoVisa from "../../resources/logo-visa.png";
import logoMaster from "../../resources/logo-master.png";
import logoAmerican from "../../resources/logo-american.png";
import { RoundedButton } from "ui/buttons";
import { Body, PriceText, SecondaryTitle, Subtitle } from "ui/texts";

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
            <Image
              className={styles["logo"]}
              src={logoVisa}
              alt="logo-visa"
            ></Image>
            <Image
              className={styles["logo"]}
              src={logoMaster}
              alt="logo-master"
            ></Image>
            <Image
              className={styles["logo"]}
              src={logoAmerican}
              alt="logo-american"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
