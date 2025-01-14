import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "./login-form.module.css";
import { sendCode, saveToken } from "lib/api";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [display, setDisplay] = useState(false);
  const router = useRouter();

  const HandleEmailSubmit = async (e) => {
    e.preventDefault();

    const emailValue = e.target.email.value;

    if (emailValue) {
      setEmail(emailValue);
      sendCode(emailValue);
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
    <div>
      <form
        className={styles["email-form"]}
        style={{ display: display ? "none" : "flex" }}
        onSubmit={HandleEmailSubmit}
      >
        <input className={styles["login-input"]} type="email" name="email" />
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
    </div>
  );
}
