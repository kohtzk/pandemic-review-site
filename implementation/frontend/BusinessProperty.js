import React from "react";
import "./App.css";

export default function BusinessProperty(props){

    return(
        <div className = "businessFont">
            <h1>{props.business.name}</h1>
            <h2>Address: {props.business.address}</h2>
            <h2>Business owner: {props.business.owner}</h2>
            <img className = "image" src={props.business.image}/>
            <h2 className = "rating">Average hygiene rating: {props.business.rating}</h2>
            <h1 className = "review">{props.business.review}</h1>
        </div>
    );
}