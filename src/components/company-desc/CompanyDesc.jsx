import React from "react";
import s from "./CompanyDesc.module.scss";
import MyButton from "../ui/myButton/MyButton";
import MyWrap from "../ui/myWrap/MyWrap";
import BG_COLORS from "../../data/bgColors";

function CompanyDesc() {
  return (
    <MyWrap bgColor={BG_COLORS.DARK}>
      <div className={s.wrap}>
        <div className={s.textInfo}>
          <p className={s.text}>Techna are the</p>
          <div className={s.one} />
          <p className={s.italicCustom}>fastest growing</p>
          <div className={s.two} />
          <p className={s.gradient}>IT specialists in the UK</p>
          <p className={s.italic}>providing</p>
          <p className={[s.text, s.textNumber].join(" ")}>360</p>
          <p className={[s.italic, s.italicRight].join(" ")}>degree solutions</p>
          <p className={[s.text, s.textBottom].join(" ")}>for all</p>
          <div className={s.three} />
          <p className={s.text}>your needs</p>
        </div>
        <p className={s.desc}>
          Techna's services are undertaken by our close knit team offering a wide array of
          expertise. As a result we are happy to offer tailor-made solutions to suit your business
          exclusively.
        </p>
        <MyButton>
          more about us...
        </MyButton>
      </div>
    </MyWrap>
  );
}

export default CompanyDesc;
