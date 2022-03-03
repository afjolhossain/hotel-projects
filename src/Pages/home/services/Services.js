import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import SingleService from "../SingleService/SingleService";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div style={{ backgroundColor: "#F2F4F4 " }}>
      <Container style={{ marginTop: "5rem" }}>
        <h2 style={{ fontSize: "70px" }}>
          Our Best <span style={{ color: "#AA3E04" }}>Services For You</span>
        </h2>
        <Row xs={1} sm={6} md={3} style={{ rowGap: "20px", marginTop: "5rem" }}>
          {services.map((service) => (
            <SingleService key={service._id} service={service}></SingleService>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
