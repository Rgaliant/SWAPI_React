import React, { useState, useEffect } from "react";
import { Segment } from "semantic-ui-react";
import axios from "axios";

const Planets = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    axios.get("https://swapi.co/api/planets").then(res => {
      setPlanets(res.data.results);
    });
  }, []);

  return (
    <div>
      {planets.map(planet => {
        return (
          <Segment
            style={{ background: "#141414", border: "8px solid yellow" }}
          >
            <div>
              <h1 style={{ fontFamily: "STARWARS", color: "yellow" }}>
                {planet.name}
              </h1>
            </div>
          </Segment>
        );
      })}
    </div>
  );
};

export default Planets;
