import React from "react";
import { Link } from "react-router-dom";

const Item6 = (props) => {
  return (
    <Link className="item6-item" to={"/friend/" + props.id}>
      <div
        className="item6-avatar"
        style={{
          backgroundImage: `url(${props.image})`,
        }}
      ></div>
      <span className="item6-name">{props.content}</span>
    </Link>
  );
};

export default Item6;
