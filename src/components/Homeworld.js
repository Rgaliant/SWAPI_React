import React, { useState, useEffect } from "react";
import axios from "axios";

const Homeworld = ({ url }) => {
  const [homeworld, setHomeworld] = useState({});

  useEffect(() => {
    axios.get(url).then(res => setHomeworld({ ...res.data }));
  }, [url]);

  return (
    <p style={{ fontFamily: "Helvetica", fontWeight: "500" }}>
      Homeworld: {homeworld.name}
    </p>
  );
};
export default Homeworld;
