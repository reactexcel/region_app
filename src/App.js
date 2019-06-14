import React from "react";
import "./App.css";
import Header from "./components/Header/header";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Options from "./components/Options";
import Region from "./components/Region";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Container>
          <Switch>
            <Route path="/options/region" component={Region} />
            <Route path="/options" component={Options} />
            <Route path="/" component={Login} />
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
