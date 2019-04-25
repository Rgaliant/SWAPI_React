import React, { Component } from "react";
import "../App.css";
import People from "./People";

const Home = () => (
  <>
    <div style={{ background: "#141414", color: "#f5f5f5" }}>
      <h1>StarTours</h1>
      <People />
    </div>
  </>
);

export default Home;
