import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../images/banner-4.jpg";
import banner2 from "../../../images/ralph-ravi-kayden.jpg";
import banner3 from "../../../images/vojtech-bruzek.jpg";

const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "650px" }}
            src={banner1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h1
              style={{
                fontWeight: "700px",
                fontSize: "70px",
                color: "#F0F3F4 ",
                marginBottom: "20rem",
              }}
            >
              "Welcome To Sylhet Hotel & Restaurant"
            </h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "650px" }}
            src={banner2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3
              style={{
                fontWeight: "700px",
                fontSize: "70px",
                color: "#2C3E50",
                marginBottom: "110px",
              }}
            >
              Make Your Stay Memorable
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "650px" }}
            src={banner3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3
              style={{
                fontWeight: "700px",
                fontSize: "70px",
                color: "white",
                marginBottom: "110px",
              }}
            >
              Make Your Stay Memorable
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
