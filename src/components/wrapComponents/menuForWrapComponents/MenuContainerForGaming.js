import React, { useEffect } from "react";

import "../../../styles/menuContainer.css";

import Seperate from "../../reuseComponents/Seperate";

import Item3 from "../../reuseComponents/Item3";

import Item9 from "../../reuseComponents/Item9";
import Item13 from "../../reuseComponents/Item13";

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
          icon="fa-solid fa-gamepad"
          content="Dành cho bạn"
          active="true"
        ></Item3>
        <Item3 icon="fa-solid fa-play" content="Video" rightBtn="true"></Item3>
        <Item3
          icon="fa-solid fa-trophy"
          content="Vòng đấu"
          rightBtn="true"
        ></Item3>
        <Item3 icon="fa-solid fa-hand-fist" content="Chơi game"></Item3>
        <Item3 icon="fa-solid fa-bell" content="Thông báo"></Item3>

        <Seperate />

        <Item9 title="Người phát trực tiếp bạn theo dõi"></Item9>

        <Item13
          image="https://cdnb.artstation.com/p/assets/images/images/003/561/105/large/yusif-alomeri-dota-emoticons-icon.jpg?1475017214"
          isLive="true"
          name="Dota 2"
          game="Dota 2"
          views="1.2k"
        ></Item13>

        <Item13
          image="https://play-lh.googleusercontent.com/-hXYZbPHp9jN963E-PNtX0l7wu3mv4RmNqh5i3AbePC41ZobE3EuBkOWl-xQdKmyI8g=w512"
          isLive="true"
          name="TFT"
          game="Team Fight Tactics"
          views="12.7k"
        ></Item13>

        <Item13
          image="https://yt3.ggpht.com/Bowu64_L_wQCKPCv-9Y_LWqSUd9sgzQ6nnsZa62LEhznDNk6lbkbEGgZPAL3FPi9EGj-qlPyGA=s900-c-k-c0x00ffffff-no-rj"
          isLive="true"
          name="F8"
          game="League of Legends"
          views="800"
        ></Item13>

        <Item13
          image="https://scontent.fhan4-2.fna.fbcdn.net/v/t39.30808-6/230460476_372176190933425_312989024375852756_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=1xdBDR25zAQAX-5N8ez&tn=aYDKhix2q666hReD&_nc_ht=scontent.fhan4-2.fna&oh=00_AT_SzBu6tMPEqsskEdwUrggobPNmRrGuI0vDYLFoqdeVeA&oe=62572B15"
          isLive="true"
          name="Pewpew"
          game="Team Fight Tactics"
          views="1.2k"
        ></Item13>

        <Item3 icon="fa-solid fa-ellipsis" content="Xem thêm"></Item3>

        <Seperate></Seperate>

        <Item9 title="Mới xem" btn="Xem tất cả"></Item9>

        <Item13
          image="https://scontent.fhan3-4.fna.fbcdn.net/v/t1.6435-9/72684679_106156687466219_2141636062911397888_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=0z5D2syZDrkAX8vrRa_&_nc_ht=scontent.fhan3-4.fna&oh=00_AT-XJWBH1TD_dtCbijisdDyTeNI3YjfQDyzCPP6ysH_oaA&oe=62770AA7"
          name="TG Đậu Đậu"
          game="Team Fight Tactics"
        ></Item13>

        <Item13
          image="https://scontent.fhan4-2.fna.fbcdn.net/v/t39.30808-6/218028276_110313624670813_3302617093748322571_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=0t1bpi5AKhIAX884tev&_nc_ht=scontent.fhan4-2.fna&oh=00_AT_8mc17KodwAN21AKUoh-S5Jfc1B4dDYvm_wy_qwE5nUw&oe=6257DC67"
          name="GF Give me"
          game="Team Fight Tactics"
        ></Item13>

        <Seperate></Seperate>

        <Item9 title="Gợi ý" btn="Xem tất cả"></Item9>

        <Item13
          image="https://scontent.fhan3-4.fna.fbcdn.net/v/t1.6435-9/72684679_106156687466219_2141636062911397888_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=0z5D2syZDrkAX8vrRa_&_nc_ht=scontent.fhan3-4.fna&oh=00_AT-XJWBH1TD_dtCbijisdDyTeNI3YjfQDyzCPP6ysH_oaA&oe=62770AA7"
          name="TG Đậu Đậu"
          game="Team Fight Tactics"
        ></Item13>
      </div>
    </div>
  );
};

export default MenuContainer;
