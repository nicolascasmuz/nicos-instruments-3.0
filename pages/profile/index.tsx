import React, { useState, useEffect } from "react";
import { useMe } from "lib/hooks";
import { editData, editAddress } from "lib/api";
import Layout from "components/layout";
import styles from "./profile.module.css";
import { Select } from "ui/select";

export default function Profile() {
  const data: any = useMe();

  const [me, setMe] = useState("data");
  const [display, setDisplay] = useState(false);

  const [email, setEmail] = useState(data?.email);
  const [nickname, setNickname] = useState(data?.userData.nickname);
  const [age, setAge] = useState(data?.userData.age);
  const [weight, setWeight] = useState(data?.userData.weight);
  const [height, setHeight] = useState(data?.userData.height);

  const [city, setCity] = useState(data?.address.city);
  const [street, setStreet] = useState(data?.address.street);
  const [number, setNumber] = useState(data?.address.number);

  useEffect(() => {
    setEmail(data?.email);
    setNickname(data?.userData.nickname);
    setAge(data?.userData.age);
    setWeight(data?.userData.weight);
    setHeight(data?.userData.height);

    setCity(data?.address.city);
    setStreet(data?.address.street);
    setNumber(data?.address.number);
  }, [data]);

  /* useEffect(() => {
    setCity(addressData?.address.city);
    setStreet(addressData?.address.street);
    setNumber(addressData?.address.number);
    console.log("addressData: ", addressData);
  }, [addressData]); */

  function handleChange(e) {
    if (e.target.value == "data") {
      setMe(e.target.value);
      setDisplay(false);
    }
    if (e.target.value == "address") {
      setMe(e.target.value);
      setDisplay(true);
    }
  }

  const HandleDataSubmit = async (e) => {
    e.preventDefault();

    const newData = {
      email: data?.email,
      userData: {
        nickname: e.target.nick.value,
        age: e.target.age.value,
        weight: e.target.weight.value,
        height: e.target.height.value,
      },
    };

    editData(newData);
  };

  const HandleAddressSubmit = async (e) => {
    e.preventDefault();

    const newData = {
      email: data?.email,
      address: {
        city: e.target.city.value,
        street: e.target.street.value,
        number: e.target.number.value,
      },
    };

    editAddress(newData);
  };

  return (
    <Layout>
      <section className={styles["general-comp"]}>
        <div className={styles["general-section__wrapper"]}>
          <h1 className={styles["h2__art-des"]}>Modificar datos</h1>
          <Select name="me" value={me} onChange={handleChange} width="50%">
            <option value="data">Datos</option>
            <option value="address">Dirección</option>
          </Select>
          <form
            style={{ display: display ? "none" : "grid" }}
            className={styles["modify-data-form"]}
            onSubmit={HandleDataSubmit}
          >
            <label htmlFor="nombre" className={styles["section-form__label"]}>
              <h3 className={styles["section-form__h3"]}>NICKNAME</h3>
              <input
                className={styles["login-input"]}
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label htmlFor="nombre" className={styles["section-form__label"]}>
              <h3 className={styles["section-form__h3"]}>EDAD</h3>
              <input
                className={styles["login-input"]}
                type="text"
                name="nick"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
              />
            </label>
            <label htmlFor="nombre" className={styles["section-form__label"]}>
              <h3 className={styles["section-form__h3"]}>
                FECHA DE NACIMIENTO
              </h3>
              <input
                className={styles["login-input"]}
                type="text"
                name="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </label>
            <button className={styles["login-button"]} color="#ff7f87">
              Editar
            </button>
          </form>
          <form
            style={{ display: display ? "grid" : "none" }}
            className={styles["modify-data-form"]}
            onSubmit={HandleAddressSubmit}
          >
            <label htmlFor="nombre" className={styles["section-form__label"]}>
              <h3 className={styles["section-form__h3"]}>CIUDAD</h3>
              <input
                className={styles["login-input"]}
                type="text"
                name="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </label>
            <label htmlFor="nombre" className={styles["section-form__label"]}>
              <h3 className={styles["section-form__h3"]}>CALLE</h3>
              <input
                className={styles["login-input"]}
                type="text"
                name="street"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />
            </label>
            <label htmlFor="nombre" className={styles["section-form__label"]}>
              <h3 className={styles["section-form__h3"]}>NÚMERO</h3>
              <input
                className={styles["login-input"]}
                type="text"
                name="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </label>
            <button className={styles["login-button"]} color="#ff7f87">
              Editar
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
