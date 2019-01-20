import React, { Component } from "react";
import Slider from "react-slick";
import "./BoxscoreCarousel.scss";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import SingleBoxscore from "./SingleBoxscore";

class BoxscoreCarousel extends Component {
  state = {
    scoreboardDate: "",
    scoreboardGameInfo: {}
  };
  componentDidMount() {
    axios.get(`http://localhost:5000/scoreboard`).then(res => {
      this.setState({
        scoreboardDate: res.data.sports_content.games.game[0].date,
        scoreboardGameInfo: res.data.sports_content
      });
    }).catch(function (error) {
      console.log(error);
    });
  }
  decDay = () => {
    this.setState({ scoreboardDate: "" });
    axios
      .get(
        `http://localhost:5000/scoreboard/decDay/${this.state.scoreboardDate}`
      )
      .then(res => {
        this.setState({
          scoreboardDate: res.data.sports_content.games.game[0].date,
          scoreboardGameInfo: res.data.sports_content
        });
      });
  };
  incDay = () => {
    this.setState({ scoreboardDate: "" });
    axios
      .get(
        `http://localhost:5000/scoreboard/incDay/${this.state.scoreboardDate}`
      )
      .then(res => {
        this.setState({
          scoreboardDate: res.data.sports_content.games.game[0].date,
          scoreboardGameInfo: res.data.sports_content
        });
      });
  };

  render() {
    var settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div id="BoxscoreCarouselContainer">
        <div>
          <span id="dayBefore" onClick={this.decDay}>
            <FontAwesomeIcon icon={faCaretLeft} size="lg" />
          </span>
          <span id="todayDate">
            {this.state.scoreboardDate == "" ? (
              <FontAwesomeIcon icon={faSpinner} size="lg" spin />
            ) : (
              moment(this.state.scoreboardDate).format("YYYY MMM DD")
            )}
          </span>
          <span id="dayAfter" onClick={this.incDay}>
            <FontAwesomeIcon icon={faCaretRight} size="lg" />
          </span>
        </div>
        <Slider {...settings}>
          {this.state.scoreboardGameInfo.hasOwnProperty("games") ? (
            this.state.scoreboardGameInfo.games.game.map(g => (
              <SingleBoxscore key={g.id} gameInfo={g} />
            ))
          ) : (
            <React.Fragment></React.Fragment>
          )}
        </Slider>
      </div>
    );
  }
}
export default BoxscoreCarousel;
