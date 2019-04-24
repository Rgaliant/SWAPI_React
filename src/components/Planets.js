import React, { Component } from "react";
import { Table, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class Planets extends Component {
  render() {
    const planets = this.props.planets;
    return (
      <div>
        {planets.map(planet => {
          return (
            <Segment key={planet.id}>
              <Link to="/">
                <h4>{planet.name}</h4>
              </Link>
              <p>Climate: {planet.climate}</p>
              <p>Gravity: {planet.gravity}</p>
              <p>Population: {planet.population}</p>
              <p>Terrain: {planet.terrain}</p>
            </Segment>
          );
        })}
      </div>
    );
  }
}
