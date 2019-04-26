import React, { useEffect, useState } from "react";
import axios from "axios";
import { Segment, Grid, Button, Modal, Header } from "semantic-ui-react";
import Person from "./Person";
import Planets from "./Planets";
import Starships from "./Starships";
import Vehicles from "./Vehicles";
import styled from "styled-components";

const People = () => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://swapi.co/api/people`).then(res => {
      setPeople(res.data.results);
      setLoading(false);
    });
  }, []);

  const nextPage = () => {
    setPage(page + 1);
    axios.get(`https://swapi.co/api/people?page=${page}`).then(res => {
      setPeople(res.data.results);
    });
  };

  return {
    people,
    loading,
    nextPage
  };
};

export default () => {
  const { people, nextPage, loading } = People();
  return (
    <div>
      <h1
        style={{
          color: "yellow",
          fontFamily: "STARWARS",
          fontSize: "150px",
          textAlign: "center"
        }}
      >
        STAR WARS
      </h1>
      <Grid columns={4}>
        <Grid.Column>
          <Grid.Row>
            <h1 style={{ color: "yellow", fontFamily: "STARWARS" }}>
              Galactic Citizens
            </h1>
            <Button
              onClick={nextPage}
              style={{
                fontFamily: "STARWARS",
                color: "black",
                background: "yellow"
              }}
            >
              More Citizens
            </Button>
            {people.map(p => {
              return (
                <Segment
                  style={{
                    background: "#141414",
                    color: "yellow",
                    border: "8px solid yellow"
                  }}
                >
                  <PersonModal
                    trigger={
                      <Button color="black" style={{ color: "yellow" }}>
                        {p.name}
                      </Button>
                    }
                    size="small"
                    dimmer="inverted"
                  >
                    <Modal.Content>
                      <Modal.Description>
                        <p>
                          <Person
                            name={p.name}
                            species={p.species}
                            homeworld={p.homeworld}
                            birth_year={p.birth_year}
                            height={p.height}
                            starships={p.starships}
                            hair_color={p.hair_color}
                            eye_color={p.eye_color}
                            mass={p.mass}
                          />
                        </p>
                      </Modal.Description>
                    </Modal.Content>
                  </PersonModal>
                </Segment>
              );
            })}
          </Grid.Row>
        </Grid.Column>
        <Grid.Column>
          <Grid.Row>
            <h1 style={{ color: "yellow", fontFamily: "STARWARS" }}>
              Planets of the Galactic Republic
            </h1>
            <Planets />
          </Grid.Row>
        </Grid.Column>
        <Grid.Column>
          <Grid.Row>
            <h1 style={{ color: "yellow", fontFamily: "STARWARS" }}>
              Galactic Starships
            </h1>
            <Starships />
          </Grid.Row>
        </Grid.Column>
        <Grid.Column>
          <Grid.Row>
            <h1 style={{ color: "yellow", fontFamily: "STARWARS" }}>
              Galactic Vehicles
            </h1>
            <Vehicles />
          </Grid.Row>
        </Grid.Column>
      </Grid>
    </div>
  );
};

const PersonModal = styled(Modal)`
  color: black;
  background: black !important;
`;
