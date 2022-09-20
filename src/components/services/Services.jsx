import React from "react";
import s from "./Services.module.scss";
import MyWrap from "../ui/myWrap/MyWrap";
import MySlider from "../ui/mySlider/MySlider";

function Services() {
  return (
    <div className={s.wrap}>
      <MyWrap>
        <h2 className={s.title}>
          Techna
          <span className={s.titleSpan}>services</span>
        </h2>
      </MyWrap>
      {/* <MySlider> */}
      {/*   <div className={s.item} /> */}
      {/*   <div className={s.item} /> */}
      {/*   <div className={s.item} /> */}
      {/*   <div className={s.item} /> */}
      {/* </MySlider> */}
      <div className={s.slider}>
        <div className={s.item} />
        <div className={s.item} />
        <div className={s.item} />
      </div>
    </div>
  );
}

export default Services;
