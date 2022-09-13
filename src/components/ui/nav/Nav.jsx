import React from "react";
import s from "./Nav.module.scss";

function Nav(props) {
  const { items } = props;
  const showItem = items.map((item) => <li className={s.item} key={item}>{item}</li>);
  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        {showItem}
      </ul>
    </nav>
  );
}

export default Nav;
