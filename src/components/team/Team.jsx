import React from "react";
import s from "./Team.module.scss";
import team from "../../assets/images/team.png";
import MyCircle from "../ui/myCircle/MyCircle";
import MyWrap from "../ui/myWrap/MyWrap";
import BG_COLORS from "../../data/bgColors";

function Team() {
  return (
    <MyWrap bgColor={BG_COLORS.CORAL}>
      <div className={s.wrap}>
        <img className={s.team} src={team} alt="team" width={1330} height={890} />
        <div className={s.textInfo}>
          <p className={s.textBold}>Our team has overseen</p>
          <div className={s.imgOne} />
          <p className={s.text}>the successful</p>
          <div className={s.imgTwo} />
          <p className={s.italic}>completion of over</p>
          <p className={s.number}> 200 projects </p>
          <p className={[s.text, s.textBottom].join(" ")}> for clients in various sectors:</p>
        </div>
        <div className={s.wrapCircle}>
          <MyCircle />
          <MyCircle />
          <MyCircle />
          <MyCircle />
          <MyCircle />
        </div>
        <div className={s.wrapCircle}>
          <MyCircle />
          <MyCircle />
          <MyCircle />
          <MyCircle />
          <MyCircle />
        </div>
        <p className={s.bottom}>
          Techna's services are undertaken by our close knit team offering a wide array of expertise.
          As a result we are happy to offer tailor-made solutions to suit your business exclusively.
        </p>
      </div>
    </MyWrap>
  );
}

export default Team;
