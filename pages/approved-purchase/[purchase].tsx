import Layout from "components/layout";
import { useOrderByID } from "lib/hooks";
import { useRouter } from "next/router";
import { PurchaseDetails } from "components/purchase-details";
import styles from "./approved-purchase.module.css";

export default function ApprovedPurchase() {
  const router = useRouter();
  const query: any = router.query;

  const data: any = useOrderByID(query.purchase);

  return (
    <Layout>
      <div className={styles["general-comp"]}>
        <div className={styles["general-section__wrapper"]}>
          <h2 className={styles["h2__category"]}></h2>
          <div className={styles["card-wrapper"]}>
            <PurchaseDetails
              id={data?.productID}
              date={data?.preference.date_created}
              pic={data?.preference.items[0].picture_url}
              title={data?.preference.items[0].title}
              description={data?.preference.items[0].description}
              price={data?.preference.items[0].unit_price}
              quantity={data?.preference.items[0].quantity}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
