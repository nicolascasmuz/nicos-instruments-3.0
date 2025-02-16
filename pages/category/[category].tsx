import React, { useState, useEffect } from "react";
import styles from "./category.module.css";
import { useParams } from "next/navigation";
import { Card } from "components/card";
import Layout from "components/layout";
import { searchProducts } from "lib/api";
import { Select } from "ui/select";
import { PrimaryTitle } from "ui/texts";
import Pagination from "components/pagination";

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
            <PrimaryTitle size="25px">{paramsReplaced}</PrimaryTitle>
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
            {products.map((r, index) => (
              <Card key={index} name={r.name} price={r.price} pic={r.pic} />
            ))}
          </div>
          <Pagination totalItems={20} itemsPerPage={6} onPageChange={1} />
        </div>
      </section>
    </Layout>
  );
}
