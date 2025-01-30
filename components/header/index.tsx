import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Logo } from "../logo";
import { useMe } from "lib/hooks";
import searchLoupe from "resources/loupe.png";
import burgerMenu from "resources/menu.png";
import { StraightButton } from "ui/buttons";
import { Input, InputResponsive } from "ui/inputs";
import styles from "./header.module.css";
import { ProfileIcon } from "ui/icons";

export function Header() {
  const router = useRouter();
  const [loginDisplay, setLoginDisplay] = useState("none");
  const [profilePicDisplay, setProfilePicDisplay] = useState("none");
  const data: any = useMe();

  useEffect(() => {
    if (data) {
      setLoginDisplay("none");
      setProfilePicDisplay("block");
    } else {
      setLoginDisplay("block");
      setProfilePicDisplay("none");
    }
  }, [data]);

  const HandleSubmit = async (e) => {
    e.preventDefault();

    const queryValue = e.target.query.value;

    if (queryValue) {
      router.push("/results/" + queryValue);
    }
  };

  return (
    <div className={styles["header"]}>
      <div className={styles["logo-form-container"]}>
        <a href="/">
          <Logo />
        </a>
        <form className={styles["form"]} onSubmit={HandleSubmit}>
          <Input
            className={styles["input"]}
            type="text"
            name="query"
            placeholder="Teclado Yamaha..."
          />
          <StraightButton color="#362b2f" width="100px">
            Buscar
          </StraightButton>
        </form>
      </div>
      <input
        className={styles["input-check"]}
        type="checkbox"
        id="check-loupe"
      />
      <label htmlFor="check-loupe" className={styles["label"]}>
        <Image
          className={styles["loupe-img"]}
          src={searchLoupe}
          alt="search-loupe"
        />
      </label>
      <form className={styles["form-responsive"]} onSubmit={HandleSubmit}>
        <InputResponsive
          className={styles["input-search"]}
          type="text"
          name="query"
          placeholder="Teclado Yamaha..."
        />
      </form>
      <input
        className={styles["header__menu-input"]}
        type="checkbox"
        id="check"
      />
      <label htmlFor="check" className={styles["header__menu-label"]}>
        <Image className={styles["img"]} src={burgerMenu} alt="burger-menu" />
      </label>
      <ul className={styles["header__menu-lista"]}>
        <li>
          <a className={styles["header__option"]} href="/">
            Inicio
          </a>
          <a
            className={styles["header__option"]}
            href="/login"
            style={{ display: loginDisplay }}
          >
            Iniciar sesión
          </a>
          <a
            className={styles["header__option"]}
            href="/profile"
            style={{ display: profilePicDisplay }}
          >
            Mi perfil
          </a>
          <a className={styles["header__option"]} href="/about-us">
            Quienes somos
          </a>
          <a className={styles["header__option"]} href="/products">
            Productos
          </a>
          <a className={styles["header__option"]} href="/contact">
            Contacto
          </a>
        </li>
      </ul>
      <nav className={styles["nav"]}>
        <a className={styles["option"]} href="/about-us">
          Quienes somos
        </a>
        <a className={styles["option"]} href="/products">
          Productos
        </a>
        <a className={styles["option"]} href="/contact">
          Contacto
        </a>
        <a
          className={styles["header__login"]}
          href="/login"
          style={{ display: loginDisplay }}
        >
          Iniciar sesión
        </a>
        <a
          className={styles["header__profile-pic"]}
          href="/profile"
          style={{ display: profilePicDisplay }}
        >
          <ProfileIcon />
        </a>
      </nav>
    </div>
  );
}
