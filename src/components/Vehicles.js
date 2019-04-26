import React, { useState, useEffect } from "react";
import { Segment, Button, Modal } from "semantic-ui-react";
import axios from "axios";
import styled from "styled-components";

const Vehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
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

  return {
    vehicles,
    nextPlPage
  };
};

export default () => {
  const { vehicles, nextPlPage } = Vehicles();
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
      {vehicles.map(s => {
        return (
          <Segment
            style={{ background: "#141414", border: "8px solid yellow" }}
          >
            <PersonModal
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
                    <p>Class: {s.vehicle_class}</p>
                    <p>Cost in Credits: {s.cost_in_credits}</p>
                    <p>Crew: {s.crew}</p>
                    <p>Length: {s.length} Hours</p>
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
