import React from "react";
import Layout from "./components/layout";
import { Switch, Route } from "react-router-dom";
import Home from "./components/pages/home";
import Map from "./components/pages/map";
import "./App.scss";
function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/mapa" component={Map} />
      </Switch>
    </Layout>
  );
}

export default App;
