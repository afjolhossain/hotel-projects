import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Navigation.css";

const Navigation = () => {
  const { user, logOut } = useAuth();
  return (
    <Navbar style={{ backgroundColor: "#2f4f4f" }} expand="lg">
      <>
        <Navbar.Brand href="#home" style={{ color: "white", fontSize: "25px" }}>
          Sylhet <span style={{ color: "chocolate" }}>Hotel</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={{ margin: "auto" }}>
            <NavLink className="navigation-Navlink" to="/home">
              Home
            </NavLink>
            <NavLink className="navigation-Navlink" to="/addService">
              Add-Service
            </NavLink>
            <NavLink className="navigation-Navlink" to="/myOrder">
              My-Order
            </NavLink>
            <NavLink className="navigation-Navlink" to="/manageAllOrder">
              Manage-All-Order
            </NavLink>
            <div style={{ margin: "auto" }}>
              {user?.email ? (
                <Button className="loginButton" onClick={logOut}>
                  LogOut
                </Button>
              ) : (
                <NavLink to="/login" className="loginButton">
                  <button
                    className="loginButton"
                    style={{
                      backgroundColor: "#2f4f4f",
                    }}
                  >
                    Login
                  </button>
                </NavLink>
              )}
            </div>

            <Navbar.Text
              style={{ color: "black", fontSize: "25px", fontWeight: "700px" }}
            >
              <a href="#login" style={{ textDecoration: "none" }}>
                {user.displayName}
              </a>
            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </>
    </Navbar>
  );
};

export default Navigation;
