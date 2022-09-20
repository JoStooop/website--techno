import React from "react";
import s from "./MyWrap.module.scss";

function MyWrap(props) {
  const { children, bgColor } = props;
  const style = {
    backgroundColor: bgColor,
  };
  return (
    <div className={s.wrap} style={style}>
      {children}
    </div>
  );
}

export default MyWrap;
