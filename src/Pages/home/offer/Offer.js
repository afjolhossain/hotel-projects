import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import offerBg from "../../../images/offer.jpg";

const LoginBG = {
  background: `url(${offerBg})`,

  backgroundRepeat: "round",
  height: "600px",
  backgroundColor: "rgba(6, 5, 49,0.6)",
  backgroundBlendMode: "darken, luminosity",
};

const Offer = () => {
  return (
    <div style={LoginBG}>
      <div style={{ justifyContent: "center" }}>
        <h1 style={{ color: "#fff8dc", fontSize: "3rem" }}>Summer Offer</h1>

        <h2 style={{ marginTop: "200px", color: "white" }}>
          up to <span style={{ color: "#DAC3C9 " }}>15%</span>
        </h2>

        <h3 style={{ color: "white", fontSize: "20px", marginTop: "200px" }}>
          " Benefit from a 10% discount, making your reservations with a minimum
          of 3 days in advance"
        </h3>
      </div>
    </div>
  );
};

export default Offer;
