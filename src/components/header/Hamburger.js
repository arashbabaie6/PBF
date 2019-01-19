import React, { Component } from "react";
import "./Hamburger.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

class Hamburger extends Component {
  handleClick = () => {
    document.getElementById("canvasMenu").style.right = "0vw";
    document.getElementById("menuBars").style.visibility = "hidden";
  };

  render() {
    return (
      <div className="HamburgerBars">
        <FontAwesomeIcon
          id="menuBars"
          icon={faBars}
          size="2x"
          onClick={this.handleClick}
        />
      </div>
    );
  }
}
export default Hamburger;
