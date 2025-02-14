import React from "react";
import { useRouter } from "next/navigation";
import styles from "./header.module.css";
import { ProfileIcon } from "ui/icons";

export function DropdownMenu(props) {
  const router = useRouter();

  async function HandleClick(e) {
    e.preventDefault();
    localStorage.removeItem("saved-state");

    router.refresh();
  }

  return (
    <>
      <input
        className={styles["header__menu-input_02"]}
        type="checkbox"
        id="check_02"
      />
      <label
        htmlFor="check_02"
        className={styles["header__profile-pic"]}
        style={props.style}
      >
        <ProfileIcon className={styles["img_02"]} />
      </label>
      <ul className={styles["header__menu-lista_02"]}>
        <li>
          <a className={styles["header__option_02"]} href="/profile">
            Mi perfil
          </a>
          <a className={styles["header__option_02"]} href="/purchases">
            Mis compras
          </a>
          <a
            onClick={HandleClick}
            className={styles["header__option_02"]}
            href="/"
          >
            Cerrar sesión
          </a>
        </li>
      </ul>
    </>
  );
}
