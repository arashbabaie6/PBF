import React from "react";
import MainSlider from "./mainSlider/MainSlider";
import MainLatestNews from "./mainLatestNews/MainLatestNews";
import BoxscoreCarousel from "./mainBoxscoreCarousel/BoxscoreCarousel";
import MainStanding from "./mainStanding/MainStanding";
import MainLeaugeLeaders from "./mainLeaugeLeaders/MainLeaugeLeaders";
import MainMvpPowerRanking from "./mainMvpPowerRanking/MainMvpPowerRanking";
import './mainPage.scss'
export default function MainPage() {
  return (
    <React.Fragment>
      <BoxscoreCarousel />
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
    </React.Fragment>
  );
}
