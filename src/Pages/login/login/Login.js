import React, { useState } from "react";
import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  Row,
  Spinner,
} from "react-bootstrap";
import logo from "../../../images/Sylhet.png";
import loginpage from "../../../images/banner-4.jpg";
import Navigation from "../../Shared/Navigation/Navigation";
import Footer from "../../Shared/footer/Footer";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const [loginData, setLoginData] = useState({});

  const { loginUser, isLoading, user, authError } = useAuth();
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLogInData = { ...loginData };
    newLogInData[field] = value;
    setLoginData(newLogInData);
  };
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password);
    e.preventDefault();
  };
  return (
    <div style={{ backgroundColor: "#85929E" }}>
      <Navigation></Navigation>
      <Container style={{ marginBottom: "3rem" }}>
        <img
          style={{
            width: "130px",
            marginBottom: "1rem",
            marginTop: "1rem",
          }}
          src={logo}
          alt=""
        />
        <Row>
          <Col
            style={{
              width: "500px",

              marginTop: "3rem",
            }}
          >
            <img
              style={{ width: "500px", height: "400px" }}
              src={loginpage}
              alt=""
            />
          </Col>
          <Col>
            {!isLoading && (
              <Form
                onSubmit={handleLoginSubmit}
                style={{
                  width: "500px",
                  height: "400px",
                  marginTop: "3rem",
                  borderRadius: "10px",
                  backgroundColor: "#081B4E ",
                }}
              >
                <h2 style={{ fontSize: "30px", color: "#EA510E" }}>Login</h2>
                <Form.Group className="mb-3">
                  <Form.Control
                    style={{ width: "400px", margin: "auto" }}
                    type="email"
                    name="email"
                    onChange={handleOnChange}
                    placeholder="Enter email"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="password"
                    name="password"
                    onChange={handleOnChange}
                    style={{ width: "400px", margin: "auto" }}
                    placeholder="Password"
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  style={{ width: "400px" }}
                  type="submit"
                >
                  Login
                </Button>
                <br />
                <Form.Text className="text-muted" style={{ fontSize: "20px" }}>
                  ------------------------OR----------------------
                </Form.Text>
                <Button
                  variant="primary"
                  style={{ width: "400px" }}
                  type="submit"
                >
                  Sign-In-Google
                </Button>
                <NavLink style={{ textDecoration: "none" }} to="/register">
                  <Button
                    style={{ color: "#EA510E", fontWeight: 700 }}
                    variant="text"
                  >
                    New User? Please Register
                  </Button>
                </NavLink>
              </Form>
            )}
            {isLoading && <Spinner animation="border" variant="primary" />}
            {user?.email && (
              <Alert style={{ width: "500px" }} variant="success">
                Logged Successfully.
              </Alert>
            )}
            {authError && (
              <Alert style={{ width: "500px" }} variant="warning">
                {authError}
              </Alert>
            )}
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Login;
