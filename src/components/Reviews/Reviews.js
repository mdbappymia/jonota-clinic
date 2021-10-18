import React, { useEffect, useState } from "react";
import { Carousel, Container } from "react-bootstrap";
import "./Reviews.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("data/review.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  const review = (
    <>
      <i className="fas fa-star text-warning"></i>
      <i className="fas fa-star text-warning"></i>
      <i className="fas fa-star text-warning"></i>
      <i className="fas fa-star text-warning"></i>
      <i className="fas fa-star text-warning"></i>
    </>
  );
  return (
    <Container className="py-5">
      <h1 className="service-heading text-center pb-5">Patient Reviews</h1>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={reviews[0]?.img}
            alt={reviews[0]?.name}
          />
          <Carousel.Caption>
            <p>Review: {review}</p>
            <h3>
              Patient Name: <span className="fw-bold">{reviews[0]?.name}</span>
            </h3>
            <p>{reviews[0]?.review}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={reviews[1]?.img}
            alt={reviews[1]?.name}
          />
          <Carousel.Caption>
            <p>Review: {review}</p>

            <h3>
              Patient Name: <span className="fw-bold">{reviews[1]?.name}</span>
            </h3>
            <p>{reviews[1]?.review}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={reviews[2]?.img}
            alt={reviews[2]?.name}
          />
          <Carousel.Caption>
            <p>Review: {review}</p>
            <h3>
              Patient Name: <span className="fw-bold">{reviews[2]?.name}</span>
            </h3>
            <p>{reviews[2]?.review}</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Reviews;
