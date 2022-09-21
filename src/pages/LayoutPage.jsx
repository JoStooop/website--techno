import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import BG_COLORS from "../data/bgColors";
import logoWhite from "../assets/images/logo-white.svg";

function LayoutPage() {
  return (
    <>
      <Header logoImg={logoWhite} bgColor={BG_COLORS.DARK} color={BG_COLORS.WHITE} />
      <main>
        <Outlet />
      </main>
      <div style={{ marginTop: "auto" }}>
        <Header logoImg={logoWhite} bgColor={BG_COLORS.DARK} color={BG_COLORS.WHITE} />
        <Footer />
      </div>
    </>
  );
}

export default LayoutPage;
