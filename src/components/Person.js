import React from "react";
import Species from "./Species";
import Homeworld from "./Homeworld";

const Person = ({ name, species, homeworld }) => {
  return (
    <div>
      <h1 style={{ fontFamily: "STARWARS" }}>{name}</h1>
      <div>
        <Species url={species} />
        <Homeworld url={homeworld} />
      </div>
    </div>
  );
};

export default Person;
