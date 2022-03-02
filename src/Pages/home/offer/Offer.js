import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import offerBg from "../../../images/bg-1.jpg";

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
    <div style={{ marginTop: "7rem" }}>
      <div style={LoginBG} className="mt-5rem">
        <Row>
          <Col style={{ margin: "auto", marginTop: "10rem" }}>
            <h1 style={{ color: "white" }}>Summer Offer</h1>
            <h3 style={{ color: "white" }}>
              Benefit from a 10% discount, making your reservations with a
              minimum of 3 days in advance
            </h3>
            <Button variant="primary">Booking Now</Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Offer;
