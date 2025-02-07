import React, { useState, useEffect } from "react";
import Layout from "components/layout";
import styles from "./profile.module.css";
import { Select } from "ui/select";
import { PrimaryTitle } from "ui/texts";
import { PurchaseCard } from "components/purchase-card";
import { getOrders } from "lib/api";

export default function Profile() {
  const [products, setProducts] = useState([]);

  async function pullResults() {
    const res: any = await getOrders();

    const results = res.map((r) => {
      return r.preference.items[0];
    });

    console.log("results: ", results);

    setProducts(results);
  }

  /* function handleChange(e) {
    setOrder(e.target.value);
  } */

  useEffect(() => {
    pullResults();
  }, []);

  return (
    <Layout>
      <section className={styles["general-comp"]}>
        <div className={styles["general-section__wrapper"]}>
          <PrimaryTitle size="50px">Mis compras</PrimaryTitle>
          <Select
            name="me"
            /* value={me}  onChange={handleChange} */
            width="50%"
          >
            <option value="approved">REALIZADAS</option>
            <option value="pending">PENDIENTES</option>
          </Select>
          <div
            /* style={{ display: display ? "none" : "grid" }} */
            style={{ display: "grid" }}
            className={styles["modify-data-form"]}
          >
            {products?.map((r, index) => (
              <PurchaseCard
                key={index}
                name={r.title}
                price={r.unit_price}
                pic={r.pic}
              />
            ))}
          </div>
          {/* <form
            style={{ display: display ? "grid" : "none" }}
            className={styles["modify-data-form"]}
            onSubmit={HandleAddressSubmit}
          >
            <label htmlFor="nombre" className={styles["section-form__label"]}>
              <h3 className={styles["section-form__h3"]}>CIUDAD</h3>
              <Input
                type="text"
                name="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </label>
            <label htmlFor="nombre" className={styles["section-form__label"]}>
              <h3 className={styles["section-form__h3"]}>CALLE</h3>
              <Input
                type="text"
                name="street"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />
            </label>
            <label htmlFor="nombre" className={styles["section-form__label"]}>
              <h3 className={styles["section-form__h3"]}>NÚMERO</h3>
              <Input
                type="text"
                name="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </label>
            <StraightButton color="#ac1a22" width="266px" secondWidth="356px">
              Editar
            </StraightButton>
          </form> */}
        </div>
      </section>
    </Layout>
  );
}
