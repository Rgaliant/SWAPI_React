import React from "react";
import Species from "./Species";
import Homeworld from "./Homeworld";
import Starships from "./Starships";

const Person = ({ name, species, homeworld, starships }) => {
  return (
    <div>
      <h1 style={{ fontFamily: "STARWARS" }}>{name}</h1>
      <div>
        <Species url={species} />
        <Homeworld url={homeworld} />
        <Starships url={starships} />
      </div>
    </div>
  );
};

export default Person;
