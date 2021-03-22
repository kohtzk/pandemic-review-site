import React, { useState } from "react";
import "../pages/ReviewLayout.css";

class ReviewLayout extends React.Component{
  constructor() {
    super();
    this.state = {
      businessID: null,
      oneway_System: null,
      hand_Sanitizer: null,
      wear_Masks: null,
      covid_Bouncers: null,
      temperature_Check: null,
      staff_PPE: null,
      social_Distancing: null,
      ventilation: null,
    };
  }

  setOneWaySystem0(){
    this.state.oneway_System = 0;
    console.log("Oneway System:", this.state.oneway_System);
  }

  setOneWaySystem1(){
    this.state.oneway_System = 1;
    console.log("Oneway System:", this.state.oneway_System);
  }

  render(){
    return (
      <div className="Font">
        <div>
          <h1>Adding a Review</h1>
        </div>
        <div>
          <h1>Name of the busienss</h1>
          <input type="text" />
        </div>
        <div className="informationDescription">
          <h1>{this.props.review.oneWaySystem}</h1>
          <button className = "addReviewButton" onClick={this.setOneWaySystem0} >Yes</button>
          <button className = "addReviewButton" onClick={this.setOneWaySystem0} >No</button>

          <h1>{this.props.review.handSanitizer}</h1>
          <div className="slidecontainer">
            <input type="range" min="1" max="100" value="50" className="slider"/>
          </div>

          <h1>{this.props.review.wearMasks}</h1>
          <div className="slidecontainer">
            <input type="range" min="1" max="100" value="50" className="slider"/>
          </div>

          <h1>{this.props.review.bouncers}</h1>
          <button className = "addReviewButton">Yes</button>
          <button className = "addReviewButton">No</button>

          <h1>{this.props.review.temperatureCheck}</h1>
          <button className = "addReviewButton">Yes</button>
          <button className = "addReviewButton">No</button>

          <h1>{this.props.review.staffPPE}</h1>
          <button className = "addReviewButton">Yes</button>
          <button className = "addReviewButton">No</button>

          <h1>{this.props.review.socialDistancing}</h1>
          <button className = "addReviewButton">Yes</button>
          <button className = "addReviewButton">No</button>

          <h1>{this.props.review.ventilation}</h1>
          <button className = "addReviewButton">Yes</button>
          <button className = "addReviewButton">No</button>
        </div>
        <div>
          <button className="reviewButton">Add written review</button>
          <input className="reviewText" type="text" />
        </div>
        <div>
          <button className="submitButton">submit</button>
        </div>
      </div>
    );
  }
}


export default ReviewLayout;