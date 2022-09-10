import React from "react";
import Seperate from "./Seperate";

const Item15 = (props) => {
  return (
    <div className="item15">
      <div className="item15__user">
        <div
          className="item15__user-avatar"
          style={{ backgroundImage: "url(" + props.image + ")" }}
        ></div>

        <div className="item15__user-info">
          <div className="item15__user-detailInfo">
            <div className="item15__user-name">{props.name}</div>
            <i className="fa-solid fa-circle-dot"></i>
            <div className="item15__user-follow">Theo dõi</div>
          </div>

          <div className="item15__user-time">
            <div className="item15__user-detailTime">{props.time}</div>
            <i className="fa-solid fa-circle-dot"></i>
            <i className="fa-solid fa-earth-asia item15__user-public"></i>
          </div>
        </div>

        <div className="item15__user-more">
          <i className="fa-solid fa-ellipsis"></i>
        </div>
      </div>

      <div className="item15__content">{props.content}</div>

      <div className="item15__video">
        {props.video}

        <div className="item15__video-function">
          <i className="fa-solid fa-play item15__video-play"></i>
          <div className="item15__video-duration">0:00 / 0:00</div>
          <input
            type="range"
            min="0"
            max="100"
            defaultValue="0"
            id="item15__video-progress"
            className="item15__video-progress"
          />
          <i className="fa-solid fa-gear item15__video-setting"></i>
          <i className="fa-solid fa-closed-captioning item15__video-sub"></i>
          <i className="fa-solid fa-down-left-and-up-right-to-center item15__video-resize"></i>
          <i className="fa-solid fa-up-right-from-square item15__video-minimize"></i>
        </div>

        <i className="fa-solid fa-volume-high item15__video-volume"></i>

        <input
          type="range"
          min="0"
          max="100"
          defaultValue="100"
          className="item15__video-audioProgress"
        />
      </div>

      <div className="item15__function">
        <div className="item15__function-primary">
          <div className="item15__function-button">
            <i className="fa-solid fa-thumbs-up"></i>
            <div className="item15__function-content">Thích</div>
          </div>

          <div className="item15__function-button">
            <i className="fa-solid fa-message"></i>
            <div className="item15__function-content">Bình luận</div>
          </div>

          <div className="item15__function-button">
            <i className="fa-solid fa-share"></i>
            <div className="item15__function-content">Chia sẻ</div>
          </div>
        </div>

        <div className="item15__function-secondary">
          <div className="item15__function-reactionCount">
            <div className="item15__function-icon">
              <div className="item15__function-reaction reaction-like">
                <i className="fa-solid fa-thumbs-up"></i>
              </div>
              <div className="item15__function-reaction reaction-love">
                <i className="fa-solid fa-heart"></i>
              </div>
              <div className="item15__function-reaction reaction-laugh">
                <i className="fa-solid fa-face-laugh-squint"></i>
              </div>
            </div>
            <div className="item15__function-count">{props.reactionCount}</div>
          </div>

          <div className="item15__function-commentCount">
            <i className="fa-solid fa-circle item15__function-point"></i>

            <div className="item15__function-count">{props.commentCount}</div>

            <i className="fa-solid fa-circle item15__function-point"></i>

            <div className="item15__function-count">{props.viewCount}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item15;
