import React, { Component } from "react";
import Title from "../components/Title";

export default class Home extends Component {
  constructor(){
    super()
    this.state = {
      title: "This is title of home page state",
      description: "this is the description of home page state"
    }
    this.description = "something"
  }
  render() {
    return <div>
        <h1>Inside Home Page</h1>
        <Title title={this.state.title} description={this.description}></Title>
    </div>;
  }
}
