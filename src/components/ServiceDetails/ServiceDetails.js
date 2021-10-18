/* eslint-disable eqeqeq */
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";
import "./ServiceDetails.css";

const ServiceDetails = () => {
  const [details, setDetails] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch("/data/fakeDB.json")
      .then((res) => res.json())
      .then((data) => {
        const detailsService = data.filter((service) => service.id == id);
        setDetails(detailsService);
      });
  }, []);
  const { name, img, description, Meet_our_team } = details[0] || {};
  const { Primary_Care, Adolescent_medicine, Immediate_Care } =
    details[0]?.our_services || {};

  return (
    <Container>
      <img className="details-image" src={img} alt="" />
      <h1 className="details-name">{name}</h1>
      <h4 className="fw-bold">About</h4>
      <p>{description} </p>
      <h3 className="text-center fw-bold my-5">Our Services</h3>
      <h5 className="fw-bold mt-4">Primary Care</h5>
      {Primary_Care?.map((item) => (
        <li key={item}>{item} </li>
      ))}
      <h5 className="fw-bold mt-4">Adolescent medicine</h5>
      <p>{Adolescent_medicine}</p>
      <h5 className="fw-bold mt-4">Immediate Care</h5>
      <p>{Immediate_Care}</p>

      <h4 className="fw-bold">Meet Out Team</h4>
      <p>{Meet_our_team} </p>
    </Container>
  );
};

export default ServiceDetails;
