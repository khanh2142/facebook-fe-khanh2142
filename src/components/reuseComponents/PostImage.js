import React, { useEffect, useState } from "react";
import Seperate from "./Seperate";

import "../../styles/postImage.css";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import TimeCalc from "../customHook/TimeCalc";
import UnLikePost from "../customHook/UnLikePost";
import LikePost from "../customHook/LikePost";

const PostImage = (props) => {
  const [more, setMore] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [click, setClick] = useState(0);

  useEffect(() => {
    const id = props.post_id;
    const url = "https://fb-be.herokuapp.com/post/" + id;
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setTimeout(() => {
          setLoading(false);
        }, 1500);
      });
  }, []);

  useEffect(() => {
    const url = "https://fb-be.herokuapp.com/post/" + props.post_id;
    fetch(url)
      .then((res) => res.json())
      .then((result) => setData(result));
  }, [click]);

  function deletePost(id) {
    const url = "https://fb-be.herokuapp.com/post/delete/" + id;
    fetch(url, { method: "DELETE" })
      .then(() => {
        props.refresh();
        setMore(false);
      })
      .catch((e) => console.log(e));
  }

  return (
    <div className="postImage">
      <div className="postImage__user">
        {loading ? (
          <Skeleton
            style={{
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              backgroundColor: "rgba(255,255,255,0.5)",
            }}
          />
        ) : (
          <Link
            to={"/friend/" + props.id}
            className="postImage__user-avatar"
            style={{ backgroundImage: `url(${props.avatar})` }}
          ></Link>
        )}

        <div className="postImage__user-info">
          {loading ? (
            <Skeleton
              count={1}
              style={{
                backgroundColor: "rgba(255,255,255,0.5)",
                width: "100px",
              }}
            />
          ) : (
            <Link to={"/friend/" + props.id} className="postImage__user-name">
              {props.name}
            </Link>
          )}
          {loading ? (
            <Skeleton
              count={1}
              style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
            />
          ) : (
            <div className="postImage__user-time">
              {TimeCalc(props.time)}
              <i className="fa-solid fa-earth-asia"></i>
            </div>
          )}
        </div>
        <div className="postImage__user-more" onClick={() => setMore(!more)}>
          {loading ? (
            <Skeleton
              count={1}
              style={{
                backgroundColor: "rgba(255,255,255,0.5)",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
              }}
            />
          ) : more ? (
            <i className="fa-solid fa-close"></i>
          ) : (
            <i className="fa-solid fa-ellipsis"></i>
          )}
        </div>

        {more ? (
          <div className="postImage__more">
            <div className="postImage__more-item">
              <i className="fa-solid fa-pen"></i>
              <div className="postImage__more-content">Sửa bài viết</div>
            </div>
            <div
              className="postImage__more-item"
              onClick={() => deletePost(props.post_id)}
            >
              <i className="fa-solid fa-trash"></i>
              <div className="postImage__more-content">Xóa bài viết</div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

      {loading ? (
        <Skeleton
          count={3}
          style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
        />
      ) : props.content && !props.image ? (
        <div className="postImage__content" style={{ fontSize: "40px" }}>
          {props.content}
        </div>
      ) : (
        <div className="postImage__content">{props.content}</div>
      )}

      {!props.image ? (
        ""
      ) : loading ? (
        <Skeleton
          count={1}
          style={{ backgroundColor: "rgba(255,255,255,0.5)", height: "200px" }}
        />
      ) : props.image && props.content ? (
        <Link to={"/post/" + props.post_id}>
          <img src={props.image} alt="" className="postImage__image"></img>
        </Link>
      ) : (
        <Link to={"/post/" + props.post_id}>
          <img src={props.image} alt="" className="postImage__image"></img>
        </Link>
      )}

      <div className="postImage__info">
        {data.reaction > 0 ? (
          <div className="postImage__info-reaction">
            <div className="postImage__info-like">
              <i className="fa-solid fa-thumbs-up"></i>
            </div>
            <div className="postImage__info-reactQuantity">{data.reaction}</div>
          </div>
        ) : (
          ""
        )}

        <div className="postImage__info-comment">
          {props.comment.length > 0 ? props.comment + " bình luận" : ""}
        </div>
      </div>

      <Seperate></Seperate>

      <div className="postImage__button">
        {loading ? (
          <Skeleton
            style={{
              backgroundColor: "rgba(255,255,255,0.5)",
              height: "100%",
              width: "99%",
            }}
          />
        ) : data.reaction > 0 ? (
          <div
            className="postImage__button-item"
            onClick={() => {
              UnLikePost(data, props.post_id);
              setClick(click + 1);
            }}
          >
            <i
              className="fa-regular fa-thumbs-up"
              style={{ color: "#2d86ff" }}
            ></i>
            <div
              className="postImage__button-content"
              style={{ color: "#2d86ff" }}
            >
              Đã thích
            </div>
          </div>
        ) : (
          <div
            className="postImage__button-item"
            onClick={() => {
              LikePost(data, props.post_id);
              setClick(click + 1);
            }}
          >
            <i className="fa-regular fa-thumbs-up"></i>
            <div className="postImage__button-content">Thích</div>
          </div>
        )}

        {loading ? (
          <Skeleton
            style={{
              backgroundColor: "rgba(255,255,255,0.5)",
              height: "100%",
              width: "99%",
            }}
          />
        ) : (
          <div className="postImage__button-item">
            <i className="fa-regular fa-message"></i>
            <div className="postImage__button-content">Bình luận</div>
          </div>
        )}
        {loading ? (
          <Skeleton
            style={{
              backgroundColor: "rgba(255,255,255,0.5)",
              height: "100%",
              width: "99%",
            }}
          />
        ) : (
          <div className="postImage__button-item">
            <i className="fa-solid fa-share"></i>
            <div className="postImage__button-content">Chia sẻ</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostImage;
