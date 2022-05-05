import React, { Component } from "react";
import "../review/Component.css";
import { Container } from "react-bootstrap";
import reviewPerson1 from "../../../images/afjol hossain.JPG";
import Slider from "react-slick";

export default class AutoPlay extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <Container>
        <h2 className="title" style={{ margin: "auto", marginTop: "20px" }}>
          <span style={{ color: "#AA3E04" }}>Our Clients are</span> Important to
          Us
        </h2>
        <Slider
          {...settings}
          style={{
            padding: "3rem",
            marginTop: "20px",
            marginBottom: "50px",
            backgroundColor: "#566573",
          }}
        >
          <div className="client-details">
            <img className="image" src={reviewPerson1} alt="" />
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
              Fantastic location in a historic renovated monastery in the heart
              of the Castro. Staff were helpful and knowledgeable and everything
              in easy walking distance
            </p>
          </div>
          <div>
            <div className="client-details">
              <img className="image" src={reviewPerson1} alt="" />
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
          <div>
            <div className="client-details">
              <img className="image" src={reviewPerson1} alt="" />

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
          <div>
            <div className="client-details">
              <img className="image" src={reviewPerson1} alt="" />

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
          <div>
            <div className="client-details">
              <img className="image" src={reviewPerson1} alt="" />
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
        </Slider>
      </Container>
    );
  }
}
