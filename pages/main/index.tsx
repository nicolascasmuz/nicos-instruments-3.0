import type { NextPage } from "next";
import styled from "styled-components";
import { CarouselComp } from "../../components/carousel";
import { CategoryComp } from "../../components/category";
import { Brands } from "../../components/brands";
import classicGuitars from "../../resources/classic-guitars-cat.webp";
import microphones from "../../resources/microphones-cat.webp";
import amps from "../../resources/amps-cat.webp";
import keyboards from "../../resources/keyboards-cat.webp";

const BodySection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #362b2f;
  min-height: calc(100vh - 260px);
  overflow: auto;
  padding: 40px 0;

  .general-section__wrapper {
    display: grid;
    justify-content: center;
    gap: 35px;
  }

  .section__art-des,
  .section__brands {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin: 0 auto;
  }

  .section__cat-des {
    display: grid;
    justify-content: center;
    gap: 35px;
  }

  @media (min-width: 700px) {
    .section__cat-des {
      grid-template-rows: auto auto;
      grid-template-columns: auto auto;
    }
  }

  .h2__art-des {
    font-family: "Bungee Shade", cursive;
    font-size: 25px;
    color: #f0efda;
    line-height: 1.25;
    text-align: center;
    margin: 0;
  }

  @media (min-width: 700px) {
    .h2__art-des {
      grid-column: 1 / span 2;
      text-align: start;
      margin: 0 0 0 70px;
    }
  }

  .h2__cat-des {
    font-family: "Bungee Shade", cursive;
    font-size: 25px;
    color: #f0efda;
    line-height: 1.25;
    text-align: center;
    margin: 0 0 0 6px;
  }

  @media (min-width: 700px) {
    .h2__cat-des {
      grid-column: 1 / span 2;
      text-align: start;
    }
  }

  .h2__brands {
    font-family: "Bungee Shade", cursive;
    font-size: 25px;
    color: #f0efda;
    line-height: 1.25;
    text-align: center;
    margin: 0;
  }
  }
`;

const Main: NextPage = () => {
  return (
    <BodySection className="general-comp">
      <div className="general-section__wrapper">
        <section className="section__art-des">
          <h2 className="h2__art-des">Artículos destacados</h2>
          <CarouselComp />
        </section>
        <section className="section__cat-des">
          <h2 className="h2__cat-des">Categorías destacadas</h2>
          <CategoryComp name={"Guitarras acusticas"} pic={classicGuitars} />
          <CategoryComp name={"Microfonos"} pic={microphones} />
          <CategoryComp name={"Amplificadores"} pic={amps} />
          <CategoryComp name={"Teclados"} pic={keyboards} />
        </section>
        <section className="section__brands">
          <h2 className="h2__brands">¿Qué marcas trabajamos?</h2>
          <Brands />
        </section>
      </div>
    </BodySection>
  );
};

export default Main;
