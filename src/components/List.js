import React, { Component } from "react";
import HomeworldName from "../components/HomeworldName";
import { Table, Segment } from "semantic-ui-react";

export default class List extends Component {
  render() {
    const people = this.props.people;
    const homeworld = this.props.homeworld;
    return (
      <>
        {people.map(person => {
          return (
            <Segment key={person.id}>
              <h4>{person.name}</h4>
              <p>Birth Year: {person.birth_year}</p>
              <p>
                HomeWorld:{" "}
                <HomeworldName history={this.props.history} person={person} />
              </p>
            </Segment>
          );
        })}
      </>
    );
  }
}
