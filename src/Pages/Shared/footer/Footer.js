import React from "react";
import { Card } from "react-bootstrap";
import logo from "../../../images/Sylhet.png";

const Footer = () => {
  return (
    <Card className="bg-black">
      <Card.Header>Featured</Card.Header>

      <Card.Body>
        <div className="container" sm>
          <div className="row" style={{ color: "white" }}>
            <div className="col text-start">
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <img style={{ width: "200px" }} src={logo} alt="" />
            </div>
            <div className="col text-start">
              <Card.Title>General</Card.Title>
              <Card.Text>Accommodation</Card.Text>
              <Card.Text>Dine & Drink</Card.Text>
              <Card.Text>Spa & Leisure</Card.Text>
              <Card.Text>Services</Card.Text>
            </div>
            <div className="col text-start">
              <Card.Title>Connect</Card.Title>
              <Card.Text>Facebook</Card.Text>
              <Card.Text>Instagram</Card.Text>
              <Card.Text>Twitter</Card.Text>
              <Card.Text>Tripadvisor</Card.Text>
            </div>
            <div className="col text-start">
              <Card.Title>About Us</Card.Title>
              <Card.Text>Email:multitaskershahed1@gmail.com</Card.Text>
              <Card.Text>Mob: 01741147274</Card.Text>
              <Card.Text>
                Add. 929 Border Street Satellite Beach, FL 32937
              </Card.Text>
            </div>
            <div>
              <p>Copyright © 2021 by Shahed Ahmed</p>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Footer;
