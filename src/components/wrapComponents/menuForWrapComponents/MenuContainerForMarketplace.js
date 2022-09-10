import React, { useEffect } from "react";

import "../../../styles/menuContainer.css";

import Seperate from "../../reuseComponents/Seperate";

import Item3 from "../../reuseComponents/Item3";

import Item9 from "../../reuseComponents/Item9";
import Item11 from "../../reuseComponents/Item11";
import Button1 from "../../reuseComponents/Button1";

const MenuContainer = (props) => {
  useEffect(() => {
    document.title = props.content + " | Facebook";
  }, []);
  return (
    <div className="menuContainerLeft">
      <div className="menuContainerLeft__title">
        <div className="menuContainerLeft__title-title">
          <div className="menuContainerLeft__title-content">
            {props.content}
          </div>
          <div className="menuContainerLeft__title-setting">
            <i className="fa-solid fa-gear"></i>
          </div>
        </div>
        <div className="menuContainerLeft__search">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            placeholder={"Tìm kiếm trong " + props.content}
            type="text"
          ></input>
        </div>
      </div>

      <div className="menuContainerLeft__content">
        <Item3
          icon="fa-solid fa-shop"
          content="Lướt xem tất cả"
          active="true"
        ></Item3>
        <Item3
          icon="fa-solid fa-satellite-dish"
          content="Mua sắm trực tiếp"
        ></Item3>
        <Item3 icon="fa-solid fa-bell" content="Thông báo"></Item3>
        <Item3
          icon="fa-solid fa-bag-shopping"
          content="Đang mua"
          rightBtn="true"
        ></Item3>
        <Item3
          icon="fa-solid fa-tag"
          content="Bán hàng"
          rightBtn="true"
        ></Item3>

        <Button1 content="Tạo bài niêm yết mới"></Button1>

        <Seperate />

        <Item9 title="Bộ lọc"></Item9>

        <Item11 location="Mỹ Đình" distance="60"></Item11>

        <Seperate />

        <Item9 title="Hạng mục"></Item9>

        <Item3 icon="fa-solid fa-car" content="Xe cộ"></Item3>
        <Item3
          icon="fa-solid fa-hand-holding-dollar"
          content="Tài sản cho thuê"
        ></Item3>
        <Item3 icon="fa-solid fa-hand-holding-dollar" content="Bán nhà"></Item3>
        <Item3
          icon="fa-solid fa-screwdriver"
          content="Dụng cụ sửa chữa nhà cửa"
        ></Item3>
        <Item3 icon="fa-solid fa-heart" content="Gia đình"></Item3>
        <Item3 icon="fa-solid fa-video" content="Giải trí"></Item3>
        <Item3
          icon="fa-brands fa-pagelines"
          content="Làm vườn & hoạt động ngoài trời"
        ></Item3>
        <Item3 icon="fa-solid fa-guitar" content="Nhạc cụ"></Item3>
        <Item3 icon="fa-solid fa-tags" content="Rao vặt"></Item3>
        <Item3 icon="fa-solid fa-user-tag" content="Miễn phí"></Item3>
        <Item3
          icon="fa-solid fa-person-running"
          content="Sản phẩm thể thao"
        ></Item3>
        <Item3 icon="fa-solid fa-thumbs-up" content="Sở thích"></Item3>
        <Item3 icon="fa-solid fa-book-open" content="Văn phòng phẩm"></Item3>
        <Item3 icon="fa-solid fa-chess" content="Đồ chơi & trò chơi"></Item3>
        <Item3 icon="fa-solid fa-paw" content="Đồ dùng cho thú cưng"></Item3>
        <Item3 icon="fa-solid fa-house" content="Đồ gia dụng"></Item3>
        <Item3 icon="fa-solid fa-shirt" content="Đồ điện tử"></Item3>
        <Item3 icon="fa-solid fa-user-group" content="Nhóm mua và bán"></Item3>
      </div>
    </div>
  );
};

export default MenuContainer;
