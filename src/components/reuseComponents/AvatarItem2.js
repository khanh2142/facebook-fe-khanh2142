import React from "react";
import { Link } from "react-router-dom";

const AvatarItem2 = (props) => {
  return (
    <Link to="/me" className="avatarItem2">
      <div
        className="avatarItem2-image"
        style={{
          backgroundImage: `url(${props.avatar})`,
        }}
      ></div>
      <span className="avatarItem2-name">{props.fullname}</span>
    </Link>
  );
};

export default AvatarItem2;
