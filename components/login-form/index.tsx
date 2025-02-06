import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "./login-form.module.css";
import { LoginSendCode, saveToken } from "lib/api";
import { Select } from "ui/select";
import { Input } from "ui/inputs";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [display, setDisplay] = useState(false);
  const router = useRouter();

  const HandleEmailSubmit = async (e) => {
    e.preventDefault();

    const emailValue = e.target.email.value;

    if (emailValue) {
      setEmail(emailValue);
      LoginSendCode(emailValue);
      setDisplay(true);
    }
  };

  const HandleCodeSubmit = async (e) => {
    e.preventDefault();

    const codeValue = e.target.code.value;

    if (codeValue) {
      saveToken(email, codeValue);
      router.push("/");
    }
  };

  return (
    <div className={styles["login-form__container"]}>
      <form
        className={styles["login-form"]}
        style={{ display: display ? "none" : "flex" }}
        onSubmit={HandleEmailSubmit}
      >
        <label htmlFor="email" className={styles["login-form__label"]}>
          <h3 className={styles["login-form__h3"]}>EMAIL</h3>
          <Input
            className={styles["login-input"]}
            type="email"
            name="email"
            id="email"
          />
        </label>
        <button className={styles["login-button"]}>Siguiente</button>
      </form>
      <form
        className={styles["code-form"]}
        style={{ display: display ? "flex" : "none" }}
        onSubmit={HandleCodeSubmit}
      >
        <input className={styles["code-input"]} type="text" name="code" />
        <button className={styles["code-button"]}>Ingresar</button>
      </form>
      <p className={styles["login-form__p"]}>
        ¿Aún no estás registrado?{" "}
        <a href="/signup" className={styles["login-form__a"]}>
          Registrarse
        </a>
      </p>
    </div>
  );
}
