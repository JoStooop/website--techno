import React from "react";
import s from "./Header.module.scss";
import Nav from "../ui/nav/Nav";
import Logo from "../logo/Logo";
import MyWrap from "../ui/myWrap/MyWrap";
import BG_COLORS from "../../data/bgColors";

const arr = ["services", "about", "contacts"];

function Header() {
  return (
    <MyWrap bgColor={BG_COLORS.DARK}>
      <header className={s.header}>
        <Logo />
        <Nav items={arr} />
        <span className={s.arrow}>{">"}</span>
        <div className={s.quote}> \ get quote</div>
      </header>
    </MyWrap>
  );
}

export default Header;
