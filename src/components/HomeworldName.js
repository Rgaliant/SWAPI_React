import React, { Component } from "react";
import axios from "axios";

export default class HomeworldName extends Component {
  state = {
    planet: {}
  };
  componentDidMount() {
    const { planet } = this.props;
    axios.get(planet).then(res => {
      this.setState({ planet: res.data });
    });
  }
  render() {
    const { id } = this.props;
    return (
      <>
        <div onClick={() => this.props.history.push(`/planets/${id}`)}>
          <div style={{ color: "blue", cursor: "pointer" }}>
            {this.state.planet.name}
          </div>
        </div>
      </>
    );
  }
}
