import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import useRent from "../../hooks/useRent";
import "./Login.css";

const Login = () => {
  const {
    signInUsingGoogle,
    handleEmail,
    handlePassword,
    signInUsingEmailAndPassword,
    setError,
    error,
  } = useRent();
  const location = useLocation();
  const history = useHistory();
  const dest_url = location?.state?.from || "/";

  const handleGoogleSignin = () => {
    signInUsingGoogle()
      .then((result) => {
        history.push(dest_url);
      })
      .catch((err) => {
        setError(err.message);
        console.log(err.message);
      });
  };
  const handleSignin = (e) => {
    e.preventDefault();
    signInUsingEmailAndPassword()
      .then((result) => {
        history.push(dest_url);
      })
      .catch((err) => {
        setError(err.message);
        console.log(err.message);
      });
  };
  return (
    <Container>
      <h1 className="service-heading text-center my-5">Please Login</h1>
      {error ? <p className="text-center text-danger">{error}</p> : <></>}
      <Form onSubmit={handleSignin} className="login-form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={handleEmail}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={handlePassword}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Log In
        </Button>
      </Form>
      <div className="text-center">
        <Button onClick={handleGoogleSignin} variant="success fw-bold">
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
