import React from "react";
import { Link } from "react-router-dom";

const Item5 = (props) => {
  return (
    <Link className="um_function-item" to={"/" + props.link}>
      <i className={props.icon}></i>
      <span>{props.content}</span>
    </Link>
  );
};

export default Item5;
