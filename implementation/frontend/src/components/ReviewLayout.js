import React from "react";
import "../pages/ReviewLayout.css";

export default function ReviewLayout(props) {
  return (
    <div className="Font">
      <div>
        <h1 className="businessReviewName">Business Review for {props.review.name}</h1>
      </div>
      <div className="informationDescription">
        <h1>{props.review.description1}</h1>
        <h1>{props.review.description2}</h1>
        <h1>{props.review.description3}</h1>
        <h1>{props.review.description4}</h1>
        <h1>{props.review.description5}</h1>
        <h1>{props.review.description6}</h1>
        <h1>{props.review.description7}</h1>
        <h1>{props.review.description8}</h1>
        <h1>{props.review.description9}</h1>
      </div>
      <div>
        <button className="reviewButton">Add written review</button>
        <input className="reviewText" type="text" />
      </div>
    </div>
   
  );
}
