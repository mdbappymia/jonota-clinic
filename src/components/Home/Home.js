import React from "react";
import Gallery from "../Gallery/Gallery";
import Header from "../Header/Header";
import Reviews from "../Reviews/Reviews";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Services></Services>
      <Reviews></Reviews>
      <Gallery></Gallery>
    </div>
  );
};

export default Home;
