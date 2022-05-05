import React, { useState } from "react";
import { Alert, Button, Container, Form, Spinner } from "react-bootstrap";
import Navigation from "../../Shared/Navigation/Navigation";
import Footer from "../../Shared/footer/Footer";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { FaUserCircle } from "react-icons/fa";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const { registerUser, isLoading, user, authError, signInGoogle } = useAuth();

  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInGoogle(navigate);
  };

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLogInData = { ...loginData };
    newLogInData[field] = value;
    setLoginData(newLogInData);
  };
  const handleRegisterSubmit = (e) => {
    registerUser(loginData.email, loginData.password, loginData.name, navigate);
    e.preventDefault();
  };
  return (
    <div style={{ backgroundColor: "#707B7C", margin: "auto" }}>
      <Navigation></Navigation>

      <Container style={{ padding: "1rem" }}>
        {!isLoading && (
          <Form
            onSubmit={handleRegisterSubmit}
            style={{
              height: "500px",
              width: "400px",
              margin: "0 auto",
              backgroundColor: "#D0D3D4",
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
                style={{ width: "350px", margin: "auto", height: "50px" }}
                type="text"
                name="name"
                onChange={handleOnChange}
                placeholder="Your Name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                style={{ width: "350px", margin: "auto", height: "50px" }}
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
                style={{ width: "350px", margin: "auto", height: "50px" }}
                placeholder="Password"
              />
            </Form.Group>
            {/* <Form.Group className="mb-3">
              <Form.Control
                type="number"
                name="phoneNumber"
                onChange={handleOnChange}
                style={{ width: "350px", margin: "auto", height: "50px" }}
                placeholder="Phone Number"
              />
            </Form.Group> */}
            <Button
              variant="primary"
              style={{
                width: "350px",
                height: "50px",
                backgroundColor: "#230209 ",
              }}
              type="submit"
            >
              Register
            </Button>
            <br />
            <Form.Text className="text-muted" style={{ fontSize: "20px" }}>
              -------------------OR------------------
            </Form.Text>
            <Button
              onClick={handleGoogleSignIn}
              variant="primary"
              style={{
                width: "350px",
                height: "50px",
                backgroundColor: "#230209 ",
              }}
              type="submit"
            >
              Sign-In-Google
            </Button>
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
        {authError && (
          <Alert
            variant="warning"
            style={{
              width: "350px",
              height: "50px",
              margin: "auto",
            }}
          >
            {authError}
          </Alert>
        )}
        {isLoading && (
          <Spinner
            animation="border"
            variant="primary"
            style={{
              margin: "auto",
            }}
          />
        )}
        {user?.email && (
          <Alert
            variant="success"
            style={{
              width: "350px",
              height: "50px",
              margin: "auto",
            }}
          >
            Registred Successfully
          </Alert>
        )}
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Register;
