import styled from "styled-components";

export const Input = styled.input`
  font-family: "Bebas Neue", cursive;
  font-size: 30px;
  color: #fafafa;
  background-color: #141414;
  border: none;
  width: 266px;
  height: 45px;
  padding-left: 10px;

  @media (min-width: 1069px) {
    width: 356px;
  }
`;

export const InputResponsive = styled.input`
  position: fixed;
  width: 100%;
  height: 0px;
  transition: all 0.5s;
  padding: 0 0 0 10px;
  background-color: #141414;
  opacity: 95%;
  border: none;
  text-align: left;
  font-size: 30px;
  font-family: "Bebas Neue", cursive;
  color: #fafafa;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const TextArea = styled.textarea`
  background-color: #141414;
  border: none;
  font-family: "Bebas Neue", cursive;
  font-size: 18px;
  color: #fafafa;
  width: 266px;
  height: 160px;

  @media (min-width: 1069px) {
    width: 356px;
  }
`;
