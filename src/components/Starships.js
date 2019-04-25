import React, { useState, useEffect } from "react";
import axios from "axios";

const Starships = ({ url }) => {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    url.map(url =>
      axios.get(url).then(res => setStarships(starships, { ...res.data }))
    );
  }, []);

  return (
    <>
      {starships.map(s => {
        return <p>Starships: </p>;
      })}
    </>
  );
};
export default Starships;
