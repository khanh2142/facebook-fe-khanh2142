import React from "react";

const Item17 = (props) => {
  return (
    <div className="item17">
      <div
        className="item17-image"
        style={{ backgroundImage: "url(" + props.image + ")" }}
      ></div>
      <div className="item17-content">
        <div className="item17-name">{props.name}</div>
        <div className="item17-desc">
          <div className="item17-member">{props.member} thành viên</div>
          <i className="fa-solid fa-circle"></i>
          <div className="item17-activity">{props.post} bài viết/ngày</div>
        </div>
        <div className="item17-join">Tham gia nhóm</div>
      </div>

      <div className="item17-close">
        <i className="fa-solid fa-xmark"></i>
      </div>
    </div>
  );
};

export default Item17;
