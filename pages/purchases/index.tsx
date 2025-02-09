import React, { useState, useEffect } from "react";
import Layout from "components/layout";
import styles from "./profile.module.css";
import { Select } from "ui/select";
import { PrimaryTitle } from "ui/texts";
import { PurchaseCard } from "components/purchase-card";
import { getOrders } from "lib/api";

export default function Profile() {
  const [purchase, setPurchase] = useState("realizadas");
  const [display, setDisplay] = useState(false);

  const [approvedProducts, setApprovedProducts] = useState([]);
  const [pendingProducts, setPendingProducts] = useState([]);

  async function pullResults() {
    const res: any = await getOrders();

    const approvedResults = res?.filter((r) => {
      return r.status == "approved";
    });

    const pendingResults = res?.filter((r) => {
      return r.status == "pending";
    });

    setApprovedProducts(approvedResults);
    setPendingProducts(pendingResults);
  }

  function handleChange(e) {
    if (e.target.value == "approved") {
      setPurchase(e.target.value);
      setDisplay(false);
    }
    if (e.target.value == "pending") {
      setPurchase(e.target.value);
      setDisplay(true);
    }
  }

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
            value={purchase}
            onChange={handleChange}
            width="50%"
          >
            <option value="approved">REALIZADAS</option>
            <option value="pending">PENDIENTES</option>
          </Select>
          <div
            style={{ display: display ? "none" : "grid" }}
            className={styles["modify-data-form"]}
          >
            {approvedProducts?.map((r, index) => (
              <PurchaseCard
                key={index}
                name={r.preference.items[0].title}
                price={r.preference.items[0].unit_price}
                pic={r.preference.items[0].picture_url}
                id={r.preference.external_reference}
                buttonText="Ver"
              />
            ))}
          </div>
          <div
            style={{ display: display ? "grid" : "none" }}
            className={styles["modify-data-form"]}
          >
            {pendingProducts?.map((r, index) => (
              <PurchaseCard
                key={index}
                name={r.preference.items[0].title}
                price={r.preference.items[0].unit_price}
                pic={r.preference.items[0].picture_url}
                buttonText="comprar"
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
