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

  const resetPage = () => {
    setPage(1);
    axios.get(`https://swapi.co/api/starships?page=${page}`).then(res => {
      setStarships(res.data.results);
    });
  };

  return {
    starships,
    nextPlPage,
    resetPage
  };
};

export default () => {
  const { starships, nextPlPage, resetPage } = Starships();
  return (
    <div>
      <Button
        onClick={nextPlPage}
        style={{
          fontFamily: "STARWARS",
          color: "black",
          background: "white"
        }}
      >
        More Ships
      </Button>
      <Button
        onClick={resetPage}
        style={{
          fontFamily: "STARWARS",
          color: "white",
          background: "black"
        }}
      >
        Reset
      </Button>
      {starships.map(s => {
        return (
          <Modal
            trigger={
              <div>
                <br />
                <Button
                  style={{
                    fontFamily: "STARWARS",
                    height: "90%",
                    width: "100%",
                    padding: "1em",
                    background: "#fff",
                    color: "#141414",
                    fontSize: "2em"
                  }}
                >
                  {s.name}
                </Button>
                <br />
                <br />
              </div>
            }
            size="small"
            basic
          >
            <Modal.Content>
              <Modal.Description>
                <div
                  style={{
                    background: "#141414",
                    padding: "80px",
                    borderRadius: "4%"
                  }}
                >
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
        );
      })}
    </div>
  );
};
