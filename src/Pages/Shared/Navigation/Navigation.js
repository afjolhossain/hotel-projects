import React from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import hotelLogo from "../../../images/Sylhet Hotel.png";

const Navigation = () => {
  const { user, logOut } = useAuth();
  return (
    <Navbar
      style={{ backgroundColor: "#2f4f4f" }}
      variant="light"
      collapseOnSelect
      expand="lg"
    >
      <Container style={{ justifyContent: "between" }}>
        <div>
          <img
            style={{ width: "80px", height: "50px" }}
            src={hotelLogo}
            alt=""
          />
        </div>
        <div>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <NavLink
              style={{
                textDecoration: "none",
                fontSize: "20px",
                marginRight: "1rem",
                color: "white",
              }}
              to="/home"
            >
              Home
            </NavLink>
            <NavLink
              style={{
                textDecoration: "none",
                fontSize: "20px",
                marginRight: "1rem",
                color: "white",
              }}
              to="/addService"
            >
              Add-Service
            </NavLink>
            <NavLink
              style={{
                textDecoration: "none",
                fontSize: "20px",
                marginRight: "1rem",
                color: "white",
              }}
              to="/myOrder"
            >
              My-Order
            </NavLink>
            <NavLink
              style={{
                textDecoration: "none",
                fontSize: "20px",
                marginRight: "1rem",
                color: "white",
              }}
              to="/manageAllOrder"
            >
              Manage-All-Order
            </NavLink>
            {user?.email ? (
              <Button onClick={logOut} variant="secondary">
                LogOut
              </Button>
            ) : (
              <NavLink
                to="/login"
                style={{
                  color: "black",
                  fontSize: "20px",
                  fontWeight: "700px",
                }}
              >
                <Button
                  style={{
                    backgroundColor: "#2f4f4f",
                    fontSize: "20px",
                    marginRight: "1rem",
                    color: "white",
                  }}
                  variant="#2f4f4f"
                >
                  Login
                </Button>
              </NavLink>
            )}
            <Navbar.Text
              style={{ color: "black", fontSize: "25px", fontWeight: "700px" }}
            >
              <a href="#login" style={{ textDecoration: "none" }}>
                {user.displayName}
              </a>
            </Navbar.Text>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};

export default Navigation;
