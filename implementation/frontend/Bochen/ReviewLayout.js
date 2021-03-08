import React from "react";
import "./Bochen.css";

export default function ReviewLayout(props){

    return(
        <div className = "Font">
            <h1 className = "businessName">Business Rereview for {props.review.name}</h1>
            <h1 className = "informationDescription">{props.review.description}</h1>
            <button className = "reviewButton">"Add a review"</button>
            <input className = "reviewText" type="text"/>
        </div>
    );
}