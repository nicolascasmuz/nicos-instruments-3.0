import styled from "styled-components";

export const PrimaryTitle = styled.h1`
  font-family: "Bungee Shade", cursive;
  font-size: ${(props) => props.size};
  color: #f0efda;
  line-height: 1.25;
  text-align: center;
  margin: 0;
`;

export const SecondaryTitle = styled.h2`
  font-family: "Bungee", cursive;
  font-size: ${(props) => props.size};
  color: #ac1a22;
  line-height: 1.25;
  text-align: left;
  margin: 0;
`;
