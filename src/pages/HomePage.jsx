import React from "react";
import CompanyDesc from "../components/company-description/CompanyDesc";
import MyBlockGradient from "../components/ui/myBlockGradient/MyBlockGradient";
import Team from "../components/team/Team";
import Clients from "../components/clients/Clients";
import Values from "../components/values/Values";
import Experience from "../components/experience/Experience";
import Services from "../components/services/Services";
import BG_COLORS from "../data/bgColors";

function HomePage() {
  return (
    <>
      <CompanyDesc />
      <MyBlockGradient fromColor={BG_COLORS.DARK} fromPercent={21} toColor={BG_COLORS.CORAL} />
      <Team />
      <MyBlockGradient fromColor={BG_COLORS.CORAL} toColor={BG_COLORS.WHITE} />
      <Clients />
      <MyBlockGradient fromColor={BG_COLORS.WHITE} toColor={BG_COLORS.DARK} toPercent={94} />
      <Values />
      <MyBlockGradient fromColor={BG_COLORS.DARK} toColor={BG_COLORS.PURPLE} toPercent={94} />
      <Experience />
      <MyBlockGradient fromColor={BG_COLORS.PURPLE} toColor={BG_COLORS.LILAC} toPercent={94} />
      <Services />
    </>
  );
}

export default HomePage;
