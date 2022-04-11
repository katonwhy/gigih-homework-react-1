import React from "react";
import './App.css';
import Home from './pages/home/Home.js'
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  )
}

export default App;