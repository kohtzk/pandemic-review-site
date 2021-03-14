import React from "react";
import "../pages/BusinessProperty.css";

export default function BusinessProperty(props) {
  return (
    <div className="Font">
      <div className="block">
        <h1 className="businessPropertyName">{props.business.name}</h1>
        <h2 className="address">Location: {props.business.address}</h2>
        <h2 className="businessOwner">Business owner: {props.business.owner}</h2>
        <h2 className="rating">Average hygiene rating: {props.business.rating}</h2>
      </div>

      <div>
        <img className="image" src={props.business.image} />
        <h1 className="description">{props.business.description}</h1>
        <h1 className="review">{props.business.review}</h1>
      </div>
    </div>
    
  );
}
