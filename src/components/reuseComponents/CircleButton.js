import React, { useState } from "react";

const CircleButton = (props) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div
        className={
          props.classMobile
            ? "circleButton circleButton-mobile"
            : "circleButton"
        }
        onClick={() => setShow(!show)}
        style={{
          width: props.width,
          height: props.height,
        }}
      >
        <i className={props.icon} style={{ fontSize: props.iconSize }}></i>
      </div>

      {show ? props.item : <></>}
    </>
  );
};

export default CircleButton;
