import * as React from "react";
import BusinessProperty from "../components/BusinessProperty";
import PublicBusinessInformation from "../components/PublicBusinessInformation";
import DisplyBusinessAverageRating from "../components/DisplayBusinessAverageRating";
import { getReviews } from "../services/getReviews";
import { getBusiness } from "../services/getBusiness";
import { getAverageReview } from "../services/getAverageReview";
import "../pages/BusinessProperty.css";

import Navbar from "../components/Navbar.js";

class ViewBusinessProperty extends React.Component {
  constructor() {
    super();
    this.state = {
      businessID: null,
      businessStatus:true,
      gettingBusinessData: null,
      gettingReviewData: null,
      gettingAverageRating: null,
    };
  }

  async componentDidMount(){
    console.log("URL: ", window.location.href); 
    var location = window.location.href;
    console.log("Location: ",location.substr(-1))
    this.state.businessID = location.substr(-1);

    try{
      console.log("Trying");
      await getBusiness({"business_id" : this.state.businessID})
      .then((response) => {
        console.log("Response: ",response);
        if(response.message !== 'success'){
          alert('Getting business profile failed! You need to click on one of the business in the home page first!');
        }
        else if(response.message === 'success'){
          this.setState({gettingBusinessData:response});
          console.log("gettingBusinessData: ", this.state.gettingBusinessData)
        }
      });

      await getReviews({"business_id" : this.state.businessID})
      .then((response) => {
        if(response.message !== 'success'){
          alert('Getting reviews for business failed!');
        }
        else if(response.message === 'success'){
          this.setState({gettingReviewData:response});
        }
      });

      await getAverageReview({"business_id" : this.state.businessID})
      .then((response) => {
        console.log("Response getting average review",response)
        if(response.message !== 'success'){
          alert('Getting average review for business failed!');
        }
        else if(response.message === 'success'){
          this.setState({gettingAverageRating:response});
          console.log("gettingAverageRating:", this.state.gettingAverageRating)
        }
      });
      
    }catch(TypeError){
      alert("WARNING for getting business profile!");
    }
  }

  render() {
    if(this.state.gettingBusinessData == null || this.state.gettingReviewData == null || this.state.gettingAverageRating == null){ // || this.state.gettingReviewData == null){
      console.log("return null", this.state.gettingAverageRating, this.state.gettingBusinessData, this.state.gettingReviewData);
      return(<Navbar/>);
    }
    else if(this.state.gettingBusinessData != null && this.state.gettingReviewData != null && this.state.gettingAverageRating != null){
      console.log("gettingBusinessData1: ", this.state.gettingBusinessData.data)

      const displayAllReviews = this.state.gettingReviewData.data.map((review) => (
        <PublicBusinessInformation key={review.business_id} publicBusinessInformation={review} />
      ));

      console.log("Before return",this.state.gettingAverageRating)
      return(
        <><Navbar/><div>
          <div>
            <BusinessProperty 
            businessProperty={this.state.gettingBusinessData} />
          </div>
          <div>
            <DisplyBusinessAverageRating
            displyBusinessAverageRating={this.state.gettingAverageRating} />
          </div>
          <div className="displayAllReviews">
            {displayAllReviews}
          </div>
        </div></>
      );
    }
  }
}

export default ViewBusinessProperty;
