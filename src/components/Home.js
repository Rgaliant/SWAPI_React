import React, { Component } from "react";
import People from "../components/People";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>StarTours</h1>
        <People />
      </div>
    );
  }
}
