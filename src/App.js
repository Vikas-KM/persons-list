import React, { Component } from "react";
import "./App.css";
import PersonList from "./PersonList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>PERSONS LIST PROJECT</h1>
        <PersonList />
      </div>
    );
  }
}

export default App;
