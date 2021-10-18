import React from "react";
import { Card } from "react-bootstrap";
import "./Specialist.css";

const Specialist = ({ specialist }) => {
  console.log(specialist);
  const {
    name,
    Chamber,
    Location,
    Phone,
    Qualification,
    specialOn,
    workPlace,
  } = specialist;
  return (
    <Card>
      <Card.Img
        variant="top"
        src="https://image.freepik.com/free-vector/doctor-icon-avatar-white_136162-58.jpg"
      />
      <Card.Body>
        <Card.Title>Name: {name}</Card.Title>
        <hr />
        <Card.Text>Qualification: {Qualification}</Card.Text>
        <hr />
        <Card.Text>Special On: {specialOn}</Card.Text>
        <hr />
        <Card.Text>Place: {workPlace}</Card.Text>
        <hr />
        <Card.Text>Chamber: {Chamber}</Card.Text>
        <hr />
        <Card.Text>Location: {Location}</Card.Text>
        <hr />
        <Card.Text>Phone: {Phone}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Specialist;
