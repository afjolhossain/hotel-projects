import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import hotelLogo from "../../../images/Sylhet.png";

const Navigation = () => {
  const { user, logOut } = useAuth();
  return (
    <Navbar
      style={{ backgroundColor: "#566573" }}
      collapseOnSelect
      expand="lg"
      variant="light"
    >
      <Container>
        <img style={{ width: "80px", height: "50px" }} src={hotelLogo} alt="" />
        <Nav>
          <Navbar.Toggle />
          <Navbar.Collapse>
            {user?.email ? (
              <Button onClick={logOut} variant="secondary">
                LogOut
              </Button>
            ) : (
              <NavLink
                to="/login"
                style={{
                  color: "black",
                  fontSize: "25px",
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
            Signed in as:
            <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
