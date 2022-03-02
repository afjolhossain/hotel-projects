import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

const SingleService = ({ service }) => {
  const { name, title, image, price } = service;
  return (
    <Row xs={12} md={4} lg={4} className="m-auto">
      <Col>
        <Card style={{ width: "22rem", height: "25rem" }} className="m-auto">
          <Card.Img
            variant="top"
            src={image}
            style={{ width: "22rem", height: "12rem" }}
          />
          <Card.Body>
            <Card.Title className="text-start">Room: {name}</Card.Title>
            <Card.Text className="text-start">Description: {title}</Card.Text>
            <Card.Title className="text-start"> Price: {price} BDT</Card.Title>
          </Card.Body>
          <Button variant="primary">Booking Now</Button>
        </Card>
      </Col>
    </Row>
  );
};

export default SingleService;
