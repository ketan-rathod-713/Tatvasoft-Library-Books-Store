import React, { Component } from "react";
import Title from "../components/Title";

export default class Home extends Component {
  render() {
    return <div>
        <h1>Inside Home Page</h1>
        <Title title="This is props title"></Title>
    </div>;
  }
}
