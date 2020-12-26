import React from "react";
import "./App.css";
import BottomNavbar from "./components/BottomNavbar";
import Courses from "./components/Courses";
import Footer from "./components/Footer";
import Home from "./components/Home";
import LiveSession from "./components/livesessions/LiveSession";
import TodaySession from "./components/livesessions/TodaySession";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Staf from "./components/Staf";
import StartClass from "./components/StartClass";

function App() {
  return (
    <>
    <div className="container">
      <Navbar />
      <Home />
      <Courses />
      <LiveSession />
      <hr/>
      <Services />
      <hr />
      <TodaySession />
      <hr />
      <Staf />
      <hr />
      <StartClass />
      <hr />
      <Footer />
      <hr />
    </div>
    <div className="container-fluid">
      <BottomNavbar />
    </div>
    </>
  );
}

export default App;
