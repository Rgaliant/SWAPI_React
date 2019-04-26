import React from "react";
import Species from "./Species";
import Homeworld from "./Homeworld";
import Starships from "./Starships";
import { Grid } from "semantic-ui-react";

const Person = ({
  name,
  species,
  homeworld,
  starships,
  height,
  hair_color,
  eye_color,
  mass,
  birth_year
}) => {
  return (
    <div>
      <h1 style={{ fontFamily: "STARWARS" }}>{name}</h1>
      <div>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Species url={species} />
              <Homeworld url={homeworld} />
              {/* <Starships url={starships} /> */}
              <p>Birth Year: {birth_year}</p>
              <p>Height: {height}</p>
              <p>Hair Color: {hair_color}</p>
              <p>Eye Color: {eye_color}</p>
              <p>Mass: {mass}</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  );
};

export default Person;
