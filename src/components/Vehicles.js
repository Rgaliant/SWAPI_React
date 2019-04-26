import React, { useState, useEffect } from "react";
import { Button, Modal } from "semantic-ui-react";
import axios from "axios";

const Vehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  const [page, setPage] = useState();

  useEffect(() => {
    setPage(2);
    axios.get("https://swapi.co/api/vehicles").then(res => {
      setVehicles(res.data.results);
    });
  }, []);

  const nextPlPage = () => {
    setPage(page + 1);
    axios.get(`https://swapi.co/api/vehicles?page=${page}`).then(res => {
      setVehicles(res.data.results);
    });
  };

  const resetPage = () => {
    setPage(1);
    axios.get(`https://swapi.co/api/vehicles?page=${page}`).then(res => {
      setVehicles(res.data.results);
    });
  };

  return {
    vehicles,
    nextPlPage,
    resetPage
  };
};

export default () => {
  const { vehicles, nextPlPage, resetPage } = Vehicles();
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
        {" "}
        More Vehicles{" "}
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
      {vehicles.map(s => {
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
                  {s.name}
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
                  <h1 style={{ fontFamily: "STARWARS" }}>{s.name}</h1>
                  <p>Model: {s.model}</p>
                  <p>Class: {s.vehicle_class}</p>
                  <p>Cost in Credits: {s.cost_in_credits}</p>
                  <p>Crew: {s.crew}</p>
                  <p>Length: {s.length}</p>
                </div>
              </Modal.Description>
            </Modal.Content>
          </Modal>
        );
      })}
    </div>
  );
};
