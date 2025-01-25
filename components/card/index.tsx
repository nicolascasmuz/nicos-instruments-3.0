import { useRouter } from "next/router";
import styled from "styled-components";
import { RoundedButton } from "ui/buttons";
import { PriceText, SecondaryTitle } from "ui/texts";

const CardComp = styled.div`
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 50% 50%;
  gap: 0px;
  background-color: #f0efda;
  border: solid 3px #ac1a22;
  border-radius: 10px;
  width: 320px;
  height: 200px;
  overflow: hidden;

  @media (min-width: 769px) {
    grid-template-rows: auto auto;
    grid-template-columns: 100%;
    gap: 12px;
    width: 250px;
    height: auto;
    padding-bottom: 10px;
  }

  .card-img {
    grid-row: 1 / span 2;
    grid-column: 1;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .card-price-link {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 100%;
  }

  @media (min-width: 769px) {
    .card-price-link {
      display: grid;
      grid-template-rows: auto auto;
      grid-template-columns: auto auto;
      justify-items: center;
      gap: 10px;
    }
  }

  .card__title {
    grid-row: 1;
    grid-column: 1 / span 2;
  }

  .card__price {
    grid-row: 2;
    grid-column: 1;
  }

  .card__button {
    grid-row: 2;
    grid-column: 2;
  }
`;

export function Card(props) {
  const router = useRouter();

  function HandleClick(e) {
    e.preventDefault();
    const attribute = e.target.getAttribute("name");
    const attModified = attribute.toLowerCase().replaceAll(" ", "-");

    router.push("/product/" + attModified);
  }

  return (
    <CardComp>
      <img
        src={props.pic}
        alt={props.name.toLowerCase().replaceAll(" ", "-")}
        className="card-img"
      />
      <div className="card-price-link">
        <SecondaryTitle className="card__title" size="18px">
          {props.name}
        </SecondaryTitle>
        <PriceText className="card__price" color="#080808">
          ${props.price}
        </PriceText>
        <RoundedButton
          className="card__button"
          name={props.name}
          onClick={HandleClick}
          color="#ac1a22"
          width="75px"
        >
          Ver mas...
        </RoundedButton>
      </div>
    </CardComp>
  );
}
