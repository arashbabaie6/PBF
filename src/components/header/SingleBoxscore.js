import React from "react";

export default function SingleBoxscore(props) {
  return (
    <div>
      <div className="BoxscoreItem Home" id="test">
        <div id="backImage" />
        <p>{props.gameInfo.home.abbreviation}</p>
        <p className="BoxscoreItemScoreHome">{props.gameInfo.home.score}</p>
      </div>
      <div className="BoxscoreItem Away" id="test2">
        <p className="BoxscoreItemScoreAway">{props.gameInfo.visitor.score}</p>
        <p>{props.gameInfo.visitor.abbreviation}</p>
      </div>
    </div>
  );
}
