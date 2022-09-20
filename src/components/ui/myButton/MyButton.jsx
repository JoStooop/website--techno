import React from "react";
import s from "./MyButton.module.scss";

function MyButton(props) {
  const { children } = props;
  return (
    <button className={s.button}>
      {children}
    </button>
  );
}

export default MyButton;
