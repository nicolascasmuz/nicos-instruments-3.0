import styled from "styled-components";

interface SelectProps {
  width?: string;
}

export const Select = styled.select<SelectProps>`
  align-self: center;
  background-color: var(--black);
  border: none;
  font-family: "Bebas Neue", cursive;
  font-size: 25px;
  color: var(--white);
  width: ${(props) => props.width};
  height: 45px;z
`;

export const SelectResponsive = styled.select`
  align-self: center;
  background-color: var(--black);
  border: none;
  font-family: "Bebas Neue", cursive;
  font-size: 25px;
  color: var(--white);
  width: 266px;
  height: 45px;

  @media (min-width: 1069px) {
    width: 356px;
  }
`;
