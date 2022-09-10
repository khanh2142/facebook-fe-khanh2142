import React from "react";

const Item16 = (props) => {
  return (
    <div className="item16">
      <div
        className="item16-image"
        style={{ backgroundImage: "url(" + props.image + ")" }}
      ></div>

      <div className="item16-price">{props.price + "  ₫"}</div>

      <div className="item16-content">{props.content}</div>

      <div className="item16-location">{props.location}</div>
    </div>
  );
};

export default Item16;
