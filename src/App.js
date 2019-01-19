import React, { Component } from "react";
import "./App.scss";

import Hamburger from "./components/header/Hamburger";
import BoxscoreCarousel from './components/header/BoxscoreCarousel'
import CanvasMenu from './components/convas menu/CanvasMenu'

class App extends Component {
  render() {
    return (
      <div>
        <Hamburger />
        <BoxscoreCarousel />
        <CanvasMenu />
      </div>
    );
  }
}

export default App;
