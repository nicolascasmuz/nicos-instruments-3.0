import React, { useEffect, useRef } from "react";
import Image from "next/image";
import styled from "styled-components";
import logoVisa from "../../resources/logo-visa.png";
import logoMaster from "../../resources/logo-master.png";
import logoAmerican from "../../resources/logo-american.png";
import { RoundedButton } from "ui/buttons";
import { Body, PriceText, SecondaryTitle, Subtitle } from "ui/texts";

const DetailsComp = styled.div`
  display: grid;
  grid-template-columns: auto;
  justify-items: center;
  width: 320px;
  height: 100%;
  padding-top: 10px;
  overflow: hidden;
  margin: 0 auto;

  @media (min-width: 769px) {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
    justify-items: none;
    gap: 20px;
    width: 850px;
    padding: 10px 0px;
  }

  @media (min-width: 1069px) {
    width: 1050px;
  }

  .card-img {
    grid-column: 1;
    height: 250px;
    margin: 0 0 20px 0;
  }

  @media (min-width: 769px) {
    .card-img {
      margin: 0 10px 0 0;
    }
  }

  .details__details-container {
    grid-column: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  @media (min-width: 769px) {
    .details__details-container {
      grid-column: 2;
      width: 400px;
    }
  }

  @media (min-width: 1069px) {
    .details__details-container {
      width: 650px;
    }
  }

  .card-title {
    line-height: 20px;
    color: #ac1a22;
    font-family: "Bungee", cursive;
    font-size: 35px;
    line-height: 35px;
    margin: 0px 10px;
  }

  @media (min-width: 769px) {
    .card-title {
      margin: 0px 10px;
    }
  }

  .details__button-container {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto auto;
    justify-content: center;
    justify-items: center;
    gap: 10px;
    width: 100%;
    margin-top: 15px;
  }

  @media (min-width: 769px) {
    .details__button-container {
      display: flex;
      align-items: center;
      justify-content: start;
    }
  }

  .details__buy {
    font-family: "Bebas Neue", cursive;
    font-size: 20px;
    color: #f0efda;
    border: none;
    border-radius: 5px;
    background-color: #ac1a22;
    width: 100%;
    height: 35px;
    transition: all 0.25s;
  }

  @media (min-width: 769px) {
    .details__buy {
      width: 150px;
      margin-right: 28px;
    }
  }

  .details__buy:hover {
    opacity: 85%;
  }

  .details__logo-container {
    display: flex;
    gap: 10px;
  }

  .logo {
    grid-row: 2;
    width: 50px;
    height: 50px;
  }
`;

export function Details(props) {
  return (
    <DetailsComp>
      <img
        src={props?.pic}
        alt={
          props?.title
            ? props?.title.toLowerCase().replaceAll(" ", "-")
            : "card-img"
        }
        className="card-img"
      />
      <div className="details__details-container">
        <SecondaryTitle size="35px">{props?.title}</SecondaryTitle>
        <Body className="details__description">{props?.description}</Body>
        <PriceText className="card-price" color="#f0efda">
          ${props?.price}
        </PriceText>
        <Subtitle className="details__category">
          Categoria: {props?.cat}
        </Subtitle>
        <div className="details__button-container">
          <RoundedButton color="#ac1a22" width="130px">
            Comprar
          </RoundedButton>
          <div className="details__logo-container">
            <Image className="logo visa" src={logoVisa} alt="logo-visa"></Image>
            <Image
              className="logo master"
              src={logoMaster}
              alt="logo-master"
            ></Image>
            <Image
              className="logo american"
              src={logoAmerican}
              alt="logo-american"
            ></Image>
          </div>
        </div>
      </div>
    </DetailsComp>
  );
}
