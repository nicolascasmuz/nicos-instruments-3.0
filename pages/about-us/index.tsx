import styled from "styled-components";
import React from "react";
import Image from "next/image";
import styles from "./about-us.module.css";
import musicShopOutside from "../../resources/music-shop-outside.jpg";
import Layout from "components/layout";

export default function AboutUsPage() {
  const BodySection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #362b2f;
    min-height: calc(100vh - 260px);
    overflow: auto;
    padding: 40px 60px;

    .general-section__wrapper {
      display: grid;
      grid-template-rows: auto auto auto;
      grid-template-columns: auto;
      justify-items: center;
      gap: 20px;
    }

    @media (min-width: 769px) {
      .general-section__wrapper {
        grid-template-rows: auto auto;
        grid-template-columns: auto auto;
        justify-items: initial;
        gap: 20px;
      }
    }

    .about-us__title {
      grid-row: 1;
      grid-column: 1;
      font-family: "Bungee Shade", cursive;
      font-size: 25px;
      color: #f0efda;
      margin: 0;
    }

    @media (min-width: 769px) {
      .about-us__title {
        grid-row: 1;
        grid-column: 1 / span 2;
      }
    }

    .about-us__pic {
      grid-row: 2;
      grid-column: 1;
    }

    @media (min-width: 769px) {
      .about-us__pic {
        grid-row: 2;
        grid-column: 1;
      }
    }

    .about-us__shop {
      height: 180px;
    }

    @media (min-width: 1069px) {
      .about-us__shop {
        height: 250px;
      }
    }

    .about-us__epigraph {
      display: block;
      grid-row: 2;
      grid-column: 1;
      font-family: "Bebas Neue", cursive;
      font-size: 14px;
      color: #f0efda;
      margin: 0;
    }

    .about-us__text {
      grid-row: 3;
      grid-column: 1;
      font-family: "Bebas Neue", cursive;
      font-size: 18px;
      color: #f0efda;
      width: 300px;
      margin: 0;
    }

    @media (min-width: 769px) {
      .about-us__text {
        grid-row: 2;
        grid-column: 2;
        width: 450px;
      }
    }

    @media (min-width: 1069px) {
      .about-us__text {
        width: 600px;
      }
    }
  `;

  return (
    <Layout>
      <section className={styles["general-comp"]}>
        <div className={styles["general-section__wrapper"]}>
          <h2 className={styles["about-us__title"]}>Quienes somos</h2>
          <div className={styles["about-us__pic"]}>
            <Image
              className={styles["about-us__shop"]}
              src={musicShopOutside}
              alt="music-shop-outside"
            />
            <span className={styles["about-us__epigraph"]}>
              Sede central de Nico's Instruments en Lomas de Zamora
            </span>
          </div>
          <p className={styles["about-us__text"]}>
            Nico's Instruments nació en 1995 en el partido de Lomas de Zamora,
            fundado por el músico y empresario de origen irlandés Nicholas
            O'Brien quien junto a sus dos hijos gemelos Martín y Joaquín, ambos
            luthieres, decidieron emprender a fines de los 80's un negocio de
            guitarras eléctricas artesanales, como eran los únicos en la zona
            dedicados a ese rubro y la demanda era grande, el negocio no tardó
            en prosperar. Así fue como Nicholas decidió adquirir en 1995 el
            local de Laprida al 1234 el cual ahora es la sede central de la
            franquicia. Con los años fueron expandiendo el catálogo, en la
            vidriera de Nico's comenzaron a verse, bajos, teclados,
            amplificadores, consolas de audio, instrumentos de percusión, y
            demás. Más adelante empezarían a abrir sucursales a lo largo y ancho
            de toda la zona sur del GBA, actualmente cuentan con seis,
            Avellaneda, Quilmes, Lanús, Berazategui, Adrogué y Lomas de Zamora.
          </p>
        </div>
      </section>
    </Layout>
  );
}
