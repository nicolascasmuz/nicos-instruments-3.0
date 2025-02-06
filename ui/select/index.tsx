import styled from "styled-components";

export const Select = styled.select`
  align-self: center;
  background-color: #141414;
  border: none;
  font-family: "Bebas Neue", cursive;
  font-size: 25px;
  color: #fafafa;
  width: ${(props) => props.width};
  height: 45px;z
`;

export const SelectResponsive = styled.select`
  align-self: center;
  background-color: #141414;
  border: none;
  font-family: "Bebas Neue", cursive;
  font-size: 25px;
  color: #fafafa;
  width: 266px;
  height: 45px;

  @media (min-width: 1069px) {
    width: 356px;
  }
`;
