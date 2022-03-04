import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../images/banner-4.jpg";
import banner2 from "../../../images/ralph-ravi-kayden.jpg";
import banner3 from "../../../images/vojtech-bruzek.jpg";

const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "600px" }}
          src={banner1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1
            style={{
              fontWeight: "700px",
              fontSize: "60px",
              color: "#cd5c5c ",
              marginBottom: "12rem",
            }}
          >
            "Welcome To Sylhet Hotel & Restaurant"
          </h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "600px" }}
          src={banner2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3
            style={{
              fontWeight: "700px",
              fontSize: "60px",
              color: "#4b0082",
              marginBottom: "12rem",
            }}
          >
            Make Your Stay Memorable
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "600px" }}
          src={banner3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3
            style={{
              fontWeight: "700px",
              fontSize: "60px",
              color: "#778899",
              marginBottom: "12rem",
            }}
          >
            Make Your Stay Memorable
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
