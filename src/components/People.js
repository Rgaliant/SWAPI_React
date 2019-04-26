import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Button, Modal } from "semantic-ui-react";
import Person from "./Person";
import Planets from "./Planets";
import Starships from "./Starships";
import Vehicles from "./Vehicles";

const People = () => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    setPage(2);
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

  const resetPage = () => {
    setPage(1);
    axios.get(`https://swapi.co/api/people?page=${page}`).then(res => {
      setPeople(res.data.results);
    });
  };

  return {
    people,
    loading,
    nextPage,
    resetPage
  };
};

export default () => {
  const { people, nextPage, resetPage } = People();
  return (
    <div>
      <h1
        style={{
          fontFamily: "STARWARS",
          fontSize: "7em",
          textAlign: "center"
        }}
      >
        STAR WARS
      </h1>
      <Grid stackable columns={4}>
        <Grid.Column>
          <Grid.Row>
            <h1 style={{ fontFamily: "STARWARS" }}>Galactic Citizens</h1>
            <Button
              onClick={nextPage}
              style={{
                fontFamily: "STARWARS",
                color: "black",
                background: "white"
              }}
            >
              More Citizens
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
            {people.map(p => {
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
                        {p.name}
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
                </Modal>
              );
            })}
          </Grid.Row>
        </Grid.Column>
        <Grid.Column>
          <Grid.Row>
            <h1 style={{ fontFamily: "STARWARS" }}>Galactic Planets</h1>
            <Planets />
          </Grid.Row>
        </Grid.Column>
        <Grid.Column>
          <Grid.Row>
            <h1 style={{ fontFamily: "STARWARS" }}>Galactic Starships</h1>
            <Starships />
          </Grid.Row>
        </Grid.Column>
        <Grid.Column>
          <Grid.Row>
            <h1 style={{ fontFamily: "STARWARS" }}>Galactic Vehicles</h1>
            <Vehicles />
          </Grid.Row>
        </Grid.Column>
      </Grid>
    </div>
  );
};
