import React, { useEffect, useState } from "react";
import { Card, Col, ListGroup, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Footer from "../../Shared/footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";

const Booking = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/services/${serviceId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div style={{ backgroundColor: "#F5B7B1" }}>
      <Navigation></Navigation>
      <Row style={{ marginTop: "3rem", marginBottom: "3rem", padding: "3rem" }}>
        <Col xs={12} md={6} style={{ width: "35rem", margin: "auto" }}>
          <img style={{ width: "30rem" }} src={service.image} alt="" />
        </Col>
        <Col xs={12} md={6} style={{ width: "35rem" }}>
          <Card style={{ width: "30rem", height: "20rem", margin: "auto" }}>
            <ListGroup variant="flush" style={{ textAlign: "start" }}>
              <ListGroup.Item style={{ fontSize: "30px", color: "#6F0938 " }}>
                <span style={{ color: "#E75F0C " }}> Room: </span>
                {service.name}
              </ListGroup.Item>
              <ListGroup.Item style={{ fontSize: "20px", color: "#6F0938 " }}>
                <span style={{ color: "#E75F0C " }}> Description: </span>
                {service.description}
              </ListGroup.Item>
              <ListGroup.Item style={{ fontSize: "25px", color: "#6F0938 " }}>
                <span style={{ color: "#E75F0C " }}> Price: </span>
                {service.price} BDT
              </ListGroup.Item>
            </ListGroup>
            <Link to="/order">
              <button
                className="button "
                style={{
                  marginTop: "2rem",
                  width: "25rem",
                  color: "white",
                  fontSize: "20px",
                  height: "3rem",
                  backgroundColor: "#6A3B54 ",
                }}
              >
                Booking Now
              </button>
            </Link>
          </Card>
        </Col>
      </Row>
      <Footer></Footer>
    </div>
  );
};

export default Booking;
