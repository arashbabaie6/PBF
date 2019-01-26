import React from "react";
import CanvasMenu from "./../convasMenu/CanvasMenu";
import Hamburger from "./Hamburger";
export default function Header() {
  return (
    <React.Fragment>
      <Hamburger />
      <CanvasMenu />
    </React.Fragment>
  );
}
