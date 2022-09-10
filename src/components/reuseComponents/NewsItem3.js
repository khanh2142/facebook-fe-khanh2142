import React from "react";

const NewsItem3 = () => {
  return (
    <div className="newsItem3">
      <div className="newsItem3-form">
        <input type="text" placeholder="Trả lời..."></input>
        <div className="newsItem3-sticker">
          <i className="fa-solid fa-image"></i>
        </div>
      </div>

      <div className="newsItem3-reaction">
        <div className="newsItem3-btn newsItem3-like">
          <i className="fa-solid fa-thumbs-up"></i>
        </div>
        <div className="newsItem3-btn newsItem3-love">
          <i className="fa-solid fa-heart"></i>
        </div>
        <div className="newsItem3-btn newsItem3-laugh">
          <i className="fa-solid fa-face-grin-squint"></i>
        </div>

        <div className="newsItem3-btn newsItem3-wow">
          <i className="fa-solid fa-face-surprise"></i>
        </div>
        <div className="newsItem3-btn newsItem3-sad">
          <i className="fa-solid fa-face-frown"></i>
        </div>
        <div className="newsItem3-btn newsItem3-angry">
          <i className="fa-solid fa-face-angry"></i>
        </div>
      </div>
    </div>
  );
};

export default NewsItem3;
