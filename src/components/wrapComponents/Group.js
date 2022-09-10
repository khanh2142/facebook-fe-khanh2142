import React from "react";

import { Col, Row, Container } from "react-bootstrap";
import MenuContainer from "./menuForWrapComponents/MenuContainerForGroup";

import "../../styles/group.css";
import Item9 from "../reuseComponents/Item9";
import Item17 from "../reuseComponents/Item17";
import Item18 from "../reuseComponents/Item18";
import PostImageGroup from "../reuseComponents/PostImageGroup";

import "../../styles/responsive/group.css";

const Group = () => {
  const fakeData = [
    {
      avatarGroup:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLN6iIyzrpFiamQ8saqs7WJj_cZh8sA1cxWHDVR8mNMMIaHXZGxAC_VZb58AbIowaSORA&usqp=CAU",
      avatarUser:
        "https://namcungkiemchu.files.wordpress.com/2021/05/miss_fortune_originalcentered.jpg",
      groupName: "Group ngoại binh",
      userName: "Miss Fortune",
      time: "1 giờ",
      content:
        "Nhưng không điều gì là vĩnh cửu nơi thành phố cảng này cả, và Thuyền Trưởng Fortune vẫn đang phải lấy tên mình ra duy trì trật tự giữa những toán cướp biển và băng đảng, cũng như sẵn sàng cho những mối hiểm họa đang chực chờ ngoài kia.",
      image:
        "https://images.contentstack.io/v3/assets/blt187521ff0727be24/bltc6e788b11a9c8245/60ee0f71a86d0f5a0be449a3/MissFortune_0.jpg",
      reaction: 1,
      comment: 4,
    },
    {
      avatarGroup:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLN6iIyzrpFiamQ8saqs7WJj_cZh8sA1cxWHDVR8mNMMIaHXZGxAC_VZb58AbIowaSORA&usqp=CAU",
      avatarUser:
        "https://namcungkiemchu.files.wordpress.com/2021/05/miss_fortune_originalcentered.jpg",
      groupName: "Group ngoại binh",
      userName: "Miss Fortune",
      time: "1 giờ",
      content:
        "Nhưng không điều gì là vĩnh cửu nơi thành phố cảng này cả, và Thuyền Trưởng Fortune vẫn đang phải lấy tên mình ra duy trì trật tự giữa những toán cướp biển và băng đảng, cũng như sẵn sàng cho những mối hiểm họa đang chực chờ ngoài kia.",
      image:
        "https://images.contentstack.io/v3/assets/blt187521ff0727be24/bltc6e788b11a9c8245/60ee0f71a86d0f5a0be449a3/MissFortune_0.jpg",
      reaction: 1,
      comment: 4,
    },
    {
      avatarGroup:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLN6iIyzrpFiamQ8saqs7WJj_cZh8sA1cxWHDVR8mNMMIaHXZGxAC_VZb58AbIowaSORA&usqp=CAU",
      avatarUser:
        "https://namcungkiemchu.files.wordpress.com/2021/05/miss_fortune_originalcentered.jpg",
      groupName: "Group ngoại binh",
      userName: "Miss Fortune",
      time: "1 giờ",
      content:
        "Nhưng không điều gì là vĩnh cửu nơi thành phố cảng này cả, và Thuyền Trưởng Fortune vẫn đang phải lấy tên mình ra duy trì trật tự giữa những toán cướp biển và băng đảng, cũng như sẵn sàng cho những mối hiểm họa đang chực chờ ngoài kia.",
      image:
        "https://images.contentstack.io/v3/assets/blt187521ff0727be24/bltc6e788b11a9c8245/60ee0f71a86d0f5a0be449a3/MissFortune_0.jpg",
      reaction: 1,
      comment: 4,
    },
    {
      avatarGroup:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLN6iIyzrpFiamQ8saqs7WJj_cZh8sA1cxWHDVR8mNMMIaHXZGxAC_VZb58AbIowaSORA&usqp=CAU",
      avatarUser:
        "https://namcungkiemchu.files.wordpress.com/2021/05/miss_fortune_originalcentered.jpg",
      groupName: "Group ngoại binh",
      userName: "Miss Fortune",
      time: "1 giờ",
      content:
        "Nhưng không điều gì là vĩnh cửu nơi thành phố cảng này cả, và Thuyền Trưởng Fortune vẫn đang phải lấy tên mình ra duy trì trật tự giữa những toán cướp biển và băng đảng, cũng như sẵn sàng cho những mối hiểm họa đang chực chờ ngoài kia.",
      image:
        "https://images.contentstack.io/v3/assets/blt187521ff0727be24/bltc6e788b11a9c8245/60ee0f71a86d0f5a0be449a3/MissFortune_0.jpg",
      reaction: 1,
      comment: 4,
    },
    {
      avatarGroup:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLN6iIyzrpFiamQ8saqs7WJj_cZh8sA1cxWHDVR8mNMMIaHXZGxAC_VZb58AbIowaSORA&usqp=CAU",
      avatarUser:
        "https://namcungkiemchu.files.wordpress.com/2021/05/miss_fortune_originalcentered.jpg",
      groupName: "Group ngoại binh",
      userName: "Miss Fortune",
      time: "1 giờ",
      content:
        "Nhưng không điều gì là vĩnh cửu nơi thành phố cảng này cả, và Thuyền Trưởng Fortune vẫn đang phải lấy tên mình ra duy trì trật tự giữa những toán cướp biển và băng đảng, cũng như sẵn sàng cho những mối hiểm họa đang chực chờ ngoài kia.",
      image:
        "https://images.contentstack.io/v3/assets/blt187521ff0727be24/bltc6e788b11a9c8245/60ee0f71a86d0f5a0be449a3/MissFortune_0.jpg",
      reaction: 1,
      comment: 4,
    },
    {
      avatarGroup:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLN6iIyzrpFiamQ8saqs7WJj_cZh8sA1cxWHDVR8mNMMIaHXZGxAC_VZb58AbIowaSORA&usqp=CAU",
      avatarUser:
        "https://namcungkiemchu.files.wordpress.com/2021/05/miss_fortune_originalcentered.jpg",
      groupName: "Group ngoại binh",
      userName: "Miss Fortune",
      time: "1 giờ",
      content:
        "Nhưng không điều gì là vĩnh cửu nơi thành phố cảng này cả, và Thuyền Trưởng Fortune vẫn đang phải lấy tên mình ra duy trì trật tự giữa những toán cướp biển và băng đảng, cũng như sẵn sàng cho những mối hiểm họa đang chực chờ ngoài kia.",
      image:
        "https://images.contentstack.io/v3/assets/blt187521ff0727be24/bltc6e788b11a9c8245/60ee0f71a86d0f5a0be449a3/MissFortune_0.jpg",
      reaction: 1,
      comment: 4,
    },
    {
      avatarGroup:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLN6iIyzrpFiamQ8saqs7WJj_cZh8sA1cxWHDVR8mNMMIaHXZGxAC_VZb58AbIowaSORA&usqp=CAU",
      avatarUser:
        "https://namcungkiemchu.files.wordpress.com/2021/05/miss_fortune_originalcentered.jpg",
      groupName: "Group ngoại binh",
      userName: "Miss Fortune",
      time: "1 giờ",
      content:
        "Nhưng không điều gì là vĩnh cửu nơi thành phố cảng này cả, và Thuyền Trưởng Fortune vẫn đang phải lấy tên mình ra duy trì trật tự giữa những toán cướp biển và băng đảng, cũng như sẵn sàng cho những mối hiểm họa đang chực chờ ngoài kia.",
      image:
        "https://images.contentstack.io/v3/assets/blt187521ff0727be24/bltc6e788b11a9c8245/60ee0f71a86d0f5a0be449a3/MissFortune_0.jpg",
      reaction: 1,
      comment: 4,
    },
  ];

  return (
    <>
      <Col
        md="3"
        lg={3}
        xs={0}
        sm={0}
        style={{ padding: "0", position: "fixed" }}
      >
        <MenuContainer content="Group"></MenuContainer>
      </Col>
      <Col md="9" className="group__container">
        <Row>
          <Col md="12" lg={8} xs={12} sm={12} className="group__main">
            <div className="group__main-text">Hoạt động gần đây</div>

            {fakeData.map((item, index) => {
              return (
                <PostImageGroup
                  key={index}
                  avatarGroup={item.avatarGroup}
                  avatarUser={item.avatarUser}
                  groupName={item.groupName}
                  userName={item.userName}
                  time={item.time}
                  content={item.content}
                  image={item.image}
                  reaction={item.reaction}
                  comment={item.comment}
                ></PostImageGroup>
              );
            })}
          </Col>
          <Col lg="4" md={0} xs={0} sm={0} className="group__discover">
            <div className="group__discover-item">
              <Item9 title="Gợi ý cho bạn" btn="Xem thêm"></Item9>

              <div className="group__discover-text">
                Nhóm mà bạn có thể quan tâm.
              </div>

              <Item17
                image="https://image.thanhnien.vn/w1024/Uploaded/2022/ycwkdqmb/2022_04_13/2022-04-12t215618z-421733505-up1ei4c1oxrbj-rtrmadp-3-soccer-champions-mad-che-report-6183.jpg"
                name="Hội cổ động viên Real Madrid"
                member="300k"
                post="10"
              ></Item17>

              <div className="group__discover-prev">
                <i className="fa-solid fa-angle-left"></i>
              </div>
              <div className="group__discover-next">
                <i className="fa-solid fa-angle-right"></i>
              </div>
            </div>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default Group;
