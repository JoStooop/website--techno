import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

function NotFoundPage() {
  const style = {
    display: "flex",
    height: "50vh",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 24,
    flexDirection: "column"
  };

  const styleButtonHome = {
    color: "teal",
    marginLeft: 10
  };

  return (
    <>
      <Header />
      <div style={style}>
        This page doesn't exist.
        <p style={{ marginTop: 20 }}>
          Go
          <Link style={styleButtonHome} to="/">Home</Link>
        </p>
      </div>
      <div style={{ marginTop: "auto" }}>
        <Footer />
      </div>
    </>
  );
}

export default NotFoundPage;
