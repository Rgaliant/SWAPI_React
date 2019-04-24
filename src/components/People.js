import React, { Component } from "react";
import axios from "axios";
import List from "../components/List";
import Planets from "../components/Planets";
import { Table, Segment, Grid } from "semantic-ui-react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      planets: [],
      homeworld: []
    };

    this.getPeople = this.getPeople.bind(this);
    this.getPlanets = this.getPlanets.bind(this);
  }

  getPeople() {
    return axios.get("https://swapi.co/api/people").then(res => {
      console.log(res.data.results);
      this.setState({ people: res.data.results });
      axios.get("https://swapi.co/api/planets").then(res => {
        console.log(res.data.results);
        this.setState({ homeworld: res.data.results });
      });
    });
  }

  getPlanets() {
    return axios.get("https://swapi.co/api/planets").then(res => {
      console.log(res.data.results);
      this.setState({ planets: res.data.results });
    });
  }

  componentDidMount() {
    this.getPeople();
    this.getPlanets();
  }

  render() {
    const { people, planets, homeworld } = this.state;
    return (
      <div>
        <Grid columns={2}>
          <Grid.Column>
            <Grid.Row>
              <h1>Galactic Citizens</h1>
              <List people={people} homeworld={homeworld} />
            </Grid.Row>
          </Grid.Column>
          <Grid.Column>
            <Grid.Row>
              <h1>Planets of the Galactic Republic</h1>
              <Planets planets={planets} />
            </Grid.Row>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
