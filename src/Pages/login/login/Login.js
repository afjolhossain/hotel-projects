import React, { useState } from "react";
import { Alert, Button, Container, Form, Row, Spinner } from "react-bootstrap";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Navigation from "../../Shared/Navigation/Navigation";
import Footer from "../../Shared/footer/Footer";
import { FaUserCircle } from "react-icons/fa";

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
  const handleGoogleSignIn = () => {
    signInGoogle(location, navigate);
  };
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password);
    e.preventDefault();
  };
  return (
    <div style={{ margin: "auto", backgroundColor: "#424949" }}>
      <Navigation></Navigation>
      <Container style={{ padding: "1rem" }}>
        {!isLoading && (
          <Form
            onSubmit={handleLoginSubmit}
            style={{
              width: "400px",
              height: "450px",
              borderRadius: "10px",
              margin: "0 auto",
              backgroundColor: "#FBFCFC ",
            }}
          >
            <br />
            <h3
              style={{
                fontSize: "25px",
              }}
            >
              Sylhet <span style={{ color: "chocolate" }}>Hotel</span>
            </h3>
            <FaUserCircle style={{ fontSize: "40px" }}></FaUserCircle>
            <br />
            <br />
            <Form.Group className="mb-3">
              <Form.Control
                style={{ width: "350px", height: "50px", margin: "auto" }}
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
                style={{
                  width: "350px",
                  margin: "auto",
                  height: "50px",
                }}
                placeholder="Password"
              />
            </Form.Group>
            <Button
              style={{
                width: "350px",
                height: "50px",
                backgroundColor: "#422930",
              }}
              type="submit"
            >
              Login
            </Button>
            <br />
            <Form.Text className="text-muted" style={{ fontSize: "20px" }}>
              --------------------OR------------------
            </Form.Text>
            <Button
              onClick={handleGoogleSignIn}
              style={{
                width: "350px",
                height: "50px",
                backgroundColor: "#422930",
              }}
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
          <Alert
            style={{ width: "350px", height: "50px", margin: "auto" }}
            variant="success"
          >
            Logged Successfully.
          </Alert>
        )}
        {authError && (
          <Alert
            style={{ width: "350px", height: "50px", margin: "auto" }}
            variant="warning"
          >
            {authError}
          </Alert>
        )}
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Login;
