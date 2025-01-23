import { useRouter } from "next/router";
import styled from "styled-components";
import { RoundedButton } from "ui/buttons";
import { SecondaryTitle } from "ui/texts";

const CardComp = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto auto;
  gap: 0px;
  background-color: #f0efda;
  border: solid 3px #ac1a22;
  border-radius: 10px;
  width: 320px;
  height: 200px;
  padding-top: 10px;
  overflow: hidden;

  @media (min-width: 769px) {
    gap: 12px;
    grid-template-columns: none;
    grid-template-rows: none;
    width: 250px;
    height: auto;
    padding: 10px 0px;
  }

  .card-title {
    grid-column: 1 / span 2;
    line-height: 20px;
    color: #ac1a22;
    font-family: "Bungee", cursive;
    margin: 0px 10px 10px 10px;
    text-align: left;
  }

  @media (min-width: 769px) {
    .card-title {
      grid-column: auto;
      margin: 0px 10px 0 10px;
    }
  }

  .card-img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .card-price-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    gap: 25px;
  }

  @media (min-width: 769px) {
    .card-price-link {
      flex-direction: row;
      justify-content: space-between;
      align-items: initial;
      gap: 0px;
      padding: 0 15px;
    }
  }

  .card-price {
    display: inline;
    font-family: "Bebas Neue", cursive;
    font-size: 25px;
    color: #080808;
    margin: 0;
    text-align: left;
  }

  .card-see-more {
    font-family: "Bebas Neue", cursive;
    font-size: 15px;
    color: #f0efda;
    text-align: center;
    border: none;
    border-radius: 5px;
    background-color: #ac1a22;
    width: 75px;
    height: 35px;
    margin: 0px 10px;
    transition: all 0.25s;
  }

  .card-see-more:hover {
    opacity: 85%;
  }

  @media (min-width: 769px) {
    .card-see-more {
      text-align: center;
    }
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
      <SecondaryTitle size="18px">{props.name}</SecondaryTitle>
      <img
        src={props.pic}
        alt={props.name.toLowerCase().replaceAll(" ", "-")}
        className="card-img"
      />
      <div className="card-price-link">
        <h4 className="card-price">${props.price}</h4>
        <RoundedButton
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
