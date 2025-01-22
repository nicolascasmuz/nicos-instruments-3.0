import styled from "styled-components";

export const Select = styled.select`
  align-self: center;
  background-color: #141414;
  border: none;
  font-family: "Bebas Neue", cursive;
  font-size: 25px;
  color: #fafafa;
  width: ${(props) => props.width};
  height: 45px;
`;
