import React, { Component } from "react";
import "../review/Component.css";
import { Container } from "react-bootstrap";
import reviewPerson1 from "../../../images/afjol hossain.JPG";
import Slider from "react-slick";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };

    return (
      <div style={{ marginBottom: "5rem" }}>
        <Container>
          <h2 className="title" style={{ marginTop: "2rem" }}>
            <span style={{ color: "#AA3E04" }}>Our Clients are</span> Important
            to Us
          </h2>
          <Slider {...settings}>
            <div className="reviwe-client-div">
              <img className="image" src={reviewPerson1} alt="" />
              <div className="client-details">
                <h4>
                  <span className="special-color">Name</span> : Shahed Ahmed
                </h4>
                <h5>
                  <span className="special-color">Profession</span> : Fontend
                  Developer
                </h5>
                <p
                  style={{
                    color: "#200503",
                    padding: "5px",
                  }}
                >
                  Fantastic location in a historic renovated monastery in the
                  heart of the Castro. Staff were helpful and knowledgeable and
                  everything in easy walking distance
                </p>
              </div>
            </div>
            <div className="reviwe-client-div">
              <img className="image" src={reviewPerson1} alt="" />
              <div className="client-details">
                <h4>
                  <span className="special-color">Name</span> : Afjol Hossain
                </h4>
                <h5>
                  <span className="special-color">Profession</span> : Fontend
                  Developer
                </h5>
                <p
                  style={{
                    color: "#200503",
                    padding: "5px",
                  }}
                >
                  Fantastic location in a historic renovated monastery in the
                  heart of the Castro. Staff were helpful and knowledgeable and
                  everything in easy walking distance
                </p>
              </div>
            </div>
            <div className="reviwe-client-div">
              <img className="image" src={reviewPerson1} alt="" />
              <div className="client-details">
                <h4>
                  <span className="special-color">Name</span> : Shahed Ahmed
                </h4>
                <h5>
                  <span className="special-color">Profession</span> : Fontend
                  Developer
                </h5>
                <p
                  style={{
                    color: "#200503",
                    padding: "5px",
                  }}
                >
                  Fantastic location in a historic renovated monastery in the
                  heart of the Castro. Staff were helpful and knowledgeable and
                  everything in easy walking distance
                </p>
              </div>
            </div>
            <div className="reviwe-client-div">
              <img className="image" src={reviewPerson1} alt="" />
              <div className="client-details">
                <h4>
                  <span className="special-color">Name</span> : Afjol Hossain
                </h4>
                <h5>
                  <span className="special-color">Profession</span> : Fontend
                  Developer
                </h5>
                <p
                  style={{
                    color: "#200503",
                    padding: "5px",
                  }}
                >
                  Fantastic location in a historic renovated monastery in the
                  heart of the Castro. Staff were helpful and knowledgeable and
                  everything in easy walking distance
                </p>
              </div>
            </div>
          </Slider>
        </Container>
      </div>
    );
  }
}
