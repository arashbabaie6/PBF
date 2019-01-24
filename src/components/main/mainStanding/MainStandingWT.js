import React from "react";

export default function MainStandingWT(props) {
  var teamLogo = `http://cdn.nba.net/assets/logos/teams/secondary/web/${
    props.teamName
  }.svg`;
  return (
    <div className="mainStandingSingleContainer">
      <div>
        <img src={teamLogo} />
      </div>
      <div>
        <p className="flama">{props.teamName}</p>
      </div>
    </div>
  );
}
