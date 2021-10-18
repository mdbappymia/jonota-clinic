import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import AppBar from "./components/AppBar/AppBar";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import ServiceDetails from "./components/ServiceDetails/ServiceDetails";
import Signup from "./components/Signup/Signup";
import Specialists from "./components/Specialists/Specialists";
import AllProvider from "./contexts/AllProvider";

const App = () => {
  return (
    <AllProvider>
      <BrowserRouter>
        <AppBar></AppBar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/specialists">
            <Specialists></Specialists>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signup">
            <Signup></Signup>
          </Route>
          <Route path="/servicedetails/:id">
            <ServiceDetails></ServiceDetails>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AllProvider>
  );
};

export default App;
