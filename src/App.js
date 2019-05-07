import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Main from "./components/main";
import { BrowserRouter as Router } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
        <NavBar/>
        <Main/>
       </Router>
    );
  }
}
export default App;
