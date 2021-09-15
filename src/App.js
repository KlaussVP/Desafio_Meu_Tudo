import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { DataProvider } from "./contexts/DataContext";
import AppBar from "./components/AppBar";
import Home from "./pages/Home";

export default function App() {
  return (
    <DataProvider>
      <Router>
        <AppBar />
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/values" exact>
            <></>
          </Route>
          <Route path="/period" exact>
            <></>
          </Route>
          <Route path="/result" exact>
            <></>
          </Route>
        </Switch>
      </Router>
    </DataProvider>
  );
}