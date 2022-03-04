import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const SingleService = ({ service }) => {
  const { _id, name, description, image, price } = service;
  return (
    <Row xs={12} md={4} lg={4} className="m-auto">
      <Col>
        <Card
          style={{
            width: "22rem",
            height: "25rem",
            borderRadius: "10px",
          }}
          className="m-auto"
        >
          <Card.Img
            variant="top"
            src={image}
            style={{ width: "22rem", height: "12rem" }}
          />
          <Card.Body>
            <Card.Title className="text-start">Room: {name}</Card.Title>
            <Card.Text className="text-start">
              Description: {description}
            </Card.Text>
            <Card.Title className="text-start"> Price: {price} BDT</Card.Title>
          </Card.Body>
          <Link to={`/booking/${_id}`}>
            <Button style={{ width: "22rem" }} variant="primary">
              Booking Now
            </Button>
          </Link>
        </Card>
      </Col>
    </Row>
  );
};

export default SingleService;
