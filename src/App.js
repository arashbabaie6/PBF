import React, { Component } from "react";
import "./App.scss";
import MainSlider from "./components/main/mainSlider/MainSlider";
import MainLatestNews from "./components/main/mainLatestNews/MainLatestNews";

import Hamburger from "./components/header/Hamburger";
import BoxscoreCarousel from "./components/header/BoxscoreCarousel";
import CanvasMenu from "./components/convasMenu/CanvasMenu";
import MainStanding from "./components/main/mainStanding/MainStanding";
import MainLeaugeLeaders from "./components/main/mainLeaugeLeaders/MainLeaugeLeaders";
import MainMvpPowerRanking from "./components/main/mainMvpPowerRanking/MainMvpPowerRanking";

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
            <div id="mainLatestNewsContainer">
              <MainLatestNews />
            </div>
              <MainMvpPowerRanking />
          </div>
          <div id="mainPageLeftCol">
            <MainStanding />
            <div id="mainLeaugeLeadersContainer">
              <MainLeaugeLeaders />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
