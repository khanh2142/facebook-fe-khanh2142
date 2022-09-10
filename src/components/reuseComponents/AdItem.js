import React from "react";

const AdItem = (props) => {
  return (
    <div className="adItem-container">
      <div
        className="adItem-image"
        style={{
          backgroundImage: `url(${props.image})`,
        }}
      ></div>

      <div className="adItem-content">
        <span className="adItem-title">{props.content}</span>
        <span className="adItem-link">{props.link}</span>
      </div>
    </div>
  );
};

export default AdItem;
