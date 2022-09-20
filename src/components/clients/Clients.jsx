import React from "react";
import s from "./Clients.module.scss";
import MySlider from "../ui/mySlider/MySlider";
import MyWrap from "../ui/myWrap/MyWrap";

function Clients() {
  return (
    <div className={s.wrap}>
      <MyWrap>
        <h2 className={s.title}>
          Our
          <span className={s.titleSpan}>clients</span>
        </h2>
        <div className={s.center}>
          <p className={s.textCenter}>
            One of our key objectives has been to establish lasting business relationships with
            multiple high profile and respected brands, such as:
          </p>
        </div>
      </MyWrap>
      <MySlider>
        <div className={s.brand} />
        <div className={s.brand} />
        <div className={s.brand} />
        <div className={s.brand} />
        <div className={s.brand} />
        <div className={s.brand} />
      </MySlider>
    </div>
  );
}

export default Clients;
