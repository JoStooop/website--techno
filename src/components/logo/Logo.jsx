import React from "react";
import { Link } from "react-router-dom";
import s from "./Logo.module.scss";

function Logo(props) {
  const {
    color,
    logoImg
  } = props;

  const styleFrame = {
    color
  };

  const styleLogo = {
    backgroundImage: `url(${logoImg})`,
  };

  return (
    <div className={s.wrap}>
      <Link to="/">
        <div style={styleLogo} className={s.logo} />
      </Link>
      <div style={styleFrame} className={s.frame}>custom it solution</div>
    </div>
  );
}

export default Logo;
