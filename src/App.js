import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import "./App.css";

const Hats = () => <h1>hats</h1>;

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        {/* Switch render the 1st maching path */}
        <Route path="/hats" component={Hats} />
      </Switch>
    </div>
  );
}

export default App;
