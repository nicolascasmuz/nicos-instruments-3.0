import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Details } from "../../components/details";
import { searchProducts } from "lib/api";
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

  async function pullResult(p) {
    const res = await searchProducts(p);
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
      <BodySection className="general-comp">
        <div className="general-section__wrapper">
          <h2 className="h2__category"></h2>
          <div className="card-wrapper">
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
      </BodySection>
    </Layout>
  );
}
