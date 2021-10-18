import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useRent from "../../hooks/useRent";
import "./AppBar.css";

const AppBar = () => {
  const { user, logOut } = useRent();
  const avaterPhoto =
    "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png";
  return (
    <Navbar sticky="top" bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Jonota Clinic</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className="nav-link" to="/home">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/specialists">
              Specialist
            </NavLink>
            <NavLink className="nav-link" to="/about">
              About Us
            </NavLink>
            <NavLink className="nav-link" to="/contact">
              Contact Us
            </NavLink>
            {user.email ? (
              <>
                <small className="login-text ">
                  Logged in as{" "}
                  <span className="text-danger">
                    {user.displayName || user.email}
                  </span>
                </small>
                <img
                  className="user-photo"
                  src={user.photoURL || avaterPhoto}
                  alt=""
                />
                <Button onClick={logOut}>Logout</Button>
              </>
            ) : (
              <Link to="/login">
                <Button>Login</Button>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppBar;
