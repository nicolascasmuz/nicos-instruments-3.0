import styled from "styled-components";
import Image from "next/image";
import logoRoland from "../../resources/logo-roland.webp";
import logoFender from "../../resources/logo-fender.webp";
import logoZildjian from "../../resources/logo-zildjian.webp";
import logoBoss from "../../resources/logo-boss.webp";
import logoYamaha from "../../resources/logo-yamaha.webp";
import logoIbanez from "../../resources/logo-ibanez.webp";

const BrandContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-rows: auto auto;
  grid-template-columns: auto auto auto;
  gap: 20px;

  .brand-img {
    width: 100px;
    height: 100px;
  }
`;

export function Brands() {
  return (
    <BrandContainer>
      <Image className="brand-img" src={logoRoland} alt="logo-roland" />
      <Image className="brand-img" src={logoFender} alt="logo-fender" />
      <Image className="brand-img" src={logoZildjian} alt="logo-zildjian" />
      <Image className="brand-img" src={logoBoss} alt="logo-boss" />
      <Image className="brand-img" src={logoYamaha} alt="logo-yamaha" />
      <Image className="brand-img" src={logoIbanez} alt="logo-ibanez" />
    </BrandContainer>
  );
}
