import React from "react";
import './App.css';
import Home from './pages/home/Home'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/create-playlist">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;