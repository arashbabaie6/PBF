import React, { Component } from "react";
import "./CanvasMenu.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

class CanvasMenu extends Component {
  handleClick = () => {
    document.getElementById("menuBars").style.visibility = "visible";
    document.getElementById("canvasMenu").style.right = "-25vw";
  };
  render() {
    return (
      <div id="canvasMenu">
        <div className="menuCrossContainer">
          <FontAwesomeIcon
            id="menuCross"
            icon={faTimes}
            size="2x"
            onClick={this.handleClick}
          />
        </div>
        <div>
         text
        </div>
      </div>
    );
  }
}
export default CanvasMenu;
