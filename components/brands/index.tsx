import Image from "next/image";
import logoRoland from "../../resources/logo-roland.webp";
import logoFender from "../../resources/logo-fender.webp";
import logoZildjian from "../../resources/logo-zildjian.webp";
import logoBoss from "../../resources/logo-boss.webp";
import logoYamaha from "../../resources/logo-yamaha.webp";
import logoIbanez from "../../resources/logo-ibanez.webp";
import styles from "./brands.module.css";

export function Brands() {
  return (
    <section className={styles["brand-container"]}>
      <Image
        className={styles["brand-img"]}
        src={logoRoland}
        alt="logo-roland"
      />
      <Image
        className={styles["brand-img"]}
        src={logoFender}
        alt="logo-fender"
      />
      <Image
        className={styles["brand-img"]}
        src={logoZildjian}
        alt="logo-zildjian"
      />
      <Image className={styles["brand-img"]} src={logoBoss} alt="logo-boss" />
      <Image
        className={styles["brand-img"]}
        src={logoYamaha}
        alt="logo-yamaha"
      />
      <Image
        className={styles["brand-img"]}
        src={logoIbanez}
        alt="logo-ibanez"
      />
    </section>
  );
}
