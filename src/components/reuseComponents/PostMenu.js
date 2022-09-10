import React from "react";

import "../../styles/postMenu.css";
import Seperate from "./Seperate";
import Item20 from "../reuseComponents/Item20";

const PostMenu = (props) => {
  return (
    <div className="postmenu__container">
      <div className="postmenu__container-item">
        <div className="postmenu__title">{props.title}</div>
        <div className="postmenu__setting">
          <Item20 icon="fa-solid fa-filter" content="Bộ lọc"></Item20>
          <Item20 icon="fa-solid fa-gear" content="Quản lý bài viết"></Item20>
        </div>
      </div>
      <Seperate></Seperate>
      <div className="postmenu__item">
        <div className="postmenu__item-btn active">
          <i className="fa-solid fa-bars"></i>
          <div className="postmenu__item-content">Xem theo danh sách</div>
        </div>
        <div className="postmenu__item-btn">
          <i className="fa-solid fa-table-cells-large"></i>
          <div className="postmenu__item-content">Chế độ xem lưới</div>
        </div>
      </div>
    </div>
  );
};

export default PostMenu;
