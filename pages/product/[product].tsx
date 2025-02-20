import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Details } from "../../components/details";
import { searchProducts } from "lib/api";
import Layout from "components/layout";
import styles from "./product.module.css";

export default function ProductPage() {
  const params = useParams();
  const [products, setProducts] = useState([]);

  async function pullResult(p) {
    const res = await searchProducts(p, 0);
    const item = res.results;

    setProducts(item);
  }

  useEffect(() => {
    if (params?.product) {
      pullResult(params.product);
    }
  }, [params]);

  return (
    <Layout>
      <div className={styles["general-comp"]}>
        <div className={styles["general-section__wrapper"]}>
          <h2 className={styles["h2__category"]}></h2>
          <div className={styles["card-wrapper"]}>
            {products.map((r, index) => (
              <Details
                key={index}
                id={r.objectID}
                pic={r.pic}
                title={r.name}
                description={r.description}
                price={r.price}
                cat={r.category}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
