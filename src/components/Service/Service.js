import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { id, name, img, description } = service;
  console.log(id);
  return (
    <Card className="service-card">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title className="fw-bold text-success">{name}</Card.Title>
        <Card.Text className="text-secondary">
          {description.slice(0, 200)}
        </Card.Text>
        <Link to={`/servicedetails/${id}`}>
          <Button variant="primary">View Services</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Service;
