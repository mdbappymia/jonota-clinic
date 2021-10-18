import React from "react";
import "./App.css";
import AppBar from "./components/AppBar/AppBar";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import Header from "./components/Header/Header";
import Reviews from "./components/Reviews/Reviews";
import Services from "./components/Services/Services";

const App = () => {
  return (
    <div>
      <AppBar></AppBar>
      <Header></Header>
      <Services></Services>
      <Reviews></Reviews>
      <Gallery></Gallery>
      <Footer></Footer>
    </div>
  );
};

export default App;
