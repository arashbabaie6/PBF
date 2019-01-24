import React, { Component } from "react";
import MainMvpLadder from "./mainMvpLadder/MainMvpLadder";
import "./MainMvpPowerRanking.scss";

class MainMvpPowerRanking extends Component {
  render() {
    return (
      <div id="mainMvpPowerRankingContainer">
        <div id="mainMvpPowerRankingTitle">
          <div><h4>با ارزش ترین بازیکنان هفته</h4></div>
          <div><h4>قدرتمند ترین تیم های هفته</h4></div>
        </div>
        <div id="mainMvpPowerRanking">
          <MainMvpLadder />
        </div>
      </div>
    );
  }
}
export default MainMvpPowerRanking;
