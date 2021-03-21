import React from "react";
import "./BusinessSearchCard.css";
import { Link } from "react-router-dom";

function BusinessSearchCard(props) {
  return (
    <div className="busCard">
      <Link to={"/view-b/" + props.id}>
        <h2> {props.name} </h2>
      </Link>
      <p> {props.location} </p>
      <p> Rating: {props.rating} </p>
      <p> Type: {props.type} </p>
    </div>
  );
}

export default BusinessSearchCard;
