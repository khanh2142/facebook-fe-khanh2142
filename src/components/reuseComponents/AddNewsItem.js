import React from "react";

const AddNewsItem = (props) => {
  return (
    <div
      className="newsItem"
      style={{
        backgroundImage: `url(${props.avatar})`,
      }}
    >
      <div className="newsItem-add">
        <i className="fa-solid fa-plus"></i>
      </div>

      <div className="newsItem-title">Tạo tin</div>

      <div className="newsItem-overlay"></div>
    </div>
  );
};

export default AddNewsItem;
