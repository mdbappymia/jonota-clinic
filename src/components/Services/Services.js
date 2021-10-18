import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/data/fakeDB.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <Container>
      <h1 className="text-center service-heading my-5">Our Services</h1>
      <div className="services-container">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </Container>
  );
};

export default Services;
