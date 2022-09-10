import React, { useEffect } from "react";

import "../../../styles/menuContainer.css";

import Seperate from "../../reuseComponents/Seperate";

import Item3 from "../../reuseComponents/Item3";

import Item9 from "../../reuseComponents/Item9";
import Button1 from "../../reuseComponents/Button1";
import Item12 from "../../reuseComponents/Item12";

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
          icon="fa-solid fa-address-card"
          content="Bảng feed của bạn"
          active="true"
        ></Item3>
        <Item3 icon="fa-solid fa-location-arrow" content="Khám phá"></Item3>
        <Item3 icon="fa-solid fa-bell" content="Thông báo của bạn"></Item3>
        <Button1 content="Tạo nhóm mới"></Button1>

        <Seperate />

        <Item9 title="Nhóm do bạn quản lý"></Item9>

        <Item12
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjft-rB403QGN_CpmtxGgzbhwtoQrA1gG8iiS6LBjfZAmPXc_t7lbDJPBFPKgF_m0il4k&usqp=CAU"
          groupName="TFT Sinh viên"
          time="20 phút"
        ></Item12>

        <Seperate />

        <Item9 title="Nhóm bạn đã tham gia"></Item9>

        <Item12
          image="data:image/png;base64,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"
          groupName="Group ngoại binh"
          time="1 phút"
        ></Item12>

        <Item12
          image="https://logowik.com/content/uploads/images/visual-studio-code7642.jpg"
          groupName="VSCode community"
          time="1 giờ"
        ></Item12>

        <Item12
          image="https://lolg-cdn.porofessor.gg/img/d/tft/items/36.png?v=3&t=1649289901395"
          groupName="Lỏ sét gờ rúp"
          time="30 phút"
        ></Item12>

        <Item12
          image="https://lolg-cdn.porofessor.gg/img/d/tft/items/13.png?v=3&t=1649289901395"
          groupName="Hextech làm tôi mệt mỏi"
          time="1 tuần"
        ></Item12>

        <Item12
          image="https://img1.cgtrader.com/items/2090829/ff8c2ec592/large/dota-2-logo-3d-model-obj-mtl-3ds-fbx-stl-dae.jpg"
          groupName="Dota2vn"
          time="20 phút"
        ></Item12>

        <Item12
          image="https://previews.123rf.com/images/oliviart/oliviart2006/oliviart200600119/149003939-computer-icon-isolated-on-white-background-pc-icon-vector-computer-monitor-icon-flat-pc-symbol.jpg"
          groupName="Group mua bán PC giá rẻ"
          time="6 phút"
        ></Item12>

        <Item12
          image="https://logowik.com/content/uploads/images/tiktok-black-icon5820.jpg"
          groupName="Hội những người ghét Tiktok"
          time="1 năm"
        ></Item12>
      </div>
    </div>
  );
};

export default MenuContainer;
