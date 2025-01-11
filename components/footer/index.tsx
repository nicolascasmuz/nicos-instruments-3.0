import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { Logo } from "../logo";
import logoFacebook from "../../resources/logo-facebook_1@4x.png";
import logoInstagram from "../../resources/logo-instagram_1@4x.png";
import logoWhatsapp from "../../resources/logo-whatsapp_1@4x.png";
import logoYoutube from "../../resources/logo-youtube_1@4x.png";
import nicosLogo from "../../resources/logo-shop@2000x.png";

const FooterComp = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  background-color: #f0efda;
  color: #362b2f;
  font-family: "Bebas Neue", cursive;
  height: auto;
  padding: 30px 0px;

  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 140px;
    padding: 10px 30px;
  }

  .footer-logo-copyright {
    display: grid;
    justify-items: center;
    gap: 7px;
  }

  .footer-logo {
    height: 60px;
  }

  .footer-copyright {
    margin: 0px;
  }

  .footer-socialmedia {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    justify-content: center;
    gap: 10px;
  }

  @media (min-width: 769px) {
    .footer-socialmedia {
      display: flex;
      gap: 10px;
    }
  }

  .footer__links {
    height: 35px;
  }

  .logo-facebook {
    width: 35px;
    height: 35px;
  }
  .logo-instagram {
    width: 35px;
    height: 35px;
  }
  .logo-whatsapp {
    width: 35px;
    height: 35px;
  }
  .logo-youtube {
    width: 35px;
    height: 35px;
  }

  .footer-datos {
    text-align: center;
    width: 220px;
    margin: 0;
  }

  @media (min-width: 769px) {
    .footer-datos {
      text-align: right;
    }
  }
`;

export function Footer() {
  return (
    <FooterComp className="footer">
      <div className="footer-logo-copyright">
        <Logo pic={nicosLogo} />
        <h6 className="footer-copyright">© 2023 Nico's Instruments</h6>
      </div>
      <div className="footer-socialmedia">
        <a href="" className="footer__links link-facebook">
          <Image
            src={logoFacebook}
            alt="logo-facebook"
            className="logo-facebook"
          />
        </a>
        <a href="" className="footer__links link-instagram">
          <Image
            src={logoInstagram}
            alt="logo-instagram"
            className="logo-instagram"
          />
        </a>
        <a href="" className="footer__links link-whatsapp">
          <Image
            src={logoWhatsapp}
            alt="logo-whatsapp"
            className="logo-whatsapp"
          />
        </a>
        <a href="" className="footer__links link-youtube">
          <Image
            src={logoYoutube}
            alt="logo-youtube"
            className="logo-youtube"
          />
        </a>
      </div>
      <p className="footer-datos">
        (011) 4344-1298 contacto@nicosinstruments.com.ar Laprida 1234 Lomas de
        Zamora, Buenos Aires
      </p>
    </FooterComp>
  );
}
