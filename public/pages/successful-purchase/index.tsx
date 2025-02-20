import { useRouter } from "next/navigation";
import Layout from "components/layout";
import styles from "./successful-purchase.module.css";
import { RoundedButton } from "ui/buttons";
import { Body, PrimaryTitle } from "ui/texts";

export default function SuccessfulPurchasePage() {
  const router = useRouter();

  function HandleClick(e) {
    e.preventDefault();
    router.push("/");
  }

  return (
    <Layout>
      <div className={styles["general-comp"]}>
        <div className={styles["general-section__wrapper"]}>
          <PrimaryTitle>¡Muchas gracias por tu compra!</PrimaryTitle>
          <RoundedButton color="#ac1a22" width="150px" onClick={HandleClick}>
            Volver a inicio
          </RoundedButton>
        </div>
      </div>
    </Layout>
  );
}
