import React from "react";
import "../App.css";

function Card(props) {
  return (
      <div className="card" >
        <div className="img-container">
          <img className="cardImg" alt={props.name} src={props.image} onClick={() => props.clickedCard(props.id)} />
        </div>
      </div>
  );
}

export default Card;
