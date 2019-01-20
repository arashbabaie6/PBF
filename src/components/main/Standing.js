import React, { Component } from "react";
import "./Standing.scss";
class Standing extends Component {
  render() {
    return (
      <div id="mainPageStandingContainer">
        <div className="conferences">
          <div className="title">غرب</div>
          <div className="rankingTitle west">
            <div className="rankingTitleRank">#</div>
            <div className="rankingTitleTeam">تیم</div>
            <div className="rankingTitleStats">
              <div className="rankingTitleWin">W</div>
              <div className="rankingTitleLoos">L</div>
              <div className="rankingTitleGb">GB</div>
            </div>
          </div>
        </div>
        <div className="conferences">
          <div className="title">شرق</div>
          <div className="rankingTitle">
            <div className="rankingTitleRank">#</div>
            <div className="rankingTitleTeam">تیم</div>
            <div className="rankingTitleStats">
              <div className="rankingTitleWin">W</div>
              <div className="rankingTitleLoos">L</div>
              <div className="rankingTitleGb">GB</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Standing;
