import React, { Component } from "react";
import "./MainLatestNews.scss";
import nbaLogo from './../../../assets/nbaTeamsLogo/nba-silhouette.png' ;
class MainLatestNews extends Component {
  render() {
    return (
      <div id="mainLatestNews">
      <img src={nbaLogo}></img>
        <div id="title">
          <h3> آخرین اخبار</h3>
          <div>
              <p>درخشش جیمز هاردن در نبود پادشاه لیکرز</p>
          </div>
          <div>
              <p>لبران ، جیانیس همچنان در صدر رای گیری آل استار</p>
          </div>
          <div>
              <p>10 حرکت برتر هفته</p>
          </div>
          <div>
              <p>هارد یا جیانیس ؟‌ بهترین بازیکن فصل</p>
          </div>
          <div>
              <p>درخشش بوگی در اولین بازی خودش با لباس گلدن استیت</p>
          </div>
        </div>
      </div>
    );
  }
}
export default MainLatestNews;
