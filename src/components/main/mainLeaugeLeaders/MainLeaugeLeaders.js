import React, { Component } from "react";
import "./MainLeaugeLeaders.scss";

import { withStyles } from "@material-ui/core/styles";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

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
    leaugeLeaders: "pts",
    leaugeLeaders2: "player"
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
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
                  value={this.state.leaugeLeaders}
                  inputProps={{
                    name: "leaugeLeaders"
                  }}
                >
                  <MenuItem style={iranSans} value={"pts"}>
                    امتیاز
                  </MenuItem>
                  <MenuItem style={iranSans} value={"rbs"}>
                    ریباند
                  </MenuItem>
                  <MenuItem style={iranSans} value={"ast"}>
                    پاس گل
                  </MenuItem>
                  <MenuItem style={iranSans} value={"blk"}>
                    بلاک
                  </MenuItem>
                  <MenuItem style={iranSans} value={"stl"}>
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
                  value={this.state.leaugeLeaders2}
                  inputProps={{
                    name: "leaugeLeaders2"
                  }}
                >
                  <MenuItem style={iranSans} value={"player"}>
                    بازیکن
                  </MenuItem>
                  <MenuItem style={iranSans} value={"team"}>
                    تیم
                  </MenuItem>
                </Select>
              </FormControl>
            </form>
          </div>
        </div>
        <div id="mainLeaugeLeadersResultContainer">
          <div id="mainLeaugeLeadersResultList">
            <ul>
              <li>1- James Harden</li>
              <li>2- Lebron James</li>
              <li>3- Stephen Curry</li>
              <li>4- Kevin Durant</li>
              <li>5- Giannis Antetukonmpo</li>
            </ul>
          </div>
          <div id="mainLeaugeLeadersResultImage">
            <img src="https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201935.png" />
          </div>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(MainLeaugeLeaders);
