import styled from "styled-components";

interface TextProps {
  size?: string;
}

export const PrimaryTitle = styled.h1<TextProps>`
  font-family: "Bungee Shade", cursive;
  font-size: ${(props) => props.size};
  font-weight: 600;
  color: var(--wheat);
  line-height: 1.25;
  text-align: center;
  margin: 0;
`;

export const SecondaryTitle = styled.h2<TextProps>`
  font-family: "Bungee", cursive;
  font-size: ${(props) => props.size};
  font-weight: 600;
  color: var(--red);
  line-height: 1.25;
  text-align: center;
  margin: 0;
`;

export const Subtitle = styled.h3`
  font-family: "Bebas Neue", cursive;
  font-size: 14px;
  font-weight: 200;
  color: var(--wheat);
  line-height: 1.25;
  text-align: left;
  margin: 0;
`;

export const Body = styled.p`
  font-family: "Bebas Neue", cursive;
  font-size: 18px;
  font-weight: 200;
  color: var(--wheat);
  line-height: 1.25;
  text-align: left;
  margin: 0;
`;

export const PriceText = styled.h4`
  font-family: "Bebas Neue", cursive;
  font-size: 25px;
  font-weight: 200;
  color: ${(props) => props.color};
  line-height: 1.25;
  text-align: left;
  margin: 0;
`;
