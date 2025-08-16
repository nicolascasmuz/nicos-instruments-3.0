import React, { useState, useEffect } from "react";
import Layout from "components/layout";
import styles from "./purchases.module.css";
import { Select } from "ui/select";
import { PrimaryTitle, SecondaryTitle } from "ui/texts";
import { ApprovedCard } from "components/approved-card";
import { getOrders } from "lib/api";
import { PendingCard } from "components/pending-card";

export default function Purchases() {
  const [purchase, setPurchase] = useState("pending");
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
    if (e.target.value == "pending") {
      setPurchase(e.target.value);
      setDisplay(false);
    }
    if (e.target.value == "approved") {
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
            <option value="pending">PENDIENTES</option>
            <option value="approved">REALIZADAS</option>
          </Select>
          <div
            style={{ display: display ? "none" : "grid" }}
            className={styles["modify-data-form"]}
          >
            {pendingProducts ? (
              pendingProducts.map((r, index) => (
                <PendingCard
                  key={index}
                  name={r.preference.items[0].title}
                  pic={r.preference.items[0].picture_url}
                  id={r.preference.external_reference}
                  init_point={r.preference.init_point}
                />
              ))
            ) : (
              <SecondaryTitle>No tenés compras pendientes</SecondaryTitle>
            )}
          </div>
          <div
            style={{ display: display ? "grid" : "none" }}
            className={styles["modify-data-form"]}
          >
            {approvedProducts ? (
              approvedProducts.map((r, index) => (
                <ApprovedCard
                  key={index}
                  name={r.preference.items[0].title}
                  pic={r.preference.items[0].picture_url}
                  id={r.preference.external_reference}
                />
              ))
            ) : (
              <SecondaryTitle>Aún no has comprado nada</SecondaryTitle>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
