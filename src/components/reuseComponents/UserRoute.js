import React from "react";
import { Link } from "react-router-dom";

const UserRoute = (props) => {
  return (
    <Link className="userRoute" to={props.link}>
      <div
        className="userRoute-avatar"
        style={{
          backgroundImage: `url(${props.avatar})`,
        }}
      ></div>
      <span className="userRoute-name">{props.name}</span>
    </Link>
  );
};

export default UserRoute;
