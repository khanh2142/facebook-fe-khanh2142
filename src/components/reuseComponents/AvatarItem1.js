import React from "react";
import { Link } from "react-router-dom";

const AvatarItem1 = (props) => {
  return (
    <Link className="avatarItem1" to="/me">
      <div
        className="avatarItem1-avatar"
        style={{
          backgroundImage: `url(${props.image})`,
        }}
      ></div>

      <div className="avatarItem1-info">
        <p className="avatarItem1-name">{props.username}</p>
        <span>{props.content}</span>
      </div>
    </Link>
  );
};

export default AvatarItem1;
