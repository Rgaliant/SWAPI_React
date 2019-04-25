import React, { useState, useEffect } from "react";
import axios from "axios";

const Species = ({ url }) => {
  const [species, setSpecies] = useState({});

  useEffect(() => {
    axios.get(url).then(res => setSpecies({ ...res.data }));
  }, []);

  return <p>Species: {species.name}</p>;
};
export default Species;
