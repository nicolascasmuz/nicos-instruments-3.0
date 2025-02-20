import React, { useState, useEffect } from "react";
import { useMe } from "lib/hooks";
import { editData, editAddress } from "lib/api";
import Layout from "components/layout";
import styles from "./profile.module.css";
import { Select, SelectResponsive } from "ui/select";
import { StraightButton } from "ui/buttons";
import { PrimaryTitle } from "ui/texts";
import { Input } from "ui/inputs";

export default function Profile() {
  const data: any = useMe();

  const [me, setMe] = useState("data");
  const [display, setDisplay] = useState(false);

  const [nickname, setNickname] = useState(data?.userData.nickname);
  const [sex, setSex] = useState(data?.userData.sex);
  const [birth, setBirth] = useState(data?.userData.birth);

  const [city, setCity] = useState(data?.address.city);
  const [street, setStreet] = useState(data?.address.street);
  const [number, setNumber] = useState(data?.address.number);

  useEffect(() => {
    setNickname(data?.userData.nickname);
    setSex(data?.userData.sex);
    setBirth(data?.userData.birth);

    setCity(data?.address.city);
    setStreet(data?.address.street);
    setNumber(data?.address.number);
  }, [data]);

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
        sex: e.target.sex.value,
        birth: e.target.birth.value,
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
          <PrimaryTitle size="50px">Mi perfil</PrimaryTitle>
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
              <Input
                type="text"
                name="nick"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
              />
            </label>
            <label htmlFor="nombre" className={styles["section-form__label"]}>
              <h3 className={styles["section-form__h3"]}>SEXO</h3>
              <SelectResponsive
                name="sex"
                value={sex}
                id="sex"
                onChange={(e) => setSex(e.target.value)}
              >
                <option value="hombre">Hombre</option>
                <option value="mujer">Mujer</option>
              </SelectResponsive>
            </label>
            <label htmlFor="nombre" className={styles["section-form__label"]}>
              <h3 className={styles["section-form__h3"]}>
                FECHA DE NACIMIENTO
              </h3>
              <Input
                type="date"
                name="birth"
                value={birth}
                onChange={(e) => setBirth(e.target.value)}
              />
            </label>
            <StraightButton color="#ac1a22" width="266px" secondWidth="356px">
              Editar
            </StraightButton>
          </form>
          <form
            style={{ display: display ? "grid" : "none" }}
            className={styles["modify-data-form"]}
            onSubmit={HandleAddressSubmit}
          >
            <label htmlFor="nombre" className={styles["section-form__label"]}>
              <h3 className={styles["section-form__h3"]}>CIUDAD</h3>
              <Input
                type="text"
                name="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </label>
            <label htmlFor="nombre" className={styles["section-form__label"]}>
              <h3 className={styles["section-form__h3"]}>CALLE</h3>
              <Input
                type="text"
                name="street"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />
            </label>
            <label htmlFor="nombre" className={styles["section-form__label"]}>
              <h3 className={styles["section-form__h3"]}>NÚMERO</h3>
              <Input
                type="text"
                name="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </label>
            <StraightButton color="#ac1a22" width="266px" secondWidth="356px">
              Editar
            </StraightButton>
          </form>
        </div>
      </section>
    </Layout>
  );
}
