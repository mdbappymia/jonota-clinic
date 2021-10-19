import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import useRent from "../../hooks/useRent";

const Contact = () => {
  const { user } = useRent();
  return (
    <Container className="my-5">
      <h1 className="service-heading my-5 text-center">Contact Us</h1>
      <Form>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail1">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Your First Name" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail2">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Your Last Name" />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={user.email}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" required placeholder="Your Address" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" required placeholder="Your Phone Number" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Your Message</Form.Label>
          <Form.Control as="textarea" rows={5} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Contact;
