import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { Col, Row, Container } from "react-bootstrap";

import "../../styles/detailPost.css";

import Seperate from "../reuseComponents/Seperate";
import LikePost from "../customHook/LikePost";
import UnLikePost from "../customHook/UnLikePost";

import "../../styles/responsive/detailPost.css";

const DetailPost = () => {
  const [data, setData] = useState([]);
  const [imageSize, setImageSize] = useState(100);
  const [resize, setResize] = useState(false);
  const [click, setClick] = useState(0);

  const { id } = useParams();
  useEffect(() => {
    const url = "https://fb-be.herokuapp.com/post/" + id;
    fetch(url)
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    const url = "https://fb-be.herokuapp.com/post/" + id;
    fetch(url)
      .then((res) => res.json())
      .then((result) => setData(result));
  }, [click]);

  console.log(click);

  const negative = useNavigate();

  return (
    <Container>
      <Row className="detailPost__row">
        <Col
          lg={resize ? 12 : 9}
          md={12}
          sm={12}
          xs={12}
          className="detailPost__image"
          style={{
            backgroundImage: `url(${data.image})`,
            backgroundSize: `${imageSize}%`,
          }}
        >
          <div className="detailPost__image-function">
            <div
              className="detailPost__function-button"
              onClick={() => negative(-1)}
            >
              <i className="fa-solid fa-xmark"></i>
            </div>
            <div className="detailPost__function-zoom">
              {imageSize === 150 ? (
                <div className="detailPost__function-button disable">
                  <i className="fa-solid fa-magnifying-glass-plus"></i>
                </div>
              ) : (
                <div
                  className="detailPost__function-button"
                  onClick={() => setImageSize(imageSize + 10)}
                >
                  <i className="fa-solid fa-magnifying-glass-plus"></i>
                </div>
              )}

              {imageSize === 100 ? (
                <div className="detailPost__function-button disable">
                  <i className="fa-solid fa-magnifying-glass-minus"></i>
                </div>
              ) : (
                <div
                  className="detailPost__function-button"
                  onClick={() => setImageSize(imageSize - 10)}
                >
                  <i className="fa-solid fa-magnifying-glass-minus"></i>
                </div>
              )}

              {!resize ? (
                <div
                  className="detailPost__function-button"
                  onClick={() => setResize(!resize)}
                >
                  <i className="fa-solid fa-up-right-and-down-left-from-center"></i>
                </div>
              ) : (
                <div
                  className="detailPost__function-button"
                  onClick={() => setResize(!resize)}
                >
                  <i className="fa-solid fa-down-left-and-up-right-to-center"></i>
                </div>
              )}
            </div>
          </div>
        </Col>
        {resize ? (
          ""
        ) : (
          <Col md={12} lg={3} sx={12} sm={12} className="detailPost__info">
            <div className="detailPost__info-user">
              <Link
                to={"/friend/" + data.user_id}
                className="detailPost__info-avatar"
                style={{ backgroundImage: `url(${data.avatar})` }}
              ></Link>
              <div className="detailPost__info-desc">
                <Link
                  to={"/friend/" + data.user_id}
                  className="detailPost__info-name"
                >
                  {data.name}
                </Link>
                <div className="detailPost__info-time">
                  {data.updateAt} <i className="fa-solid fa-earth-asia"></i>
                </div>
              </div>
              <div className="detailPost__info-more">
                <i className="fa-solid fa-ellipsis"></i>
              </div>
            </div>
            <div className="detailPost__info-content">
              {data.content ? data.content : ""}
            </div>
            <div className="detailPost__info-function">
              {data.reaction > 0 ? (
                <div className="detailPost__info-reaction">
                  <div className="detailPost__info-like">
                    <i className="fa-solid fa-thumbs-up"></i>
                  </div>
                  {data.reaction}
                </div>
              ) : (
                ""
              )}
              {data.comment && data.comment.length > 0 ? (
                <div className="detailPost__info-comment">
                  {data.comment.length} bình luận
                </div>
              ) : (
                ""
              )}
            </div>
            <Seperate></Seperate>
            <div className="detailPost__info-button">
              {data.reaction > 0 ? (
                <div
                  className="detailPost__info-item"
                  onClick={() => {
                    UnLikePost(data, id);
                    setClick(click + 1);
                  }}
                >
                  <i
                    className="fa-regular fa-thumbs-up"
                    style={{ color: "#1796f3" }}
                  ></i>
                  <div
                    className="detailPost__info-btnContent"
                    style={{ color: "#1796f3" }}
                  >
                    Đã thích
                  </div>
                </div>
              ) : (
                <div
                  className="detailPost__info-item"
                  onClick={() => {
                    LikePost(data, id);
                    setClick(click + 1);
                  }}
                >
                  <i className="fa-regular fa-thumbs-up"></i>
                  <div className="detailPost__info-btnContent">Thích</div>
                </div>
              )}
              <div className="detailPost__info-item">
                <i className="fa-regular fa-message"></i>
                <div className="detailPost__info-btnContent">Bình luận</div>
              </div>
              <div className="detailPost__info-item">
                <i className="fa-solid fa-share"></i>
                <div className="detailPost__info-btnContent">Chia sẻ</div>
              </div>
            </div>
            <Seperate></Seperate>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default DetailPost;
