import React from "react";
import Image from "next/image";
import nicosLogo from "resources/logo-shop@2000x.png";
import styles from "./logo.module.css";

export function Logo() {
  return (
    <Image
      className={styles["logo-comp"]}
      src={nicosLogo}
      alt="nicos-logo"
      width={86}
      height={75}
    />
  );
}
