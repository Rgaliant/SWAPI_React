import React, { useState, useEffect } from "react";
import { Segment, Button, Modal } from "semantic-ui-react";
import axios from "axios";
import styled from "styled-components";

const Starships = () => {
  const [starships, setStarships] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(2);
    axios.get("https://swapi.co/api/starships").then(res => {
      setStarships(res.data.results);
    });
  }, []);

  const nextPlPage = () => {
    setPage(page + 1);
    axios.get(`https://swapi.co/api/starships?page=${page}`).then(res => {
      setStarships(res.data.results);
    });
  };

  return {
    starships,
    nextPlPage
  };
};

export default () => {
  const { starships, nextPlPage } = Starships();
  return (
    <div>
      <Button
        onClick={nextPlPage}
        style={{
          fontFamily: "STARWARS",
          color: "black",
          background: "yellow"
        }}
      >
        More Ships
      </Button>
      {starships.map(s => {
        return (
          <Segment
            style={{ background: "#141414", border: "8px solid yellow" }}
          >
            <Modal
              trigger={
                <Button color="black" style={{ color: "yellow" }}>
                  {s.name}
                </Button>
              }
              size="small"
              dimmer="inverted"
            >
              <Modal.Content>
                <Modal.Description>
                  <div>
                    <h1 style={{ fontFamily: "STARWARS" }}>{s.name}</h1>
                    <p>Model: {s.model}</p>
                    <p>Class: {s.class}</p>
                    <p>Cost in Credits: {s.cost_in_credits}</p>
                    <p>Crew: {s.crew}</p>
                    <p>Length: {s.length} Hours</p>
                    <p>HyperDrive Rating: {s.hyperdrive_rating} Days</p>
                  </div>
                </Modal.Description>
              </Modal.Content>
            </Modal>
          </Segment>
        );
      })}
    </div>
  );
};
