import React from "react";

import { Col, Row, Container } from "react-bootstrap";
import MenuContainer from "./menuForWrapComponents/MenuContainerForWatch";

import "../../styles/watch.css";
import Item9 from "../reuseComponents/Item9";
import Item14 from "../reuseComponents/Item14";
import Item15 from "../reuseComponents/Item15";

import "../../styles/responsive/watch.css";

const Watch = () => {
  return (
    <>
      <Col
        className="watch__row"
        md="3"
        xs={0}
        sm={0}
        lg={3}
        style={{ padding: "0", position: "fixed" }}
      >
        <MenuContainer content="Watch"></MenuContainer>
      </Col>
      <Col md="9" xs={12} sm={12} lg={9} className="watch__container">
        <div className="newVideo__container">
          <Item9 title="Video mới dành cho bạn"></Item9>
          <div className="newVideo__item-next">
            <i className="fa-solid fa-chevron-right"></i>
          </div>
          <div className="newVideo__item-prev">
            <i className="fa-solid fa-chevron-left"></i>
          </div>
          <div className="newVideo__item">
            <Item14
              image="https://play-lh.googleusercontent.com/-hXYZbPHp9jN963E-PNtX0l7wu3mv4RmNqh5i3AbePC41ZobE3EuBkOWl-xQdKmyI8g=w512"
              title="Video mới nhất của TFT"
              time="1 giờ trước"
            ></Item14>

            <Item14
              image="https://play-lh.googleusercontent.com/-hXYZbPHp9jN963E-PNtX0l7wu3mv4RmNqh5i3AbePC41ZobE3EuBkOWl-xQdKmyI8g=w512"
              title="Video mới nhất của TFT"
              time="1 giờ trước"
            ></Item14>

            <Item14
              image="https://play-lh.googleusercontent.com/-hXYZbPHp9jN963E-PNtX0l7wu3mv4RmNqh5i3AbePC41ZobE3EuBkOWl-xQdKmyI8g=w512"
              title="Video mới nhất của TFT"
              time="1 giờ trước"
            ></Item14>

            <Item14
              image="https://play-lh.googleusercontent.com/-hXYZbPHp9jN963E-PNtX0l7wu3mv4RmNqh5i3AbePC41ZobE3EuBkOWl-xQdKmyI8g=w512"
              title="Video mới nhất của TFT"
              time="1 giờ trước"
            ></Item14>
          </div>
        </div>

        <Item15
          image="https://yt3.ggpht.com/hmgZzpVYkjK7kiqgwa4HMUM5Z-hkOmjDL60JjyvX9dTNbqssAXdjBJrQJGXaHekMwX3DQIsPSg=s900-c-k-c0x00ffffff-no-rj"
          name="FPT Bóng Đá"
          time="13 tháng 4"
          content="HIGHLIGHTS: REAL - CHELSEA | KINH ĐIỂN, ĐỈNH CAO VÀ ĐẲNG CẤP SIÊU TIỀN ĐẠO | UCL 21/22"
          reactionCount="190k"
          commentCount="10k bình luận"
          viewCount="1 triệu lượt xem"
        ></Item15>

        <Item15
          image="https://yt3.ggpht.com/ytc/AKedOLSqx_vKxMzse4ykoG6LtiPKEYkLd8Oh7YydCTMwpqk=s88-c-k-c0x00ffffff-no-rj"
          name="Real Madrid"
          time="13 tháng 4"
          content="UNBELIEVABLE Champions League night at the Bernabéu! | Real Madrid 2-3 Chelsea"
          reactionCount="19k"
          commentCount="500 bình luận"
          viewCount="350k lượt xem"
        ></Item15>

        <Item15
          image="https://yt3.ggpht.com/KW6KcdBpMQ67BeZi5ufFN3mSQJ5F0NEJ-_TCtXOx50tNxhEqFaMFejMvoqDOzpITXECjxdwLdQ=s88-c-k-c0x00ffffff-no-rj"
          name="Rapital Official"
          time="27 tháng 2 năm 2021"
          content="Rapitalove EP| U ME - RPT TC x RPT Duke (prod. by RPT Phongkhin) [Official Lyric Video]"
          reactionCount="28k"
          commentCount="500 bình luận"
          viewCount="3 triệu lượt xem"
        ></Item15>

        <Item15
          image="https://yt3.ggpht.com/4ID6gl23a2aUsa7hjLuXfrNu4E0-mPYf1i7__rtedXvWDxpgKSqs2_PVh4kO0A4sM3MsrrH5qw=s88-c-k-c0x00ffffff-no-rj"
          name="Tuyền Văn Hóa"
          time="11 tháng 4"
          content="DE BRUYNE VÀ BRUNO: SỰ CHÊNH LỆCH NẰM Ở KHẢ NĂNG TOẢ SÁNG TRẬN CẦU ĐỈNH CAO"
          reactionCount="1k"
          commentCount="200 bình luận"
          viewCount="40k lượt xem"
        ></Item15>

        <Item15
          image="https://yt3.ggpht.com/COukDq2MtzGWdFcArDsNcqoES06u_f7Dcly2a0KtjyH0StDY8DeJV3dj1RAktH3HY0Sc4x_6=s88-c-k-c0x00ffffff-no-rj"
          name="Real Tech"
          time="14 tháng 4"
          content="Lên cấu hình PC 25 Triệu có RTX 3060 Ti - siêu tối ưu tầm giá"
          reactionCount="365"
          commentCount="69 bình luận"
          viewCount="9k lượt xem"
        ></Item15>

        <Item15
          image="https://yt3.ggpht.com/ytc/AKedOLSBjf--_qIbpEMcSemoEKd1G5fyPcezudgorx8dVw=s88-c-k-c0x00ffffff-no-rj"
          name="Trực Tiếp Game"
          time="22 tháng 3"
          content="ĂN TRỘM GÀ CỦA THẰNG EM ĐEM ĐI NƯỚNG ĂN NGON QUÁ =))) - GAME THỦ NẤU ĂN | BBQ Chicken for Gamer"
          reactionCount="9,7k"
          commentCount="864 bình luận"
          viewCount="171k lượt xem"
        ></Item15>
      </Col>
    </>
  );
};

export default Watch;
