import React from "react";
import "./style/reset-style.scss";
import "./style/App.scss";
import Header from "./components/header/Header";
import CompanyDesc from "./components/company-description/CompanyDesc";
import Clients from "./components/clients/Clients";
import Values from "./components/values/Values";
import Services from "./components/services/Services";
import Footer from "./components/footer/Footer";
import MyBlockGradient from "./components/ui/myBlockGradient/MyBlockGradient";
import Team from "./components/team/Team";
import Experience from "./components/experience/Experience";
import BG_COLORS from "./data/bgColors";

function App() {
  return (
    <div className="app">
      <Header />
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
      <Footer />
    </div>
  );
}

export default App;
