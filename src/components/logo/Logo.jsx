import React from "react";
import { Link } from "react-router-dom";
import s from "./Logo.module.scss";

function Logo() {
  return (
    <div className={s.wrap}>
      <Link to="/">
        <div className={s.logo} />
      </Link>
      <div className={s.frame} />
    </div>
  );
}

export default Logo;
