import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { DataProvider } from "./contexts/DataContext";
import AppBar from "./components/AppBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Values from "./pages/Values";
import Period from "./pages/Period";
import Result from "./pages/Result";

export default function App() {
  return (
    <DataProvider>
      <Router>
        <AppBar />
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/values" component={Values} exact />
          <Route path="/period" component={Period} exact />
          <Route path="/result" component={Result} exact />
        </Switch>
        <Footer />
      </Router>
    </DataProvider>
  );
}