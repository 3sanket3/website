import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "@material-ui/core/Button";
import { Header } from "./components/Header";


class App extends Component {
  render() {
    return (
      <Header/>
    );
  }
}

export default App;
