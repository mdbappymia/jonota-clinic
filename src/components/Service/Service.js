import React from "react";
import { Card, Button } from "react-bootstrap";
import "./Service.css";

const Service = ({ service }) => {
  const { name, img, description } = service;
  return (
    <Card className="service-card">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title className="fw-bold text-success">{name}</Card.Title>
        <Card.Text className="text-secondary">
          {description.slice(0, 200)}
        </Card.Text>
        <Button variant="primary">View Services</Button>
      </Card.Body>
    </Card>
  );
};

export default Service;
