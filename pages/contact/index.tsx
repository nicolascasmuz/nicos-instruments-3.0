import React, { useState } from "react";
import styles from "./contact.module.css";
import Layout from "components/layout";

export default function ContactPage() {
  const [form, setForm] = useState({});

  /* const input1El = document.querySelector(".section-form__input-name");
  const input2El = document.querySelector(".section-form__input-email");
  const input3El = document.querySelector(".section-form__textarea");
  const errorEl = document.querySelector(".section-form__error"); */

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <Layout>
      <section className={styles["general-comp"]}>
        <div className={styles["general-section__wrapper"]}>
          <h2 className={styles["section-form__title"]}>Contacto</h2>
          <form
            className={styles["section-form__form"]}
            onSubmit={handleSubmit}
          >
            <label htmlFor="nombre" className={styles["section-form__label"]}>
              <h3 className={styles["section-form__h3"]}>NOMBRE</h3>
              <input
                type="text"
                className={styles["section-form__input-name"]}
                id="nombre"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="email" className={styles["section-form__label"]}>
              <h3 className={styles["section-form__h3"]}>EMAIL</h3>
              <input
                type="email"
                className={styles["section-form__input-email"]}
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="mensaje" className={styles["section-form__label"]}>
              <h3 className={styles["section-form__h3"]}>MENSAJE</h3>
              <textarea
                className={styles["section-form__textarea"]}
                id="mensaje"
                cols="30"
                rows="10"
                name="mensaje"
                value={form.mensaje}
                onChange={handleChange}
              ></textarea>
              <h3 className={styles["section-form__error"]}>
                Por favor, complete todos los campos
              </h3>
            </label>
            <button className={styles["section-form__button"]}>Enviar</button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
