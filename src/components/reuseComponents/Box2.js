import React from "react";

const Box2 = (props) => {
  return (
    <div
      style={{
        position: "fixed",
        backgroundColor: "#323436",
        padding: "2px 10px",
        color: "white",
        borderRadius: 5,
        height: props.height,
        width: props.witdh,
        zIndex: "1000",
        display: "flex",
        marginTop: "10px",
        flexDirection: "column",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      }}
    ></div>
  );
};

export default Box2;
