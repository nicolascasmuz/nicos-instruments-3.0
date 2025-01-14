import styles from "./products.module.css";
import { CategoryComp } from "components/category";
import Layout from "components/layout";
import classicGuitars from "resources/classic-guitars-cat.webp";
import microphones from "resources/microphones-cat.webp";
import keyboards from "resources/keyboards-cat.webp";
import percussion from "resources/percussion-cat.webp";
import accesories from "resources/accesories-cat.webp";
import basses from "resources/basses-cat.webp";
import consoles from "resources/consoles-cat.webp";
import electricGuitars from "resources/electric-guitars-cat.webp";
import pedals from "resources/pedals-cat.webp";
import pianos from "resources/pianos-cat.webp";
import synthesizers from "resources/synthesizers-cat.webp";
import amps from "resources/amps-cat.webp";

export default function ProductsPage() {
  return (
    <Layout>
      <section className={styles["general-comp"]}>
        <div className={styles["general-section__wrapper"]}>
          <a href="/category/accesorios">
            <CategoryComp name={"Accesorios"} pic={accesories} />
          </a>
          <a href="/category/amplificadores">
            <CategoryComp name={"Amplificadores"} pic={amps} />
          </a>
          <a href="/category/bajos">
            <CategoryComp name={"Bajos"} pic={basses} />
          </a>
          <a href="/category/consolas">
            <CategoryComp name={"Consolas"} pic={consoles} />
          </a>
          <a href="/category/guitarras-acusticas">
            <CategoryComp name={"Guitarras acusticas"} pic={classicGuitars} />
          </a>
          <a href="/category/guitarras-electricas">
            <CategoryComp name={"Guitarras electricas"} pic={electricGuitars} />
          </a>
          <a href="/category/microfonos">
            <CategoryComp name={"Microfonos"} pic={microphones} />
          </a>
          <a href="/category/pedales">
            <CategoryComp name={"Pedales de efectos"} pic={pedals} />
          </a>
          <a href="/category/percusion">
            <CategoryComp name={"Percusion"} pic={percussion} />
          </a>
          <a href="/category/pianos">
            <CategoryComp name={"Pianos"} pic={pianos} />
          </a>
          <a href="/category/sintetizadores">
            <CategoryComp name={"Sintetizadores"} pic={synthesizers} />
          </a>
          <a href="/category/teclados">
            <CategoryComp name={"Teclados"} pic={keyboards} />
          </a>
        </div>
      </section>
    </Layout>
  );
}
