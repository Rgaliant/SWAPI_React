import React, { useState, useEffect } from "react";
import { Segment, Button, Modal } from "semantic-ui-react";
import axios from "axios";
import styled from "styled-components";

const Planets = () => {
  const [planets, setPlanets] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios.get("https://swapi.co/api/planets").then(res => {
      setPlanets(res.data.results);
    });
  }, []);

  const nextPlPage = () => {
    setPage(page + 1);
    axios.get(`https://swapi.co/api/planets?page=${page}`).then(res => {
      setPlanets(res.data.results);
    });
  };

  return {
    planets,
    nextPlPage
  };
};

export default () => {
  const { planets, nextPlPage } = Planets();
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
        More Planets
      </Button>
      {planets.map(planet => {
        return (
          <Segment
            style={{ background: "#141414", border: "8px solid yellow" }}
          >
            <PersonModal
              trigger={
                <Button color="black" style={{ color: "yellow" }}>
                  {planet.name}
                </Button>
              }
              size="small"
              dimmer="inverted"
            >
              <Modal.Content>
                <Modal.Description>
                  <div>
                    <h1 style={{ fontFamily: "STARWARS" }}>{planet.name}</h1>
                    <p>Population: {planet.population}</p>
                    <p>Climate: {planet.climate}</p>
                    <p>Diameter: {planet.diameter}</p>
                    <p>Terrain: {planet.terrain}</p>
                    <p>Length of Day: {planet.rotation_period} Hours</p>
                    <p>Length of Year: {planet.orbital_period} Days</p>
                  </div>
                </Modal.Description>
              </Modal.Content>
            </PersonModal>
          </Segment>
        );
      })}
    </div>
  );
};

const PersonModal = styled(Modal)`
  color: black;
  background: black !important;
`;
