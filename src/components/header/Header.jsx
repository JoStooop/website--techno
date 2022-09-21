import React from "react";
import s from "./Header.module.scss";
import Nav from "../ui/nav/Nav";
import Logo from "../logo/Logo";
import MyWrap from "../ui/myWrap/MyWrap";

const arr = ["services", "about", "contacts"];

function Header(props) {
  const { bgColor, color, logoImg } = props;

  const styleHeader = {
    color,
  };
  return (
    <MyWrap bgColor={bgColor}>
      <header className={s.header} style={styleHeader}>
        <Logo logoImg={logoImg} color={color} />
        <Nav items={arr} color={color} />
        <span className={s.arrow}>{">"}</span>
        <div className={s.quote}> \ get quote</div>
      </header>
    </MyWrap>
  );
}

export default Header;
