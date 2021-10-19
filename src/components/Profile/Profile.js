import React from "react";
import { Container } from "react-bootstrap";
import useRent from "../../hooks/useRent";
import "./Profile.css";

const Profile = () => {
  const { user } = useRent();
  const { displayName, photoURL, email } = user;
  const avatarPhoto =
    "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png";
  console.log(user);
  return (
    <Container className="profile-container">
      <div className="my-5">
        <h2 className="d-inline">Profile Picture:</h2>
        <img className="profile-picture" src={photoURL || avatarPhoto} alt="" />
      </div>
      <h2 className="my-5">
        Name: {displayName || "Name Show only Google Login"}
      </h2>
      <h3>Email: {email}</h3>
    </Container>
  );
};

export default Profile;
