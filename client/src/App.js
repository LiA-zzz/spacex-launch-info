import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import React from "react";
import logo from "./logo.png";
import "./App.css";
import Launches from "./components/launches";
import Launch from "./components/Launch";
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
} from "react-router-dom";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <img
            src={logo}
            alt="SpaceX"
            style={{ width: 300, display: "block", margin: "auto" }}
          ></img>
          <Route exact path="/" component={Launches} />
          <Route exact path="/launch/:flight_number" component={Launch} />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
