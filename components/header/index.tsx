import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";
import { Logo } from "../logo";
import { useMe } from "lib/hooks";
import nicosLogo from "resources/logo-shop@2000x.png";
import searchLoupe from "resources/loupe.png";
import burgerMenu from "resources/menu.png";
import profilePic from "resources/users.png";
import { StraightButton } from "ui/buttons";
import { Input, InputResponsive } from "ui/inputs";

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

  const HeaderComp = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 25px;
    background-color: #f0efda;
    font-family: "Bebas Neue Neue", cursive;
    height: 90px;

    @media (min-width: 769px) {
      gap: 25px;
      background-color: #f0efda;
      padding: 0px 30px;
      font-family: "Bebas Neue", cursive;
      width: 100%;
      height: 120px;
    }

    .logo-form-container {
      display: flex;
      align-items: center;
      gap: 50px;
    }

    .logo-comp {
      transition: all 0.25s;
    }

    .logo-comp:hover {
      opacity: 85%;
    }

    .label {
      cursor: pointer;
    }

    .loupe-img {
      width: 40px;
      height: 40px;
      transition: all 0.5s;
    }

    @media (min-width: 769px) {
      .loupe-img {
        display: none;
      }
    }

    .form-rexponsive {
      position: fixed;
      height: 0px;
      top: 90px;
      transition: all 0.5s;
    }

    #check-loupe {
      display: none;
    }

    #check-loupe:checked ~ label .loupe-img {
      width: 50px;
      height: 50px;
      padding: 10px;
      border-radius: 25%;
    }

    #check-loupe:checked ~ .form-rexponsive .input-search {
      height: 55px;
    }

    .form {
      display: none;
    }

    @media (min-width: 769px) {
      .form {
        display: flex;
        gap: 5px;
      }
    }

    .input {
      font-family: "Bebas Neue", cursive;
      font-size: 30px;
      color: #fafafa;
      background-color: #141414;
      border: none;
      width: 266px;
      height: 45px;
      padding-left: 10px;
    }

    @media (min-width: 1069px) {
      .input {
        width: 356px;
      }
    }

    .button {
      background-color: #362b2f;
      color: #f0efda;
      font-family: "Bebas Neue", cursive;
      font-size: 100%;
      border: none;
      border-style: none;
      min-width: 80px;
      min-height: 45px;
      padding: 0px;
      font-size: 20px;
      opacity: 100%;
      transition: all 0.25s;
    }

    .button:hover {
      opacity: 85%;
    }

    .button:active {
      border: 3px;
      border-style: inset;
    }

    .header__menu-label {
      cursor: pointer;
    }

    .img {
      width: 40px;
      height: 40px;
      margin: 0 30px 0 0;
      transition: all 0.5s;
    }

    @media (min-width: 769px) {
      .img {
        display: none;
      }
    }

    .header__menu-lista {
      position: fixed;
      width: 100%;
      height: 0vh;
      top: 90px;
      background-color: #141414;
      opacity: 95%;
      text-align: center;
      transition: all 0.5s;
      padding: 0;
      z-index: 20;
    }

    @media (min-width: 769px) {
      .header__menu-lista {
        display: none;
      }
    }

    .header__menu-lista li {
      list-style: none;
      display: none;
      line-height: 30px;
      margin: 100px 0;
      transition: all 0.5s;
    }

    .header__menu-lista li a {
      color: #fafafa;
    }

    #check {
      display: none;
    }

    #check:checked ~ .header__menu-lista {
      height: 100vh;
    }

    #check:checked ~ .header__menu-label .img {
      width: 50px;
      height: 50px;
      padding: 10px;
      border-radius: 25%;
    }

    #check:checked ~ .header__menu-lista li {
      display: flex;
      flex-direction: column;
      gap: 50px;
    }

    .header__option {
      font-family: "Bebas Neue", cursive;
      font-size: 30px;
      text-decoration: none;
    }

    .login {
      display: ${loginDisplay};
    }

    .profile {
      display: ${profilePicDisplay};
    }

    .nav {
      display: none;
    }

    @media (min-width: 769px) {
      .nav {
        display: grid;
        grid-template-rows: auto auto auto;
        grid-template-columns: 1fr 50px;
        gap: 0 15px;
        font-size: 20px;
        align-items: center;
      }
    }

    @media (min-width: 1069px) {
      .nav {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 25px;
      }
    }

    .option {
      grid-column: 1;
      font-family: "Bebas Neue", cursive;
      text-align: right;
      color: #080808;
      text-decoration: none;
      transition: all 0.25s;
    }

    .option:hover {
      opacity: 50%;
    }

    .header__login {
      display: ${loginDisplay};
      color: #ac1a22;
      font-family: "Bungee", cursive;
      width: 90px;
      text-align: center;
      line-height: 22px;
      align-self: center;
      transition: all 0.25s;
    }

    .header__login:hover {
      opacity: 50%;
    }

    @media (min-width: 769px) {
      .header__login {
        grid-row: 2;
        grid-column: 2;
      }
    }

    .header__profile-pic {
      display: ${profilePicDisplay};
      align-self: center;
      transition: all 0.25s;
    }

    .header__profile-pic:hover {
      opacity: 50%;
    }

    @media (min-width: 769px) {
      .header__profile-pic {
        grid-row: 2;
        grid-column: 2;
      }
    }
  `;

  const HandleSubmit = async (e) => {
    e.preventDefault();

    const queryValue = e.target.query.value;

    if (queryValue) {
      router.push("/results/" + queryValue);
    }
  };

  return (
    <HeaderComp>
      <div className="logo-form-container">
        <a href="/">
          <Logo pic={nicosLogo} />
        </a>
        <form className="form" onSubmit={HandleSubmit}>
          <Input
            className="input"
            type="text"
            name="query"
            placeholder="Teclado Yamaha..."
          />
          <StraightButton color="#362b2f" width="100px">
            Buscar
          </StraightButton>
        </form>
      </div>
      <input className="input-check" type="checkbox" id="check-loupe" />
      <label htmlFor="check-loupe" className="label">
        <Image className="loupe-img" src={searchLoupe} alt="search-loupe" />
      </label>
      <form className="form-rexponsive" onSubmit={HandleSubmit}>
        <InputResponsive
          className="input-search"
          type="text"
          name="query"
          placeholder="Teclado Yamaha..."
        />
      </form>
      <input className="header__menu-input" type="checkbox" id="check" />
      <label htmlFor="check" className="header__menu-label">
        <Image className="img" src={burgerMenu} alt="burger-menu" />
      </label>
      <ul className="header__menu-lista">
        <li>
          <a className="header__option" href="/">
            Inicio
          </a>
          <a className="header__option login" href="/login">
            Iniciar sesión
          </a>
          <a className="header__option profile" href="/profile">
            Mi perfil
          </a>
          <a className="header__option" href="/about-us">
            Quienes somos
          </a>
          <a className="header__option" href="/products">
            Productos
          </a>
          <a className="header__option" href="/contact">
            Contacto
          </a>
        </li>
      </ul>
      <nav className="nav">
        <a className="option" href="/about-us">
          Quienes somos
        </a>
        <a className="option" href="/products">
          Productos
        </a>
        <a className="option" href="/contact">
          Contacto
        </a>
        <a className="header__login" href="/login">
          Iniciar sesión
        </a>
        <a className="header__profile-pic" href="/profile">
          <Image src={profilePic} alt="profile-pic" height={50} width={50} />
        </a>
      </nav>
    </HeaderComp>
  );
}
