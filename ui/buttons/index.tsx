import styled from "styled-components";

export const StraightButton = styled.button`
  font-family: "Bebas Neue", cursive;
  font-size: 30px;
  color: var(--wheat);
  text-align: center;
  border: none;
  background-color: ${(props) => props.color};
  width: ${(props) => props.width};
  height: 45px;
  transition: all 0.25s;

  &:hover {
    opacity: 85%;
  }

  @media (min-width: 1069px) {
    width: ${(props) => (props.secondWidth ? props.secondWidth : props.width)};
  }
`;

export const RoundedButton = styled.button`
  font-family: "Bebas Neue", cursive;
  font-size: 15px;
  color: var(--wheat);
  text-align: center;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => props.color};
  width: ${(props) => props.width};
  height: 35px;
  transition: all 0.25s;

  &:hover {
    opacity: 85%;
  }
`;
