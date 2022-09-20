import React from "react";

function MySlider(props) {
  const { children } = props;

  const style = {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    height: "auto",
  };

  return (
    <div style={style}>
      {children}
    </div>
  );
}

export default MySlider;
