import React from "react";
import s from "./Header.module.scss";
import Nav from "../ui/nav/Nav";
import Logo from "../logo/Logo";

const arr = ["\\ services", "\\ about", "\\ contacts"];

function Header() {
  return (
    <header className={s.header}>
      <Logo />
      <Nav items={arr} />
      <span className={s.arrow}>{">"}</span>
      <div className={s.quote}> \ get quote</div>
    </header>
  );
}

export default Header;
