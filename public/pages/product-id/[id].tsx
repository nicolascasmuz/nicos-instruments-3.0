import { useRouter } from "next/router";
import { Details } from "../../components/details";
import { useProduct } from "lib/hooks";
import Layout from "components/layout";
import styles from "./product-id.module.css";

export default function ProductPage() {
  const router = useRouter();
  const query: any = router.query;

  const data: any = useProduct(query.id);

  return (
    <Layout>
      <div className={styles["general-comp"]}>
        <div className={styles["general-section__wrapper"]}>
          <h2 className={styles["h2__category"]}></h2>
          <div className={styles["card-wrapper"]}>
            <Details
              pic={data?.pic}
              title={data?.name}
              description={data?.description}
              price={data?.price}
              cat={data?.category}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
