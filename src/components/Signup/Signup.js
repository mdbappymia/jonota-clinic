import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Container, Form, Button } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import useRent from "../../hooks/useRent";

const Signup = () => {
  const {
    handleEmail,
    handlePassword,
    signUpUsingEmailAndPassword,
    signInUsingGoogle,
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
      .catch((err) => setError(err.message));
  };
  const handleSignup = (e) => {
    e.preventDefault();
    signUpUsingEmailAndPassword()
      .then((result) => {
        history.push(dest_url);
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  return (
    <Container>
      <h1 className="service-heading text-center my-5">Please SignUp</h1>
      {error ? <p className="text-center taxt-danger">{error}</p> : <></>}
      <Form onSubmit={handleSignup} className="login-form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={handleEmail}
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
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
          Sign Up
        </Button>
      </Form>
      <div className="text-center">
        <Button onClick={handleGoogleSignin} variant="success fw-bold">
          <FontAwesomeIcon icon={faGoogle} /> Sign in Google
        </Button>
      </div>
      <p className="my-5 text-center fs-3">
        Already Sign Up? <Link to="/login">Please Login</Link>
      </p>
    </Container>
  );
};

export default Signup;
