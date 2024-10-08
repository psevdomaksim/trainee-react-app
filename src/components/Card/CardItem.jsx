import React from "react";
import "../../App.css";
import "./Card.css";


const CardItem = ({ card }) => {
  return (

    <div className="card">
      <img alt={card.header}  src = {require("../../assets/" + card.src)} />
      <div className="card-description">
        <h1 className="card-title">{card.header}</h1>
        <p className="card-paragraph">{card.description}</p>
      </div>
    </div>
  );
};

export default CardItem;
