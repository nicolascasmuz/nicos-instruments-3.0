import styled from "styled-components";
import Layout from "components/layout";
import { useOrderByID } from "lib/hooks";
import { useRouter } from "next/router";
import { PurchaseDetails } from "components/purchase-details";

export default function ApprovedPurchase() {
  const BodySection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #362b2f;
    min-height: calc(100vh - 260px);
    overflow: auto;
    padding: 40px 0;

    .general-section__wrapper {
      display: grid;
      justify-content: center;
      gap: 35px;
    }

    .card-wrapper {
      display: grid;
      justify-content: center;
      gap: 15px 25px;
      margin-bottom: 30px;
    }

    @media (min-width: 769px) {
      .card-wrapper {
        grid-template-columns: auto auto;
      }
    }

    @media (min-width: 1069px) {
      .card-wrapper {
        grid-template-columns: auto auto auto;
        justify-content: center;
      }
    }

    .h2__category {
      font-family: "Bungee Shade", cursive;
      font-size: 25px;
      color: #f0efda;
      margin: 0 0 0 70px;
    }
  `;

  const router = useRouter();
  const query: any = router.query;

  const data: any = useOrderByID(query.purchase);

  return (
    <Layout>
      <BodySection className="general-comp">
        <div className="general-section__wrapper">
          <h2 className="h2__category"></h2>
          <div className="card-wrapper">
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
      </BodySection>
    </Layout>
  );
}
