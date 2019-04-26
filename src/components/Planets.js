import React, { useState, useEffect } from "react";
import { Button, Modal } from "semantic-ui-react";
import axios from "axios";

const Planets = () => {
  const [planets, setPlanets] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(2);
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

  const resetPage = () => {
    setPage(1);
    axios.get(`https://swapi.co/api/planets?page=${page}`).then(res => {
      setPlanets(res.data.results);
    });
  };

  return {
    planets,
    nextPlPage,
    resetPage
  };
};

export default () => {
  const { planets, nextPlPage, resetPage } = Planets();
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
        More Planets
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
      {planets.map(planet => {
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
                    background: "#141414",
                    color: "#fff",
                    fontSize: "2em"
                  }}
                >
                  {planet.name}
                </Button>
                <br />
                <br />
              </div>
            }
            size="small"
            basic
            dimmer="inverted"
          >
            <Modal.Content>
              <Modal.Description>
                <div
                  style={{
                    background: "#fff",
                    padding: "20px",
                    borderRadius: "4%"
                  }}
                >
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
          </Modal>
        );
      })}
    </div>
  );
};
