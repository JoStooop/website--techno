import React from "react";
import s from "./Footer.module.scss";

function Footer() {
  return (
    <div className={s.wrap}>
      <div className={s.bottom}>
        <div className={s.left}>
          <p className={s.text}>
            The Techna development team applies different programming languages, frameworks,
            libraries, and other tools depending on project requirements.
          </p>
          <div className={s.contacts}>
            <a className={[s.link, s.emal].join(" ")} href="mailto:ask@techna.dev">ask@techna.dev</a>
            <a className={[s.link, s.tel].join(" ")} href="tel:+44725283532">+44 725283532</a>
          </div>
        </div>
        <div className={s.right}>
          <p className={s.textRight}>
            Designed by
            <span className={s.textCustom}>BS</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
