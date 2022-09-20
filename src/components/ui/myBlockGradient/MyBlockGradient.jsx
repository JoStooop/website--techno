import React from "react";
import s from "./MyBlockGradient.module.scss";

function MyBlockGradient(props) {
  const {
    fromPercent,
    toPercent,
    fromColor,
    toColor
  } = props;

  const isFromPercent = fromPercent ?? 0;
  const isToPercent = toPercent ?? 100;
  const style = {
    background: `linear-gradient(180deg, ${fromColor} ${isFromPercent}%, ${toColor} ${isToPercent}%)`,
  };
  return (
    <div className={s.wrap} style={style} />
  );
}

export default MyBlockGradient;
