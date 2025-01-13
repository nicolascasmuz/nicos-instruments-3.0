import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Details } from "../../components/details";
import Layout from "components/layout";

export default function ProductPage() {
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

  const params = useParams();
  const [products, setProducts] = useState([]);

  async function pullResults(product) {
    fetch(
      "https://preview.contentful.com/spaces/boc2rp8m0dgi/environments/master/entries?access_token=Y1_N0gShtcshwQbkaOPc2u0lA-7zD8351Q0NWQCRCsU&&content_type=nicosStock"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const nameHyphenSpace = product.replaceAll("-", " ");
        const items = data.items;

        const searchProduct = items.filter((p) => {
          const productTitle = p.fields.title.toLowerCase();
          const filteredProduct = productTitle.includes(nameHyphenSpace);

          return filteredProduct;
        });

        console.log("selectedProduct: ", searchProduct);
        setProducts(searchProduct);
      });
  }

  useEffect(() => {
    if (params?.product) {
      pullResults(params.product);
    }
  }, [params]);

  return (
    <Layout>
      <BodySection className="general-comp">
        <div className="general-section__wrapper">
          <h2 className="h2__category"></h2>
          <div className="card-wrapper">
            {products.map((r, index) => (
              <Details
                key={index}
                pic={r.fields.url}
                title={r.fields.title}
                description={r.fields.description}
                price={r.fields.price}
                cat={r.fields.cat}
              />
            ))}
          </div>
        </div>
      </BodySection>
    </Layout>
  );
}
