import React from "react";
import Header from "../components/header/Header";
import BG_COLORS from "../data/bgColors";
import logoDark from "../assets/images/logo-dark.svg";
import AboutCompanyDesc from "../components/about-company-desc/AboutCompanyDesc";

function AboutPage() {
  return (
    <>
      <Header logoImg={logoDark} bgColor={BG_COLORS.YELLOW} color={BG_COLORS.DARK} />
      <AboutCompanyDesc />
    </>
  );
}

export default AboutPage;
