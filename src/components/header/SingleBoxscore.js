import React from "react";
import ORL from "./../../../assets/NBA teams logo/ORL.svg";

export default function SingleBoxscore(props) {
  return (
    <div className="BoxscoreItemContainer">
      <div className="BoxscoreItem Home">
        <div className="BoxscoreItemPic">
          <img src={ORL} />
        </div>
        <div className="BoxscoreItemName">
          <h4>
            {props.gameInfo.home.name_persian.city}{" "}
            {props.gameInfo.home.name_persian.title}
          </h4>
        </div>
        <div className="BoxscoreItemScore">
          <h4>{props.gameInfo.home.score}</h4>
        </div>
      </div>
      <div className="BoxscoreItem Away">
        <div className="BoxscoreItemPic">
          <img src={ORL} />
        </div>
        <div className="BoxscoreItemName">
          <h4 >
            {" "}
            {props.gameInfo.visitor.name_persian.city}{" "}
            {props.gameInfo.visitor.name_persian.title}
          </h4>
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
