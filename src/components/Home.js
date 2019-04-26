import React from "react";
import "../App.css";
import People from "./People";
import DarkModeToggle from "../DarkModeToggle";

const Home = () => (
  <>
    <div>
      <DarkModeToggle />
    </div>
    <div>
      <People />
    </div>
  </>
);

export default Home;
