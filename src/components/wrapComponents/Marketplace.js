import React from "react";

import { Col, Row, Container } from "react-bootstrap";
import MenuContainer from "./menuForWrapComponents/MenuContainerForMarketplace";

import "../../styles/marketplace.css";
import Item16 from "../reuseComponents/Item16";

import "../../styles/responsive/marketplace.css";

const Marketplace = () => {
  return (
    <>
      <Col
        md="3"
        xs={0}
        sm={0}
        lg={3}
        style={{ padding: "0", position: "fixed" }}
        className="marketplace__menu"
      >
        <MenuContainer content="Marketplace"></MenuContainer>
      </Col>
      <Col md={12} lg={9} xs={12} sm={12} className="marketplace__container">
        <div className="marketplace__container-desc">
          <div className="marketplace__container-title">Lựa chọn hôm nay</div>
          <div className="marketplace__container-location">
            <i className="fa-solid fa-location-dot location-icon"></i>
            <span>
              Mỹ Đình <i className="fa-solid fa-location-crosshairs"></i> 60km
            </span>
          </div>
        </div>

        <div className="marketplace__item">
          <Item16
            image="https://cdn.tgdd.vn/Products/Images/42/236780/iphone-13-mini-pink-1-200x200.jpg"
            content="Iphone 13 mini Iphone 13 mini Iphone 13 mini Iphone 13 mini Iphone 13 mini Iphone 13 mini Iphone 13 mini Iphone 13 mini"
            price="26.000.000"
            location="Hà nội"
          ></Item16>

          <Item16
            image="https://minhlongmoto.com/wp-content/uploads/2019/07/msx-125-xanh.png"
            content="MSX 2021"
            price="30.000.000"
            location="Hà nội"
          ></Item16>

          <Item16
            image="http://www.bossgear.net/wp-content/uploads/2019/05/IMG_9625.jpg"
            content="Bàn phím EK-387"
            price="600.000"
            location="Hà nội"
          ></Item16>

          <Item16
            image="https://hanoicomputercdn.com/media/product/61217_mainboard_asus_rog_maximus_z690_apex_intel_z690_socket_1700_atx_4_khe_ram_ddr5_1.jpg"
            content="Z690 Mainboard"
            price="49.000.000"
            location="TP.HCM"
          ></Item16>

          <Item16
            image="https://www.techone.vn/wp-content/uploads/2021/10/gray-500x500.jpg"
            content="Macbook pro 2021"
            price="80.000.000"
            location="Hà nội"
          ></Item16>

          <Item16
            image="https://vcdn-sohoa.vnecdn.net/2021/12/30/Image-ExtractWord-0-Out-7288-1640840203.png"
            content="Laptop gaming acer chính hãng - bảo hành còn 2 năm"
            price="90.000.000"
            location="Hà nội"
          ></Item16>

          <Item16
            image="https://laptop88.vn/media/news/894_asus_laptop_gaming_rog_min.png"
            content="Asus gaming"
            price="50.000.000"
            location="Hà nội"
          ></Item16>

          <Item16
            image="https://bizweb.sapocdn.net/100/329/122/products/laptop-gaming-msi-pulse-gl66.png?v=1630744975313"
            content="MSI GL66"
            price="30.000.000"
            location="Hà nội"
          ></Item16>

          <Item16
            image="https://file.hstatic.net/200000293662/file/real-madrid-21-22-kit-home__2__7669379b47aa4e12b503e3ac5e38d0d0_grande.jpg"
            content="Áo real madrid chính hãng"
            price="2.000.000"
            location="Hà nội"
          ></Item16>
        </div>
      </Col>
    </>
  );
};

export default Marketplace;
