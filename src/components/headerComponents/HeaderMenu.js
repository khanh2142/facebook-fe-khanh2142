import React, { useState, useRef } from "react";

import { Overlay } from "react-bootstrap";

import "../../styles/headerMenu.css";

import Box1 from "../reuseComponents/Box1";
import Box2 from "../reuseComponents/Box2";
import CircleButton from "../reuseComponents/CircleButton";

import Item2 from "../reuseComponents/Item2";

import Seperate from "../reuseComponents/Seperate";

const HeaderMenu = () => {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  const data = [
    [
      {
        icon: "fa-solid fa-calendar-check",
        title: "Sự kiện",
        content:
          "Tổ chức hoặc tìm sự kiện cùng những hoạt động khác trên mạng và ở quanh đây.",
      },
      {
        icon: "fa-solid fa-user-group",
        title: "Bạn bè",
        content: "Tìm kiếm bạn bè hoặc những người bạn có thể biết.",
      },
      {
        icon: "fa-solid fa-users-line",
        title: "Nhóm",
        content: "Kết nối với những người cùng chung sở thích.",
      },
      {
        icon: "fa-solid fa-newspaper",
        title: "Bảng tin",
        content: "Xem bài viết phù hợp của những người và Trang bạn theo dõi.",
      },
      {
        icon: "fa-solid fa-flag",
        title: "Trang",
        content: "Khám phá và kết nối với các doanh nghiệp trên Facebook.",
      },
    ],
    [
      {
        icon: "fa-solid fa-puzzle-piece",
        title: "Video chơi game",
        content:
          "Xem, kết nối với những game và người phát trực tiếp mà bạn yêu thích.",
      },
      {
        icon: "fa-solid fa-gamepad",
        title: "Chơi game",
        content: "Chơi game bạn yêu thích.",
      },
      {
        icon: "fa-solid fa-film",
        title: "Watch",
        content:
          "Đích đến của video phù hợp với sở thích và quan hệ kết nối của bạn.",
      },
    ],
    [
      {
        icon: "fa-solid fa-credit-card",
        title: "Facebook pay",
        content:
          "Một cách dễ dàng, bảo mật để thanh toán trên các ứng dụng bạn đang dùng.",
      },
      {
        icon: "fa-solid fa-store",
        title: "Marketplace",
        content: "Mua bán trong cộng đồng của bạn.",
      },
    ],
    [
      {
        icon: "fa-solid fa-rectangle-ad",
        title: "Hoạt động quảng cáo gần đây",
        content: "Xem toàn bộ quảng cáo mà bạn đã tương tác trên Facebook.",
      },
      {
        icon: "fa-solid fa-clock-rotate-left",
        title: "Kỷ niệm",
        content: "Lướt xem ảnh, video và bài viết cũ của bạn trên Facebook.",
      },
      {
        icon: "fa-solid fa-bookmark",
        title: "Đã lưu",
        content: "Tìm bài viết, ảnh và video mà bạn đã lưu để xem sau.",
      },
      {
        icon: "fa-solid fa-cloud-sun",
        title: "Thời tiết",
        content:
          "Kiểm tra dự báo thời tiết tại địa phương và đăng ký nhận thông báo về tình hình thời tiết hàng ngày.",
      },
    ],
    [
      {
        icon: "fa-solid fa-chart-simple",
        title: "Trình quản lý quảng cáo",
        content: "Tạo, quản lý và theo dõi hiệu quả quảng cáo.",
      },
      {
        icon: "fa-solid fa-briefcase",
        title: "Meta Business Suite",
        content:
          "Cách tốt hơn để quản lý doanh nghiệp trên Facebook và Instagram - tất cả ở một nơi.",
      },
    ],
    [
      {
        icon: "fa-solid fa-droplet",
        title: "Hiến máu",
        content: "Cập nhật thông tin về hoạt động hiến máu ở gần bạn.",
      },
      {
        icon: "fa-solid fa-earth-asia",
        title: "Trung tâm Khoa học Khí hậu",
        content:
          "Tìm hiểu về vấn đề biến đổi khí hậu và tác động của hiện tượng này.",
      },
      {
        icon: "fa-solid fa-triangle-exclamation",
        title: "Ứng phó khẩn cấp",
        content:
          "Tìm thông tin mới nhất về các cuộc khủng hoảng đang diễn ra trên thế giới.",
      },
      {
        icon: "fa-brands fa-gratipay",
        title: "Chiến dịch gây quỹ",
        content:
          "Quyên góp và gây quỹ cho tổ chức phi lợi nhuận và mục đích cá nhân.",
      },
    ],
  ];

  return (
    <>
      <CircleButton
        width="40px"
        height="40px"
        iconSize="20px"
        icon="fa-solid fa-bars"
        item={
          <div
            style={{
              position: "absolute",
              bottom: "-690px",
              backgroundColor: "#323436",
              padding: "10px",
              color: "white",
              borderRadius: 5,
              width: "608px",
              zIndex: "999",
              marginTop: "10px",
              height: "690px",
              display: "flex",
              flexDirection: "column",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
          >
            <div className="hm_title">
              <p>Menu</p>
              <div className="hm_container">
                <div className="hm_item hm_item_1">
                  <div className="hm_search-container">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input
                      className="hm_search-input"
                      placeholder="Tìm kiếm trong menu"
                    ></input>
                  </div>

                  <Box1 bigTitle="Xã hội" data={data[0]} />
                  <Seperate />
                  <Box1 bigTitle="Giải trí" data={data[1]} />
                  <Seperate />
                  <Box1 bigTitle="Mua sắm" data={data[2]} />
                  <Seperate />
                  <Box1 bigTitle="Cá nhân" data={data[3]} />
                  <Seperate />
                  <Box1 bigTitle="Chuyên nghiệp" data={data[4]} />
                  <Seperate />
                  <Box1 bigTitle="Nguồn lực cho cộng đồng" data={data[5]} />
                </div>

                <div className="hm_item hm_item_2">
                  <div
                    style={{
                      fontSize: "20px",
                      fontWeight: "600",
                      marginBottom: "10px",
                    }}
                  >
                    Tạo
                  </div>
                  <Item2 icon="fa-solid fa-pen-to-square" content="Đăng" />
                  <Item2 icon="fa-solid fa-book-open" content="Tin" />
                  <Item2 icon="fa-solid fa-video" content="Phòng họp mặt" />
                  <Seperate />
                  <Item2 icon="fa-solid fa-flag" content="Trang" />
                  <Item2 icon="fa-solid fa-bullhorn" content="Quảng cáo" />
                  <Item2 icon="fa-solid fa-people-group" content="Nhóm" />{" "}
                  <Item2 icon="fa-solid fa-calendar-plus" content="Sự kiện" />
                  <Item2
                    icon="fa-solid fa-cart-shopping"
                    content="Bài viết niêm yết trên Marketplace"
                  />
                </div>
              </div>
            </div>
          </div>
        }
      />
    </>
  );
};

export default HeaderMenu;
