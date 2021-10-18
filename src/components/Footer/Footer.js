/* eslint-disable react/jsx-no-target-blank */
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Footer.css";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="bg-dark">
      <Container className="py-5">
        <Row>
          <Col lg={4}>
            <h2 className=" text-light">Address</h2>
            <hr className="bg-light" />
            <h4 className="text-secondary">Dhaka - 1205, Bangladesh.</h4>
            <p className="text-secondary">Phone: +8801524586985</p>
            <p className="text-secondary">Email: jonota@clinic.bd</p>
          </Col>
          <Col lg={4} className="social">
            <h2 className="text-light">Our Social Links</h2>
            <hr className="bg-light" />
            <li>
              <a
                target="_blank"
                className="fs-5 social-link-a my-2"
                href="https://www.facebook.com"
              >
                <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon> Facebook
              </a>
            </li>
            <li>
              <a
                target="_blank"
                className="fs-5 social-link-a my-2"
                href="https://www.facebook.com"
              >
                <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon> Instagram
              </a>
            </li>
            <li>
              <a
                target="_blank"
                className="fs-5 social-link-a my-2"
                href="https://www.facebook.com"
              >
                <FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon> Whatsapp
              </a>
            </li>
            <li>
              <a
                target="_blank"
                className="fs-5 social-link-a my-2"
                href="https://www.facebook.com"
              >
                <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon> Youtube
              </a>
            </li>
          </Col>
          <Col lg={4} className="mt-4 pt-3">
            <hr className="bg-light" />
            <p className="mt-3">
              <a target="_blank" className="text-decoration-none" href="/">
                Terms of service
              </a>
            </p>
            <p>
              <a target="_blank" className="text-decoration-none" href="/">
                Privecy & policy
              </a>
            </p>
            <p>
              <a target="_blank" className="text-decoration-none" href="/">
                License
              </a>
            </p>
          </Col>
        </Row>
        <p className="text-center text-light mt-5">
          Copyright &copy; 2021 All right received
        </p>
      </Container>
    </div>
  );
};

export default Footer;
