import type { NextPage } from "next";
import styles from "./main.module.css";
import { CarouselComp } from "../../components/carousel";
import { CategoryComp } from "../../components/category";
import { Brands } from "../../components/brands";
import classicGuitars from "../../resources/classic-guitars-cat.webp";
import microphones from "../../resources/microphones-cat.webp";
import amps from "../../resources/amps-cat.webp";
import keyboards from "../../resources/keyboards-cat.webp";

const Main: NextPage = () => {
  return (
    <section className={styles["general-comp"]}>
      <div className={styles["general-section__wrapper"]}>
        <section className={styles["section__art-des"]}>
          <h2 className={styles["h2__art-des"]}>Artículos destacados</h2>
          <CarouselComp />
        </section>
        <section className={styles["section__cat-des"]}>
          <h2 className={styles["h2__cat-des"]}>Categorías destacadas</h2>
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
        <section className={styles["section__brands"]}>
          <h2 className={styles["h2__brands"]}>¿Qué marcas trabajamos?</h2>
          <Brands />
        </section>
      </div>
    </section>
  );
};

export default Main;
