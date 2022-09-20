import React from "react";
import s from "./MyCircle.module.scss";

function MyCircle(props) {
  const { children } = props;
  return (
    <div className={s.wrap}>
      {children}
    </div>
  );
}

export default MyCircle;
