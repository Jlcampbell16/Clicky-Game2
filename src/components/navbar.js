import React from "react";
import "../App.css";

function Navbar(props) {
  return (
    <div class="navBar">
      <h1>Clicky Game!</h1>
      <h3>Test your memory and only click on each character once.</h3>
      <p>Your Score: {props.score} | Your Top Score: {props.topScore}</p>
    </div>
  );
}

export default Navbar;