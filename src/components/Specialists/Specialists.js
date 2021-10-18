import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import useRent from "../../hooks/useRent";
import Specialist from "../Specialist/Specialist";
import "./Specialists.css";

const Specialists = () => {
  const { specialists } = useRent();
  return (
    <Container className="my-5">
      <h1 className="service-heading text-center my-5">Our Specialists</h1>
      <div className="specialists-container">
        {specialists.map((specialist) => (
          <Specialist
            key={specialist.name}
            specialist={specialist}
          ></Specialist>
        ))}
      </div>
    </Container>
  );
};

export default Specialists;
