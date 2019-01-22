import React, { Component } from "react";
import "./MainStanding.scss";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import MainStandingWT from "./MainStandingWT";
import MainStandingWW from "./MainStandingWW";
import MainStandingWL from "./MainStandingWL";
import MainStandingWGB from "./MainStandingWGB";
import MainStandingET from "./MainStandingWT";
import MainStandingEW from "./MainStandingWW";
import MainStandingEL from "./MainStandingWL";
import MainStandingEGB from "./MainStandingWGB";

class MainStanding extends Component {
  state = {
    West: {},
    East: {}
  };
  componentDidMount() {
    axios
      .get("http://localhost:5000/standing/main")
      .then(response => {
        this.setState({
          West: response.data.sports_content.standings.conferences.West,
          East: response.data.sports_content.standings.conferences.East
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <div id="mainPageStandingContainer">
        <div className="conferences west">
          <div className="title west">غرب</div>
          <div className="rankingTitle west">
            {this.state.West == {} ? (
              <FontAwesomeIcon icon={faSpinner} size="lg" spin />
            ) : (
              <React.Fragment>
                <div className="rankingTitleRank">
                  <div>#</div>
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                  <div>4</div>
                  <div>5</div>
                  <div>6</div>
                  <div>7</div>
                  <div>8</div>
                  <div>9</div>
                  <div>10</div>
                  <div>11</div>
                  <div>12</div>
                  <div>13</div>
                  <div>14</div>
                  <div>15</div>
                </div>
                <div className="rankingTitleTeam">
                  <div>تیم</div>
                  {this.state.West.hasOwnProperty("team") ? (
                    this.state.West.team.map(t => (
                      <MainStandingWT key={t.id} teamName={t.abbreviation} />
                    ))
                  ) : (
                    <React.Fragment></React.Fragment>
                  )}
                </div>
                <div className="rankingTitleStats">
                  <div className="rankingTitleWin">
                    <div>برد</div>
                    {this.state.West.hasOwnProperty("team") ? (
                      this.state.West.team.map(t => (
                        <MainStandingWW
                          key={t.id}
                          teamWins={t.team_stats.wins}
                        />
                      ))
                    ) : (
                      <FontAwesomeIcon icon={faSpinner} size="lg" spin />
                    )}
                  </div>
                  <div className="rankingTitleLoos">
                    <div>باخت</div>
                    {this.state.West.hasOwnProperty("team") ? (
                      this.state.West.team.map(t => (
                        <MainStandingWL
                          key={t.id}
                          teamLosses={t.team_stats.losses}
                        />
                      ))
                    ) : (
                      <React.Fragment></React.Fragment>
                    )}
                  </div>
                  <div className="rankingTitleGb">
                    <div>GB</div>
                    {this.state.West.hasOwnProperty("team") ? (
                      this.state.West.team.map(t => (
                        <MainStandingWGB
                          key={t.id}
                          teamGB={t.team_stats.gb_conf}
                        />
                      ))
                    ) : (
                      <React.Fragment></React.Fragment>
                    )}
                  </div>
                </div>
              </React.Fragment>
            )}
          </div>
        </div>
        <div className="conferences east">
          <div className="title east">شرق</div>
          <div className="rankingTitle east">
            {this.state.East == {} ? (
              <FontAwesomeIcon icon={faSpinner} size="lg" spin />
            ) : (
              <React.Fragment>
                <div className="rankingTitleRank">
                  <div>#</div>
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                  <div>4</div>
                  <div>5</div>
                  <div>6</div>
                  <div>7</div>
                  <div>8</div>
                  <div>9</div>
                  <div>10</div>
                  <div>11</div>
                  <div>12</div>
                  <div>13</div>
                  <div>14</div>
                  <div>15</div>
                </div>
                <div className="rankingTitleTeam">
                  <div>تیم</div>
                  {this.state.East.hasOwnProperty("team") ? (
                    this.state.East.team.map(t => (
                      <MainStandingET key={t.id} teamName={t.abbreviation} />
                    ))
                  ) : (
                    <React.Fragment></React.Fragment>
                  )}
                </div>
                <div className="rankingTitleStats">
                  <div className="rankingTitleWin">
                    <div>برد</div>
                    {this.state.East.hasOwnProperty("team") ? (
                      this.state.East.team.map(t => (
                        <MainStandingEW
                          key={t.id}
                          teamWins={t.team_stats.wins}
                        />
                      ))
                    ) : (
                      <FontAwesomeIcon icon={faSpinner} size="lg" spin />
                    )}
                  </div>
                  <div className="rankingTitleLoos">
                    <div>باخت</div>
                    {this.state.East.hasOwnProperty("team") ? (
                      this.state.East.team.map(t => (
                        <MainStandingEL
                          key={t.id}
                          teamLosses={t.team_stats.losses}
                        />
                      ))
                    ) : (
                      <React.Fragment></React.Fragment>
                    )}
                  </div>
                  <div className="rankingTitleGb">
                    <div>GB</div>
                    {this.state.East.hasOwnProperty("team") ? (
                      this.state.East.team.map(t => (
                        <MainStandingEGB
                          key={t.id}
                          teamGB={t.team_stats.gb_conf}
                        />
                      ))
                    ) : (
                      <React.Fragment></React.Fragment>
                    )}
                  </div>
                </div>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default MainStanding;
