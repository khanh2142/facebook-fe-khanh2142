import React from "react";
import { Link } from "react-router-dom";

const HeaderRoute = (props) => {
  return (
    <Link
      to={props.link}
      className={
        props.active ? "headerRoute headerRoute-active" : "headerRoute"
      }
    >
      <i className={props.icon}></i>
    </Link>
  );
};

export default HeaderRoute;
