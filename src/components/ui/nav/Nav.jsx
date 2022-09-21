import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Nav.module.scss";

function Nav(props) {
  const {
    items,
    color
  } = props;

  const setActive = ({ isActive }) => ({
    color: isActive ? "red" : color,
  });

  const showItem = items.map((item) => (

    <NavLink
      key={item}
      className={s.item}
      style={setActive}
      to={`/${item}`}>
      \ {item}
    </NavLink>
  ));
  return (
    <nav className={s.nav}>
      {showItem}
    </nav>
  );
}

export default Nav;
