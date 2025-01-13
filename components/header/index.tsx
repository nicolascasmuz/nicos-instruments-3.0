import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { Logo } from "../logo";
import nicosLogo from "../../resources/logo-shop@2000x.png";
import searchLoupe from "../../resources/loupe.png";
import burgerMenu from "../../resources/menu.png";

export function Header() {
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
      margin-left: 30px;
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

    .input-search {
      position: fixed;
      width: 100%;
      height: 0px;
      transition: all 0.5s;
      padding: 0 0 0 10px;
      background-color: #141414;
      opacity: 95%;
      border: none;
      text-align: left;
      font-size: 30px;
      font-family: "Bebas Neue", cursive;
      color: #fafafa;
    }

    @media (min-width: 769px) {
      .input-search {
        display: none;
      }
    }

    #check-loupe {
      display: none;
    }

    #check-loupe:checked ~ label .loupe-img {
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
      top: 74px;
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

    .nav {
      display: none;
      margin-right: 30px;
    }

    @media (min-width: 769px) {
      .nav {
        display: flex;
        flex-direction: column;
        gap: 8px;
        font-size: 20px;
      }
    }

    @media (min-width: 1069px) {
      .nav {
        flex-direction: row;
        gap: 5px;
      }
    }

    .option {
      font-family: "Bebas Neue", cursive;
      text-align: right;
      color: #080808;
      text-decoration: none;
      width: 106px;
      transition: all 0.25s;
    }

    .option:hover {
      opacity: 50%;
    }
  `;

  function HandleSubmit(e) {
    e.preventDefault();
  }

  return (
    <HeaderComp>
      <div className="logo-form-container">
        <a href="/">
          <Logo pic={nicosLogo} />
        </a>
        <form className="form" onSubmit={HandleSubmit}>
          <input
            className="input"
            type="text"
            name="query"
            placeholder="Teclado Yamaha..."
          />
          <button className="button">Buscar</button>
        </form>
      </div>
      <input className="input-check" type="checkbox" id="check-loupe" />
      <label htmlFor="check-loupe" className="label">
        <Image className="loupe-img" src={searchLoupe} alt="search-loupe" />
      </label>
      <form className="form-rexponsive" onSubmit={HandleSubmit}>
        <input
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
          <a className="header__option">Inicio</a>
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
      </nav>
    </HeaderComp>
  );
}
