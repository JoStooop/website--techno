import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  const style = {
    display: "flex",
    height: "50vh",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 24,
    flexDirection: "column",
  };

  const styleButtonHome = {
    color: "teal",
    marginLeft: 10,
  };

  return (
    <div style={style}>
      This page doesn't exist.
      <p style={{ marginTop: 20 }}>
        Go
        <Link style={styleButtonHome} to="/">Home</Link>
      </p>

    </div>
  );
}

export default NotFoundPage;
