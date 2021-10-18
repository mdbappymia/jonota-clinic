import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
const NotFoundPage = () => {
  return (
    <div>
      <img
        className="mx-auto d-block w-50"
        src="https://i.pinimg.com/originals/0e/c0/db/0ec0dbf1e9a008acb9955d3246970e15.gif"
        alt=""
      />
      <div className="text-center my-5">
        <Link to="/">
          <Button>Back to Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
