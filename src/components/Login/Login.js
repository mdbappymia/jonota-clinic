import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import useRent from "../../hooks/useRent";
import "./Login.css";

const Login = () => {
  const { signInUsingGoogle } = useRent();
  return (
    <Container>
      <h1 className="service-heading text-center my-5">Please Login</h1>
      <Form className="login-form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Log In
        </Button>
      </Form>
      <div className="text-center">
        <Button onClick={signInUsingGoogle} variant="success fw-bold">
          <FontAwesomeIcon icon={faGoogle} /> Sign in Google
        </Button>
      </div>
      <p className="my-5 text-center fs-3">
        New User? <Link to="/signup">Sign Up</Link>
      </p>
    </Container>
  );
};

export default Login;
