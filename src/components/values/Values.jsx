import React from "react";
import s from "./Values.module.scss";
import MyWrap from "../ui/myWrap/MyWrap";
import MySlider from "../ui/mySlider/MySlider";

function Values() {
  return (
    <div className={s.wrap}>
      <MyWrap>
        <h2 className={s.title}>
          Our
          <span className={s.titleSpan}>values</span>
        </h2>
        <div className={s.center}>
          <p className={s.textCenter}>
            In 15 years of experience we have managed to cooperate with a
            lot of well-known and respected brands, including:
          </p>
        </div>
      </MyWrap>
      <div className={s.sliderTop}>
        <MySlider>
          <div className={s.brand} />
          <div className={s.brand} />
          <div className={s.brand} />
          <div className={s.brand} />
          <div className={s.brand} />
          <div className={s.brand} />
        </MySlider>
      </div>
      <div className={s.sliderBottom}>
        <MySlider>
          <div className={s.brand} />
          <div className={s.brand} />
          <div className={s.brand} />
          <div className={s.brand} />
          <div className={s.brand} />
          <div className={s.brand} />
        </MySlider>
      </div>
      {/* <div className={s.slider}> */}
      {/*   <div className={s.sliderTop}> */}
      {/*     <div className={s.brand} /> */}
      {/*     <div className={s.brand} /> */}
      {/*     <div className={s.brand} /> */}
      {/*     <div className={s.brand} /> */}
      {/*     <div className={s.brand} /> */}
      {/*     <div className={s.brand} /> */}
      {/*   </div> */}
      {/*   <div className={s.sliderBottom}> */}
      {/*     <div className={s.brand} /> */}
      {/*     <div className={s.brand} /> */}
      {/*     <div className={s.brand} /> */}
      {/*     <div className={s.brand} /> */}
      {/*     <div className={s.brand} /> */}
      {/*     <div className={s.brand} /> */}
      {/*   </div> */}
      {/* </div> */}
    </div>
  );
}

export default Values;
