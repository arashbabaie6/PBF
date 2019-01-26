import React from "react";
import nbaLogo from './../../../assets/nbaTeamsLogo/nba-silhouette.png'

export default function SingleBoxscore(props) {
  var homeLogo= `http://cdn.nba.net/assets/logos/teams/secondary/web/${props.gameInfo.home.abbreviation}.svg`;
  var visitorLogo= `http://cdn.nba.net/assets/logos/teams/secondary/web/${props.gameInfo.visitor.abbreviation}.svg`;
  return (
    <div className="BoxscoreItemContainer">
    <img src={nbaLogo} id="boxscoreNbaLogo"></img>
      <div className="BoxscoreItem Home">
        <div className="BoxscoreItemPic">
          <img src={homeLogo}/>
        </div>
        <div className="BoxscoreItemName">
          <h4>{props.gameInfo.home.abbreviation}</h4>
        </div>
        <div className="BoxscoreItemScore">
          <h4>{props.gameInfo.home.score}</h4>
        </div>
      </div>
      <div className="BoxscoreItem Away">
        <div className="BoxscoreItemPic">
        <img src={visitorLogo}/>
        </div>
        <div className="BoxscoreItemName">
          <h4> {props.gameInfo.visitor.abbreviation}</h4>
        </div>
        <div className="BoxscoreItemScore">
          <h4>{props.gameInfo.visitor.score}</h4>
        </div>
      </div>
      <div className="BoxscoreItem BoxscoreItemInfo">
        {props.gameInfo.home.score == "" ? (
          <React.Fragment>
            <span>{props.gameInfo.date_ir}</span>
            <span>{props.gameInfo.time_ir}</span>
          </React.Fragment>
        ) : (
          <span className="BoxscoreItemInfomoreInfo">اطلاعات بیشتر</span>
        )}
      </div>
    </div>
  );
}
