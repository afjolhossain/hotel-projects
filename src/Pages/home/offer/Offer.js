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
    <div style={{ margin: "3rem 0" }}>
      <div style={LoginBG}>
        <Row>
          <Col xs={12} md={6}>
            <div style={{ width: "600px" }}>
              <h1 style={{ color: "#ED085F " }}>Summer Offer</h1>
              <h3 style={{ color: "white" }}>
                Benefit from a 10% discount, making your reservations with a
                minimum of 3 days in advance
              </h3>
              <Button variant="primary">Booking Now</Button>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div style={{ width: "600px" }}>
              <h1 style={{ color: "#ED085F " }}>Summer Offer</h1>
              <h3 style={{ color: "white" }}>
                Benefit from a 10% discount, making your reservations with a
                minimum of 3 days in advance
              </h3>
              <Button variant="primary">Booking Now</Button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Offer;
