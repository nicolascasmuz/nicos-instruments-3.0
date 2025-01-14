import styled from "styled-components";
import React, { useState } from "react";
import styles from "./contact.module.css";
import Layout from "components/layout";

const BodySection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #362b2f;
  min-height: calc(100vh - 260px);
  overflow: auto;
  padding: 40px 60px;

  .general-section__wrapper {
    display: grid;
    align-items: flex-start;
    gap: 65px;
  }

  @media (min-width: 769px) {
    .general-section__wrapper {
      grid-template-columns: auto auto;
      grid-template-rows: auto;
    }
  }

  .section-form__form {
    display: grid;
    gap: 20px;
    max-width: 425px;
    min-width: 315px;
  }

  @media (min-width: 769px) {
    .section-form__form {
      grid-column: 2;
      grid-row: 1;
    }
  }

  .section-form__title {
    font-family: "Bungee Shade", cursive;
    text-align: center;
    font-size: 32px;
    color: #f0efda;
    line-height: 1;
    margin: 0;
  }

  @media (min-width: 769px) {
    .section-form__title {
      grid-column: 1;
      grid-row: 1;
      font-size: 50px;
    }
  }

  .section-form__h3 {
    font-family: "Bebas Neue", cursive;
    font-size: 20px;
    color: #f0efda;
    margin: 0;
  }

  .section-form__input-name {
    background-color: #141414;
    border: none;
    font-family: "Bebas Neue", cursive;
    font-size: 25px;
    color: #fafafa;
    width: 100%;
    height: 45px;
  }

  .section-form__input-email {
    background-color: #141414;
    border: none;
    font-family: "Bebas Neue", cursive;
    font-size: 25px;
    color: #fafafa;
    width: 100%;
    height: 45px;
  }

  .section-form__textarea {
    background-color: #141414;
    border: none;
    font-family: "Bebas Neue", cursive;
    font-size: 18px;
    color: #fafafa;
    width: 100%;
    height: 160px;
  }

  .section-form__error {
    display: none;
    font-family: "Bebas Neue", cursive;
    font-size: 20px;
    color: #ea2027;
    margin: 0;
  }

  .section-form__button {
    border: none;
    background-color: #f0efda;
    color: #362b2f;
    font-family: "Bebas Neue", cursive;
    font-size: 20px;
    font-weight: 700;
    height: 45px;
    margin-top: 20px;
    transition: all 0.25s;
  }

  .section-form__button:hover {
    opacity: 85%;
  }
`;

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
