import React from "react";
import Item1 from "../reuseComponents/Item1";

const Box1 = (props) => {
  return (
    <div className="box1">
      <div className="box1-title">{props.bigTitle}</div>
      {props.data.map((item) => {
        console.log(item);
        return (
          <Item1 icon={item.icon} title={item.title} content={item.content} />
        );
      })}
    </div>
  );
};

export default Box1;
