import styled from "styled-components";

export const StraightButton = styled.button`
  font-family: "Bebas Neue", cursive;
  font-size: 30px;
  color: #f0efda;
  text-align: center;
  border: none;
  background-color: ${(props) => props.color};
  width: ${(props) => props.width};
  height: 45px;
  transition: all 0.25s;
`;

export const RoundedButton = styled.button`
  font-family: "Bebas Neue", cursive;
  font-size: 15px;
  color: #f0efda;
  text-align: center;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => props.color};
  width: ${(props) => props.width};
  height: 35px;
  transition: all 0.25s;
`;
