import type { NextPage } from "next";
import styles from "./main.module.css";
import CarouselComp from "../../components/carousel";
import { CategoryComp } from "../../components/category";
import { Brands } from "../../components/brands";
import classicGuitars from "../../resources/classic-guitars-cat.webp";
import microphones from "../../resources/microphones-cat.webp";
import amps from "../../resources/amps-cat.webp";
import keyboards from "../../resources/keyboards-cat.webp";
import { PrimaryTitle } from "ui/texts";

const Main: NextPage = () => {
  return (
    <section className={styles["general-comp"]}>
      <div className={styles["general-section__wrapper"]}>
        <PrimaryTitle size="25px">Artículos destacados</PrimaryTitle>
        <section className={styles["section__art-des"]}>
          <CarouselComp />
        </section>
        <PrimaryTitle size="25px">Categorías destacadas</PrimaryTitle>
        <section className={styles["section__cat-des"]}>
          <a href="/category/guitarras-acusticas">
            <CategoryComp name={"Guitarras acusticas"} pic={classicGuitars} />
          </a>
          <a href="/category/microfonos">
            <CategoryComp name={"Microfonos"} pic={microphones} />
          </a>
          <a href="/category/amplificadores">
            <CategoryComp name={"Amplificadores"} pic={amps} />
          </a>
          <a href="/category/teclados">
            <CategoryComp name={"Teclados"} pic={keyboards} />
          </a>
        </section>
        <PrimaryTitle size="25px">¿Qué marcas trabajamos?</PrimaryTitle>
        <section className={styles["section__brands"]}>
          <Brands />
        </section>
      </div>
    </section>
  );
};

export default Main;
