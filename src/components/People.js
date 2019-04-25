import React, { useEffect, useState } from "react";
import axios from "axios";
import { Segment, Grid } from "semantic-ui-react";
import Person from "./Person";

const People = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios.get("https://swapi.co/api/people").then(res => {
      setPeople(res.data.results);
    });
  }, []);

  return (
    <div>
      <Grid columns={2}>
        <Grid.Column>
          <Grid.Row>
            <h1 style={{ color: "yellow", fontFamily: "STARWARS" }}>
              Galactic Citizens
            </h1>
            {people.map(p => {
              return (
                <Segment
                  style={{
                    background: "#141414",
                    color: "yellow",
                    border: "2px solid yellow"
                  }}
                >
                  <Person
                    name={p.name}
                    species={p.species}
                    homeworld={p.homeworld}
                  />
                </Segment>
              );
            })}
          </Grid.Row>
        </Grid.Column>
        <Grid.Column>
          <Grid.Row>
            <h1>Planets of the Galactic Republic</h1>
          </Grid.Row>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default People;
