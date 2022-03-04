import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import offerBg from "../../../images/offer.jpg";

const LoginBG = {
  background: `url(${offerBg})`,

  backgroundRepeat: "round",
  height: "600px",
  backgroundColor: "rgba(6, 5, 49,0.6)",
  backgroundBlendMode: "darken, luminosity",
  marginBottom: "40px",
};

const Offer = () => {
  return (
    <div style={LoginBG}>
      <div style={{ margin: "3rem ", textAlign: "center" }}>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <div style={{ margin: "auto" }}>
          <h1 style={{ color: "#fff8dc", fontSize: "3rem" }}>Summer Offer</h1>
          <h2
            style={{
              fontSize: "4rem",
              backgroundColor: "#ff7f50",
              width: "260px",
              margin: "auto",
              borderRadius: "50%",
            }}
          >
            up to <span>15%</span>
          </h2>
          <h3 style={{ color: "white", fontSize: "20px" }}>
            " Benefit from a 10% discount, making your reservations with a
            minimum of 3 days in advance"
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Offer;
