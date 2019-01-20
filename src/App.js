import React, { Component } from "react";
import "./App.scss";
import MainSlider from "./components/main/MainSlider";

import Hamburger from "./components/header/Hamburger";
import BoxscoreCarousel from "./components/header/BoxscoreCarousel";
import CanvasMenu from "./components/convasMenu/CanvasMenu";
import Standing from "./components/main/Standing";

class App extends Component {
  render() {
    return (
      <div>
        <Hamburger />
        <BoxscoreCarousel />
        <CanvasMenu />
        <div id="mainPageContainer">
          <div id="mainPageRightCol">
            <MainSlider />
          </div>
          <div id="mainPageLeftCol">
            <Standing />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
