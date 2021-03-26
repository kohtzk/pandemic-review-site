import React from "react";
import { addReview } from "../services/addReview";
import { getBusiness } from "../services/getBusiness";
import loginService from "../services/login";
import "../pages/ReviewLayout.css";

class ReviewLayout extends React.Component{
  constructor() {
    super();
    this.state = {
      businessID: parseInt(window.location.href.substring(33)),
      oneway:1,
      sanitizer: 1,
      mask_usage: 1,
      bouncers: 1,
      temperature_checking: 1,
      staff_ppe: 1,
      social_distancing: 1,
      ventilation: 1,
      description: 1,
    };

    this.setBusinessName = this.setBusinessName.bind(this);
    this.setOneWaySystem0 = this.setOneWaySystem0.bind(this);
    this.setOneWaySystem1 = this.setOneWaySystem1.bind(this);
    this.setHandSanitizer0 = this.setHandSanitizer0.bind(this);
    this.setHandSanitizer1 = this.setHandSanitizer1.bind(this);
    this.setMaskUsage0 = this.setMaskUsage0.bind(this);
    this.setMaskUsage1 = this.setMaskUsage1.bind(this);
    this.setBouncers0 = this.setBouncers0.bind(this);
    this.setBouncers1 = this.setBouncers1.bind(this);
    this.setTemperatureChecking0 = this.setTemperatureChecking0.bind(this);
    this.setTemperatureChecking1 = this.setTemperatureChecking1.bind(this);
    this.setStaffPPE0 = this.setStaffPPE0.bind(this);
    this.setStaffPPE1 = this.setStaffPPE1.bind(this);
    this.setSocialDistancing0 = this.setSocialDistancing0.bind(this);
    this.setSocialDistancing1 = this.setSocialDistancing1.bind(this);
    this.setVentilation0 = this.setVentilation0.bind(this);
    this.setVentilation1 = this.setVentilation1.bind(this);
    this.setDescription = this.setDescription.bind(this);
  }

  setBusinessName(e){
    this.setState({businessName:e.target.value});
  }

  setOneWaySystem0(){
    this.setState({oneway: 0});
    console.log("Oneway System:", this.state.oneway);
  }

  setOneWaySystem1(){
    this.setState({oneway: 1});
    console.log("Oneway System:", this.state.oneway);
  }

  setHandSanitizer0(){
    this.setState({sanitizer:0});
  }

  setHandSanitizer1(){
    this.setState({sanitizer:1});
  }

  setMaskUsage0(){
    this.setState({mask_usage:0});
  }

  setMaskUsage1(){
    this.setState({mask_usage:1});
  }

  setBouncers0(){
    this.setState({bouncers:0});
  }

  setBouncers1(){
    this.setState({bouncers:1});
  }

  setTemperatureChecking0(){
    this.setState({temperature_checking:0});
  }

  setTemperatureChecking1(){
    this.setState({temperature_checking:1});
  }

  setStaffPPE0(){
    this.setState({staff_ppe:0});
  }

  setStaffPPE1(){
    this.setState({staff_ppe:1});
  }

  setSocialDistancing0(){
    this.setState({social_distancing:0});
  }

  setSocialDistancing1(){
    this.setState({social_distancing:1});
  }

  setVentilation0(){
    this.setState({ventilation:0});
  }

  setVentilation1(){
    this.setState({ventilation:1});
  }

  setDescription(e){
    this.setState({description:e.target.value});
  }

  sendToDatabase =  async () => {
    var number = this.state.businessID;
    await addReview({business_id:number, user_id:loginService.token, text:this.state.description, scores:{oneway:this.state.oneway, sanitizer:this.state.sanitizer, mask_usage:this.state.mask_usage, bouncers:this.state.bouncers, temperature_checking:this.state.temperature_checking, staff_ppe:this.state.staff_ppe, social_distancing:this.state.social_distancing, ventilation:this.state.ventilation}})
    .then((response) => {
      if (response.message !== 'success') {
        alert("Add review Fail");
    }
    else if (response.message === 'success'){
        console.log("Add review Success")
    }
    });
  }

  render(){
    return (
      <div className="Font">
        <div>
          <h1 className="ReviewLayoutHeading">Adding a Review</h1>
        </div>
        <div className="informationDescription">
          <h1>{this.props.review.oneWaySystem}</h1>
          <button className = "addReviewButton" onClick={this.setOneWaySystem1} >Yes</button>
          <button className = "addReviewButton" onClick={this.setOneWaySystem0} >No</button>

          <h1>{this.props.review.handSanitizer}</h1>
          <button className = "addReviewButton">Yes</button>
          <button className = "addReviewButton">No</button>

          <h1>{this.props.review.wearMasks}</h1>
          <button className = "addReviewButton">Yes</button>
          <button className = "addReviewButton">No</button>

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
          <input className="reviewText" type="text" onChange={this.setDescription}/>
        </div>
        <div>
          <button className="submitButton" onClick={this.sendToDatabase}>submit</button>
        </div>
      </div>
    );
  }
}


export default ReviewLayout;