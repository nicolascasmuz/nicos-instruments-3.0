import React, { useState, useEffect } from "react";
import styles from "./query.module.css";
import { useParams } from "next/navigation";
import { Card } from "components/card";
import Layout from "components/layout";
import { searchProducts } from "lib/api";
import { Select } from "ui/select";
import { PrimaryTitle } from "ui/texts";

export default function ResultsPage() {
  const params = useParams();

  const [results, setResults] = useState([]);
  const [order, setOrder] = useState("menor precio");

  async function pullResults(q, order) {
    const res = await searchProducts(q);

    const items = res.results;
    const lowerCaseQuery = q.toLowerCase();

    if (order === "menor precio") {
      const searchProduct = items.filter((p) => {
        const productTitle = p.name.toLowerCase();
        const filteredProducts = productTitle.includes(lowerCaseQuery);

        return filteredProducts;
      });

      const lowerPrice = searchProduct.sort((pA, pB) => {
        if (pA.price > pB.price) {
          return 1;
        }
        if (pA.price < pB.price) {
          return -1;
        }
        return 0;
      });

      setResults(lowerPrice);
    } else if (order === "mayor precio") {
      const searchProduct = items.filter((p) => {
        const productTitle = p.name.toLowerCase();
        const filteredProducts = productTitle.includes(lowerCaseQuery);

        return filteredProducts;
      });

      const higherPrice = searchProduct.sort((pA, pB) => {
        if (pA.price < pB.price) {
          return 1;
        }
        if (pA.price > pB.price) {
          return -1;
        }
        return 0;
      });

      setResults(higherPrice);
    }
  }

  function handleChange(e) {
    setOrder(e.target.value);
  }

  useEffect(() => {
    if (params?.query) {
      pullResults(params.query, order);
    }
  }, [params, order]);

  return (
    <Layout>
      <section className={styles["general-comp"]}>
        <div className={styles["general-section__wrapper"]}>
          <div className={styles["results__top-container"]}>
            <PrimaryTitle size="25px">
              Resultados: {results.length}
            </PrimaryTitle>
            <Select
              name="order"
              value={order}
              onChange={handleChange}
              width="150px"
            >
              <option value="menor precio">menor precio</option>
              <option value="mayor precio">mayor precio</option>
            </Select>
          </div>
          <div className={styles["card-wrapper"]}>
            {results.length === 0 ? (
              <h2 className={styles["h2__loading"]}>Cargando...</h2>
            ) : (
              results.map((r, index) => (
                <Card key={index} name={r.name} price={r.price} pic={r.pic} />
              ))
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
