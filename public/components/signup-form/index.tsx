import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "./signup-form.module.css";
import { SignupSendCode, saveToken } from "lib/api";
import { SelectResponsive } from "ui/select";
import { Input } from "ui/inputs";

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [display, setDisplay] = useState(false);
  const router = useRouter();

  const HandleEmailSubmit = async (e) => {
    e.preventDefault();

    const emailValue = e.target.email.value;
    const sexValue = e.target.sex.value;
    const birthValue = e.target.birth.value;
    const cityValue = e.target.city.value;
    const streetValue = e.target.street.value;
    const numberValue = e.target.number.value;

    const data = {
      email: emailValue,
      userData: {
        sex: sexValue,
        birth: birthValue,
      },
      address: {
        city: cityValue,
        street: streetValue,
        number: numberValue,
      },
    };

    if (emailValue) {
      setEmail(emailValue);
      SignupSendCode(data);
      setDisplay(true);
    }
  };

  const HandleCodeSubmit = async (e) => {
    e.preventDefault();

    const codeValue = e.target.code.value;

    if (codeValue) {
      console.log("code data: ", { email, codeValue });
      saveToken(email, codeValue);
      router.push("/");
    }
  };

  return (
    <div className={styles["signup-form__container"]}>
      <form
        className={styles["signup-form"]}
        style={{ display: display ? "none" : "flex" }}
        onSubmit={HandleEmailSubmit}
      >
        <label htmlFor="email" className={styles["signup-form__label"]}>
          <h3 className={styles["signup-form__h3"]}>EMAIL</h3>
          <Input
            className={styles["signup-input"]}
            type="email"
            name="email"
            id="email"
          />
        </label>
        <label htmlFor="sex" className={styles["signup-form__label"]}>
          <h3 className={styles["signup-form__h3"]}>SEXO</h3>
          <SelectResponsive
            className={styles["signup-form__select"]}
            name="sex"
            id="sex"
          >
            <option value="hombre">Hombre</option>
            <option value="mujer">Mujer</option>
          </SelectResponsive>
        </label>
        <label htmlFor="birth" className={styles["signup-form__label"]}>
          <h3 className={styles["signup-form__h3"]}>FECHA DE NACIMIENTO</h3>
          <Input
            className={styles["signup-input"]}
            type="date"
            name="birth"
            id="birth"
          />
        </label>
        <label htmlFor="city" className={styles["signup-form__label"]}>
          <h3 className={styles["signup-form__h3"]}>CIUDAD</h3>
          <Input
            className={styles["signup-input"]}
            type="text"
            name="city"
            id="city"
          />
        </label>
        <label htmlFor="street" className={styles["signup-form__label"]}>
          <h3 className={styles["signup-form__h3"]}>CALLE</h3>
          <Input
            className={styles["signup-input"]}
            type="text"
            name="street"
            id="street"
          />
        </label>
        <label htmlFor="number" className={styles["signup-form__label"]}>
          <h3 className={styles["signup-form__h3"]}>NÚMERO</h3>
          <Input
            className={styles["signup-input"]}
            type="text"
            name="number"
            id="number"
          />
        </label>
        <button className={styles["signup-button"]}>Siguiente</button>
      </form>
      <form
        className={styles["code-form"]}
        style={{ display: display ? "flex" : "none" }}
        onSubmit={HandleCodeSubmit}
      >
        <input className={styles["code-input"]} type="text" name="code" />
        <button className={styles["code-button"]}>Ingresar</button>
      </form>
      <p className={styles["signup-form__p"]}>
        ¿Ya tenés una cuenta?{" "}
        <a href="/login" className={styles["signup-form__a"]}>
          Iniciar sesión.
        </a>
      </p>
    </div>
  );
}
