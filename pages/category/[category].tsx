import React, { useState, useEffect } from "react";
import styles from "./category.module.css";
import { useParams } from "next/navigation";
import { Card } from "components/card";
import Layout from "components/layout";
import { searchProducts } from "lib/api";

export default function CategoryPage() {
  const params: any = useParams();
  const paramsReplaced = params?.category.replace("-", " ") || "";

  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState("menor precio");

  async function pullResults(c, order) {
    const res = await searchProducts(c);
    const items = res.results;

    if (order === "menor precio") {
      const searchProduct = items.filter((p) => {
        const filteredProducts = p.category === c;
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

      setProducts(lowerPrice);
    } else if (order === "mayor precio") {
      const searchProduct = items.filter((p) => {
        const filteredProducts = p.category === c;
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

      setProducts(higherPrice);
    }
  }

  function handleChange(e) {
    setOrder(e.target.value);
  }

  useEffect(() => {
    if (params?.category) {
      pullResults(params.category, order);
    }
  }, [params, order]);

  return (
    <Layout>
      <section className={styles["general-comp"]}>
        <div className={styles["general-section__wrapper"]}>
          <div className={styles["category__top-container"]}>
            <h2 className={styles["category__h2"]}>{paramsReplaced}</h2>
            <select
              className={styles["category__select"]}
              name="order"
              value={order}
              onChange={handleChange}
            >
              <option value="menor precio">Menor precio</option>
              <option value="mayor precio">Mayor precio</option>
            </select>
          </div>
          <div className={styles["card-wrapper"]}>
            {products.map((r, index) => (
              <Card key={index} name={r.name} price={r.price} pic={r.pic} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
