import React, { useEffect } from "react";

import "../../../styles/menuContainer.css";

import Seperate from "../../reuseComponents/Seperate";

import Item3 from "../../reuseComponents/Item3";

import Item9 from "../../reuseComponents/Item9";
import Item10 from "../../reuseComponents/Item10";

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
          icon="fa-solid fa-circle-play"
          content="Trang chủ"
          active="true"
        ></Item3>
        <Item3 icon="fa-solid fa-video" content="Trực tiếp"></Item3>
        <Item3 icon="fa-solid fa-clapperboard" content="Chương trình"></Item3>
        <Item3 icon="fa-solid fa-bookmark" content="Video đã lưu"></Item3>

        <Seperate />

        <Item9 title="Danh sách xem của bạn" btn="Quản lý"></Item9>

        <Item10
          image="https://freeiconshop.com/wp-content/uploads/edd/play-flat.png"
          name="Video mới nhất"
        ></Item10>

        <Item10
          image="https://scontent.fhan3-5.fna.fbcdn.net/v/t39.30808-6/218028276_110313624670813_3302617093748322571_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=0t1bpi5AKhIAX884tev&_nc_ht=scontent.fhan3-5.fna&oh=00_AT-pXbzkXU5HYoOj8nyJP-agKLz81ObtCfuVVChLt7iN8A&oe=6257DC67"
          name="GF Give me"
          isLive="true"
        ></Item10>

        <Item10
          image="https://upload.wikimedia.org/wikipedia/vi/thumb/c/c7/Logo_Real_Madrid.svg/1432px-Logo_Real_Madrid.svg.png"
          name="Real Madrid"
          newVideos="4"
        ></Item10>

        <Item10
          image="https://cdn.tgdd.vn/GameApp/3/223300/Screentshots/dau-truong-chan-ly-mobile-teamfight-tatics-dau-truong-nhan-pham-logo-27-05-2020.png"
          name="TFT"
          isLive="true"
          newVideos="9+"
        ></Item10>

        <Item10
          image="https://i.pinimg.com/originals/8a/8b/50/8a8b50da2bc4afa933718061fe291520.jpg"
          name="Dota 2"
        ></Item10>

        <Item10
          image="https://i.pinimg.com/originals/0f/8b/28/0f8b2870896edcde8f6149fe2733faaf.jpg"
          name="Javascript training"
          newVideos="9+"
        ></Item10>

        <Item10
          image="https://picfiles.alphacoders.com/438/thumb-1920-438291.jpg"
          name="Naraka Bladepoint"
          newVideos="9+"
        ></Item10>

        <Item10
          image="https://bachasoftware.com/wp-content/uploads/elementor/thumbs/nodejslogo-p3zvdhaajh0bxurlgqp1gszveuzuf58gd4auf7uve8.png"
          name="Nodejs"
        ></Item10>

        <Item10
          image="https://codelearn.io/Upload/Blog/react-js-co-ban-phan-1-63738082145.3856.jpg"
          name="Reactjs"
        ></Item10>

        <Item10
          image="https://i.ytimg.com/vi/N5DdKEHIPv0/maxresdefault.jpg"
          name="Nextjs"
          isLive="true"
        ></Item10>
      </div>
    </div>
  );
};

export default MenuContainer;
