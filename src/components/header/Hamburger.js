import React, { Component } from "react";
import "./Hamburger.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "./../../assets/nbaTeamsLogo/logowide.svg";

class Hamburger extends Component {
  handleClick = () => {
    document.getElementById("canvasMenu").style.right = "0vw";
    document.getElementById("menuBars").style.visibility = "hidden";
  };

  render() {
    return (
      <div className="navBar">
        <div id="menuBarsContainer">
          <FontAwesomeIcon
            id="menuBars"
            icon={faBars}
            size="2x"
            onClick={this.handleClick}
          />
        </div>
        <div id="menuItemContainer">
          <ul>
            <li>اخبار</li>
            <li>برنامه زمانی</li>
            <li>آمار</li>
            <li>بازیکن ها</li>
            <li>تیم ها</li>
            <li>جدول</li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Hamburger;
