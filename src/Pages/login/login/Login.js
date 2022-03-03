import React, { useState } from "react";
import { Alert, Button, Col, Form, Row, Spinner } from "react-bootstrap";
import loginpage from "../../../images/banner-4.jpg";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Navigation from "../../Shared/Navigation/Navigation";
import Footer from "../../Shared/footer/Footer";

const Login = () => {
  const [loginData, setLoginData] = useState({});

  const { loginUser, isLoading, user, authError, signInGoogle } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLogInData = { ...loginData };
    newLogInData[field] = value;
    setLoginData(newLogInData);
  };
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, navigate);
    e.preventDefault();
  };
  return (
    <div
      style={{ margin: "auto", backgroundColor: "#85929E", height: "600px" }}
    >
      <Navigation></Navigation>
      <Row style={{ marginTop: "1rem", marginBottom: "4rem" }}>
        <Col sm={12} md={6}>
          <img
            style={{ width: "450px", height: "400px" }}
            src={loginpage}
            alt=""
          />
        </Col>
        <Col sm={12} md={6}>
          {!isLoading && (
            <Form
              onSubmit={handleLoginSubmit}
              style={{
                width: "450px",
                height: "400px",
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
                onClick={signInGoogle}
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
            <Alert style={{ width: "440px" }} variant="success">
              Logged Successfully.
            </Alert>
          )}
          {authError && (
            <Alert style={{ width: "450px" }} variant="warning">
              {authError}
            </Alert>
          )}
        </Col>
      </Row>
      <Footer></Footer>
    </div>
  );
};

export default Login;
