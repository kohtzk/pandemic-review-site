import React from "react";
import "./BusinessSearchCard.css";

function BusinessSearchCard({ name, rating, type, location }) {
  return (
    <div className="busCard">
      <h2> {name} </h2>
      <p> {location} </p>
      <p> Rating: {rating} </p>
      <p> Type: {type} </p>
    </div>
  );
}

export default BusinessSearchCard;
