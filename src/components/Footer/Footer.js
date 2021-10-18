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
      <Container>
        <Row>
          <Col>
            <h2 className=" text-light">Address</h2>
            <h4 className="text-secondary">Dhaka - 1205, Bangladesh.</h4>
            <p className="text-secondary">Phone: +8801524586985</p>
            <p className="text-secondary">Email: jonota@clinic.bd</p>
          </Col>
          <Col className="social">
            <h2 className="text-light">Our Social Links</h2>
            <li>
              <a
                className="fs-5 social-link-a my-2"
                href="https://www.facebook.com"
              >
                <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon> Facebook
              </a>
            </li>
            <li>
              <a
                className="fs-5 social-link-a my-2"
                href="https://www.facebook.com"
              >
                <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon> Instagram
              </a>
            </li>
            <li>
              <a
                className="fs-5 social-link-a my-2"
                href="https://www.facebook.com"
              >
                <FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon> Whatsapp
              </a>
            </li>
            <li>
              <a
                className="fs-5 social-link-a my-2"
                href="https://www.facebook.com"
              >
                <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon> Youtube
              </a>
            </li>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
