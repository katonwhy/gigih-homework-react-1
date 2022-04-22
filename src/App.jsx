import React from "react";
import './App.css';
import Home from './pages/home/Home'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Playlist from "./components/playlist";
import AuthRoute from "./components/authRoute";
import Login from "./pages/login/index";


const App = () => {
  return (
    <Router>
      <Switch>
        <AuthRoute path="/create-playlist" type="private" exact>
          <Home/>
        </AuthRoute>
        <AuthRoute path="/" type="guest" exact>
          <Login/>
        </AuthRoute>
      </Switch>
          
    </Router>
  )
}

export default App;