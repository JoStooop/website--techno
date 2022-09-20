import React from "react";
import s from "./Experience.module.scss";
import MyWrap from "../ui/myWrap/MyWrap";
import BG_COLORS from "../../data/bgColors";

function InfoExperience() {
  return (
    <div className={s.wrap}>
      <MyWrap bgColor={BG_COLORS.PURPLE}>
        <h2 className={s.title}>
          Our Expertise
          <span className={s.titleSpan}>and Experience</span>
        </h2>
        <div className={s.center}>
          <p className={s.textCenter}>
            The developers at Techna demonstrate their competency in a number of programming
            languages, frameworks, libraries, and sophisticated tools in order to adapt
            to varying project parameters.
          </p>
        </div>
        <p className={s.experience}>
          Python / Django / PHP / Javascript / Vue.js / iOS / Android / React Native / Flutter /
          Web3js / Solidity / SQL / NoSQL / REST API / WebSocket / Docker / Redis
        </p>
      </MyWrap>
    </div>
  );
}

export default InfoExperience;
