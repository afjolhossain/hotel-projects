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
import loginpage from "../../../images/banner-4.jpg";
import Navigation from "../../Shared/Navigation/Navigation";
import Footer from "../../Shared/footer/Footer";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Register = () => {
  const [loginData, setLoginData] = useState({});

  const { registerUser, isLoading, user, authError } = useAuth();

  const navigate = useNavigate();

  // const handleGoogleSignIn = () => {
  //   signInGoogle(navigate);
  // };

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLogInData = { ...loginData };
    newLogInData[field] = value;
    setLoginData(newLogInData);
  };
  const handleRegisterSubmit = (e) => {
    registerUser(loginData.email, loginData.password, navigate);
    e.preventDefault();
  };
  return (
    <div style={{ backgroundColor: "#ABB2B9", margin: "auto" }}>
      <Navigation></Navigation>

      <Row style={{ padding: "1rem" }}>
        <Col xs={12} sm={12} md={6}>
          <img
            style={{ width: "420px", height: "400px" }}
            src={loginpage}
            alt=""
          />
        </Col>
        <Col xs={12} sm={12} md={6}>
          {!isLoading && (
            <Form
              onSubmit={handleRegisterSubmit}
              style={{
                height: "400px",
                width: "420px",
                backgroundColor: "#081B4E ",
              }}
            >
              <h2 style={{ fontSize: "30px", color: "#EA510E" }}>Register</h2>
              <Form.Group className="mb-3">
                <Form.Control
                  style={{ width: "400px", margin: "auto" }}
                  type="text"
                  name="userName"
                  onChange={handleOnChange}
                  placeholder="Your Name"
                />
              </Form.Group>
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
              <Form.Group className="mb-3">
                <Form.Control
                  type="number"
                  name="phoneNumber"
                  onChange={handleOnChange}
                  style={{ width: "400px", margin: "auto" }}
                  placeholder="Phone Number"
                />
              </Form.Group>
              <Button
                variant="primary"
                style={{ width: "400px" }}
                type="submit"
              >
                Submit
              </Button>
              <br />
              <Form.Text className="text-muted" style={{ fontSize: "20px" }}>
                ------------------------OR----------------------
              </Form.Text>
              {/* <Button
                  onClick={handleGoogleSignIn}
                  variant="primary"
                  style={{ width: "400px" }}
                  type="submit"
                >
                  Sign-In-Google
                </Button> */}
              <NavLink style={{ textDecoration: "none" }} to="/login">
                <Button
                  style={{ color: "#EA510E ", fontWeight: 700 }}
                  variant="text"
                >
                  Already Registered? Please Login
                </Button>
              </NavLink>
            </Form>
          )}
          {isLoading && <Spinner animation="border" variant="primary" />}
          {user?.email && (
            <Alert style={{ width: "500px" }} variant="success">
              Registred Successfully
            </Alert>
          )}
          {authError && (
            <Alert style={{ width: "500px" }} variant="warning">
              {authError}
            </Alert>
          )}
        </Col>
      </Row>

      <Footer></Footer>
    </div>
  );
};

export default Register;
