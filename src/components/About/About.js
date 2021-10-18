import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="py-5">
            <h1 className="service-heading text-center my-5">About Us</h1>

            <h4 className="fw-bold">The Advantages Of A Medical Clinic</h4>
            <p>
              A Medical Clinic is a primary healthcare facility which provides
              medical assistance to anyone who needs it. Medical clinics were
              originally made for people who didn’t have insurance as their
              services are comparatively less expensive than conventional
              Emergency rooms. But today Medical clinics have become an
              ingrained part of our society, and we can’t imagine our lives
              without access to a medical clinic.
            </p>
            <br />
            <p>
              Not every medical emergency requires an ER; small bruises could be
              looked well at Medical clinics. Earlier, these medical clinics
              didn’t have as much equipment and resources compared to ERs, but
              with time their role and significance grew, and today, they offer
              the same high-quality services as ERs.
            </p>
            <br />
            <p>
              In many ways, Medical Clinics are better than conventional
              Emergency rooms, below are a few advantages of medical clinics
            </p>
            <h4 className="fw-bold">Immediate Assistance</h4>
            <p>
              The primary purpose of medical clinics is to provide urgent
              medical attention to people who need it. Accidents don’t happen
              when it’s convenient for us, that’s why Medical clinics always
              keep their doors open for patients who need to be looked after.
            </p>
            <p>
              A medical clinic almost has everything that an ER does, but the
              services they offer are less expensive because these clinics were
              built with the idea in mind that medical attention should be
              provided to everyone who needs it. Whether you have insurance, or
              you don’t, medical clinics will do everything they can to treat
              you effectively.
            </p>
            <h4 className="fw-bold">Experienced Staff</h4>
            <p>
              Make no mistake, medical clinics today have some of the most
              experienced medical staff on board that includes doctors, nurses,
              physical therapist, dietitians and even specialists. They are
              committed to providing you exceptional primary care services so
              you could have a speedy recovery.
            </p>
            <h4 className="fw-bold">Ideal For Preventive Care</h4>
            <p>
              We usually tend to ignore a few sneezes and coughs, but if they’re
              looked at an early stage, then you could avoid something serious
              and riskier, like a viral infection or disease. We don’t give much
              importance when different parts of our body ache, like back, legs,
              shoulders or stomach, the average American tries to tough it out.
              We avoid going to ERs and hospitals because of the hefty medical
              charges, but medical clinics are the place where you could
              everything checked in the lowest possible cost, which makes it
              ideal for preventive care.
            </p>
            <h4 className="fw-bold">Effective Disease Management</h4>
            <p>
              Having a face to face connection with patients also has a part to
              play in their recovery. The staff present at medical clinics not
              only treat patients, but they also counsel them on exercise, diet
              and benefits of the medication. Patients who are chronically ill
              receive the preventive care they need. This allows for better
              disease management and control. If you’re looking for primary
              medical care services in Dallas, then head over to Medicos family
              Medical Clinic where you will be looked at by experienced
              physicians known for accurate diagnosis and effective treatment.
            </p>
            <h4 className="fw-bold">Effective Disease Management</h4>
          </div>
        </Col>
        <Col className="d-none d-lg-block mt-5 pt-5">
          <img
            className="w-100 mt-5 pt-5"
            src="https://static.wixstatic.com/media/d3e0b0_9f28a3a0d9704bb79e9362ed120dafef~mv2.jpg/v1/fill/w_640,h_600,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01/d3e0b0_9f28a3a0d9704bb79e9362ed120dafef~mv2.webp"
            alt=""
          />
          <img
            className="w-100 mt-2"
            src="https://clinics.nova.edu/_images/iStock-6822688261.jpg"
            alt=""
          />
          <img
            className="w-100 mt-2"
            src="https://3ibvlo49rlhth5vzw4y0thtr-wpengine.netdna-ssl.com/wp-content/uploads/2018/04/day-in-life-healthcare-employee-824x1024.jpg"
            alt=""
          />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
