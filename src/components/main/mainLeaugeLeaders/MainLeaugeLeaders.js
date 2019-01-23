import React, { Component } from "react";
import "./MainLeaugeLeaders.scss";

import { withStyles } from "@material-ui/core/styles";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
});

class MainLeaugeLeaders extends Component {
  state = {
    statCategory: "PTS",
    playerOrTeam: "Player",
    leaders: "",
    leaderImage: "",
    teamImage: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value, leaders: "" });
  };
  componentDidMount() {
    axios
      .get(`http://localhost:5000/mainLeaugeLeaders/PTS/Player`)
      .then(response => {
        this.setState({
          leaders: response.data,
          leaderImage: response.data.rowSet[0][1]
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({ leaders: "" });
      });
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    axios
      .get(
        `http://localhost:5000/mainLeaugeLeaders/${this.state.statCategory}/${
          this.state.playerOrTeam
        }`
      )
      .then(res => {
        if (
          this.state.statCategory !== prevState.statCategory ||
          this.state.playerOrTeam !== prevState.playerOrTeam
        ) {
          this.setState({
            leaders: res.data
          });
          if (this.state.playerOrTeam === "Player") {
            this.setState({
              leaderImage: res.data.rowSet[0][1]
            });
          }
          if (this.state.playerOrTeam === "Team") {
            this.setState({
              teamImage: res.data.rowSet[0][2]
            });
          }
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    var leaderimage = `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${
      this.state.leaderImage
    }.png`;
    var teamimage = `https://www.nba.com/assets/logos/teams/primary/web/${
      this.state.teamImage
    }.svg`;
    const { classes } = this.props;
    const iranSans = { fontFamily: "Iran Sans", direction: "rtl" };
    return (
      <div id="mainLeaugeLeaders">
        <div id="mainLeaugeLeadersOptionsContainer">
          <div>
            <form className={classes.root} autoComplete="off">
              <FormControl className={classes.formControl}>
                <InputLabel style={iranSans}>گزینه ها</InputLabel>
                <Select
                  style={iranSans}
                  onChange={this.handleChange}
                  value={this.state.statCategory}
                  inputProps={{
                    name: "statCategory"
                  }}
                >
                  <MenuItem style={iranSans} value={"PTS"}>
                    امتیاز
                  </MenuItem>
                  <MenuItem style={iranSans} value={"REB"}>
                    ریباند
                  </MenuItem>
                  <MenuItem style={iranSans} value={"AST"}>
                    پاس گل
                  </MenuItem>
                  <MenuItem style={iranSans} value={"BLK"}>
                    بلاک
                  </MenuItem>
                  <MenuItem style={iranSans} value={"STL"}>
                    توپ ربایی
                  </MenuItem>
                </Select>
              </FormControl>
            </form>
          </div>

          <div>
            <form className={classes.root} autoComplete="off">
              <FormControl className={classes.formControl}>
                <InputLabel style={iranSans}>گزینه ها</InputLabel>
                <Select
                  style={iranSans}
                  onChange={this.handleChange}
                  value={this.state.playerOrTeam}
                  inputProps={{
                    name: "playerOrTeam"
                  }}
                >
                  <MenuItem style={iranSans} value={"Player"}>
                    بازیکن
                  </MenuItem>
                  <MenuItem style={iranSans} value={"Team"}>
                    تیم
                  </MenuItem>
                </Select>
              </FormControl>
            </form>
          </div>
        </div>
        <div id="mainLeaugeLeadersResultContainer">
          <div id="mainLeaugeLeadersResultImage">
            {this.state.leaders === "" ? (
              <div>
                <FontAwesomeIcon icon={faSpinner} size="lg" spin />
              </div>
            ) : this.state.playerOrTeam === "Player" ? (
              <img src={leaderimage} />
            ) : (
              <img src={teamimage} />
            )}
          </div>
          <div id="mainLeaugeLeadersResultList">
            <ul>
              {this.state.leaders === "" ? (
                <div>
                  <FontAwesomeIcon icon={faSpinner} size="lg" spin />
                </div>
              ) : this.state.playerOrTeam === "Player" ? (
                this.state.leaders.rowSet.map(leader => (
                  <li key={leader[1]}>
                    <span>{leader[0]} - </span>
                    <span>{leader[2]}</span>
                    <span style={{ float: "right" }}>{leader[6]}</span>
                  </li>
                ))
              ) : (
                this.state.leaders.rowSet.map(leader => (
                  <li key={leader[1]}>
                    <span>{leader[0]} - </span>
                    <span>{leader[2]}</span>
                    <span style={{ float: "right" }}>{leader[4]}</span>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(MainLeaugeLeaders);