import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import hotelLogo from "../../../images/Sylhet.png";

const Navigation = () => {
  const { user, logOut } = useAuth();
  return (
    <Navbar style={{ backgroundColor: "#AB3A57" }} variant="light">
      <Container>
        <NavLink to="/home">
          <img
            style={{ width: "80px", height: "50px" }}
            src={hotelLogo}
            alt=""
          />
        </NavLink>
        <Nav>
          <Navbar.Toggle collapseOnSelect expand="lg" />
          <Navbar.Collapse>
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
                <Button variant="secondary"> Login</Button>
              </NavLink>
            )}
          </Navbar.Collapse>
          <Navbar.Text
            style={{ color: "black", fontSize: "25px", fontWeight: "700px" }}
          >
            <a href="#login" style={{ textDecoration: "none" }}>
              {user.displayName}
            </a>
          </Navbar.Text>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
