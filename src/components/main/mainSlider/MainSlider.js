import React, { Component } from "react";
import Slider from "react-slick";
import './MainSlider.scss'

class MainSlider extends Component {
  render() {
    const settings = {
      autoplay: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div id="mainSliderContainer">
        <Slider {...settings}>
          <div className="mainSliderSlide">
              <img src='https://cdn.nba.net/nba-drupal-prod/styles/landscape_1045w/s3/2019-01/james-harden-dunk-lakers.jpg?itok=jrCg6biI%20640w' ></img>
            <h3>درخشش جیمز هاردن در نبود پادشاه لیکرز</h3>
          </div>
          <div className="mainSliderSlide">
              <img src='https://cdn.nba.net/nba-drupal-prod/styles/landscape_1045w/s3/2019-01/lebron-giannis-split.jpg?itok=B6rXV88F%201045w,%20https://cdn.nba.net/nba-drupal-prod/styles/landscape_1280w' ></img>
            <h3>لبران ، جیانیس همچنان در صدر رای گیری آل استار</h3>
          </div>
          <div className="mainSliderSlide">
              <img src='https://cdn.nba.net/nba-drupal-prod/styles/landscape_1045w/s3/2019-01/vucevic-dunk.jpg?itok=jXgINZWX%201045w' ></img>
            <h3>10 حرکت برتر هفته</h3>
          </div>
          <div className="mainSliderSlide">
              <img src='https://cdn.nba.net/nba-drupal-prod/styles/landscape_1045w/s3/2019-01/GettyImages-1084888174.jpg?itok=w6KpXDI7 1045w' ></img>
            <h3>درخشش بوگی در اولین بازی خودش با لباس گلدن استیت</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
export default MainSlider;
