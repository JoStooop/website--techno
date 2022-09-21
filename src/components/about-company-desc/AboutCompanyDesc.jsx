import React from "react";
import s from "./AboutCompanyDesc.module.scss";
import MyWrap from "../ui/myWrap/MyWrap";
import BG_COLORS from "../../data/bgColors";
import teamTop from "../../assets/images/about-company-desc-team.png";

function AboutCompanyDesc() {
  return (
    <MyWrap bgColor={BG_COLORS.YELLOW}>
      <div className={s.top}>
        <div className={s.desc_text}>
          <p className={s.title}>We Introduce Innovations to Improve Business Efficiency </p>
          <p className={s.desc}>Following the latest technological trends and innovations, we offer
            solutions based on a
            forward-looking approach. The introduction of modern technologies provides unlimited
            opportunities for us to optimize our client’s businesses.
          </p>
        </div>
        <img className={s.about_team} src={teamTop} />
        <div className={s.worker}>
          <p>Nik Savcuk</p>
          <p>Co-Founder
            Support & Operations</p>
        </div>
        <div className={s.worker}>
          <p>Max Ahmetov</p>
          <p>Co-Founder
            Marketing & Operations</p>
        </div>
      </div>
      <div className={s.bottom}></div>
    </MyWrap>
  );
}

export default AboutCompanyDesc;
