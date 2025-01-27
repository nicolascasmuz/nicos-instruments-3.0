import React from "react";
import Image from "next/image";
import { Logo } from "../logo";
import { WhatsappIcon } from "ui/icons";
import { InstagramIcon } from "ui/icons";
import { FacebookIcon } from "ui/icons";
import { YoutubeIcon } from "ui/icons";
import styles from "./footer.module.css";

export function Footer() {
  return (
    <div className={styles["footer"]}>
      <div className={styles["footer-logo-copyright"]}>
        <Logo />
        <h6 className={styles["footer-copyright"]}>
          © 2025 Nico's Instruments
        </h6>
      </div>
      <div className={styles["footer-socialmedia"]}>
        <a href="" className={styles["footer__links link-facebook"]}>
          <FacebookIcon />
        </a>
        <a href="" className={styles["footer__links link-instagram"]}>
          <InstagramIcon />
        </a>
        <a href="" className={styles["footer__links link-whatsapp"]}>
          <WhatsappIcon />
        </a>
        <a href="" className={styles["footer__links link-youtube"]}>
          <YoutubeIcon />
        </a>
      </div>
      <p className={styles["footer-datos"]}>
        (011) 4344-1298 contacto@nicosinstruments.com.ar Laprida 1234 Lomas de
        Zamora, Buenos Aires
      </p>
    </div>
  );
}
