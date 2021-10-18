import React from "react";
import { Container } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <div className="banner py-5">
      <Container className="my-5 py-5">
        <h1 className="header-heading">Jonota clinic</h1>
        <h4>A special care for poor and homeless people</h4>
      </Container>
    </div>
  );
};

export default Header;
