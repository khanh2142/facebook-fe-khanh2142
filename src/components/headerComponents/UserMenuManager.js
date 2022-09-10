import React, { useState, useRef } from "react";

import { Overlay } from "react-bootstrap";

import Item3 from "../reuseComponents/Item3";
import Item4 from "../reuseComponents/Item4";

import Seperate from "../reuseComponents/Seperate";
import AvatarItem1 from "../reuseComponents/AvatarItem1";
import CircleButton from "../reuseComponents/CircleButton";

const UserMenuManager = () => {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  return (
    <>
      <CircleButton
        classMobile="true"
        width="40px"
        height="40px"
        iconSize="20px"
        icon="fa-solid fa-caret-down"
        item={
          <div
            style={{
              position: "absolute",
              bottom: "-360px",
              backgroundColor: "#242526",
              padding: "10px",
              color: "white",
              borderRadius: 5,
              width: "360px",
              zIndex: "999",
              marginTop: "10px",
              height: "360px",
              display: "flex",
              flexDirection: "column",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
          >
            <AvatarItem1
              image="https://cdn.vn.garenanow.com/web/lol-product/home/images/Lan_h3lpm3/10_2021/DTCL/Chibi%20Jinx.jpg"
              username="Jinx tý nị"
              content="Xem trang cá nhân của bạn"
            />

            <Seperate />

            <Item4
              icon="fa-solid fa-triangle-exclamation"
              p="Đóng góp ý kiến"
              span="Hãy chung tay cải thiện Facebook."
            />

            <Seperate />

            <Item3
              icon="fa-solid fa-gear"
              content="Cài đặt & quyền riêng tư"
              rightBtn="true"
            />

            <Item3
              icon="fa-solid fa-question"
              content="Trợ giúp & hỗ trợ"
              rightBtn="true"
            />

            <Item3
              icon="fa-solid fa-moon"
              content="Màn hình & trợ năng"
              rightBtn="true"
            />

            <Item3 icon="fa-solid fa-right-from-bracket" content="Đăng xuất" />
          </div>
        }
      />
    </>
  );
};

export default UserMenuManager;
