import React from "react";
import s from "./Logo.module.scss";

function Logo() {
  return (
    <div className={s.wrap}>
      <div className={s.logo} />
      <div className={s.frame} />
    </div>
  );
}

export default Logo;
