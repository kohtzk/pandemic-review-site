import * as React from "react";
import BusinessProperty from "../components/BusinessProperty";
import PublicBusinessInformation from "../components/PublicBusinessInformation";
import DisplyBusinessAverageRating from "../components/DisplayBusinessAverageRating";
import { getReviews } from "../services/getReviews";
import { getBusiness } from "../services/getBusiness";
import { getAverageReview } from "../services/getAverageReview";
import { Link } from "react-router-dom";
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

    this.goToAddReviewPage = this.goToAddReviewPage.bind(this);
  }

  goToAddReviewPage(){
    window.$get_business_ID = window.location.href.substr(29);
    console.log("ID is: ", window.get_business_ID);
    return(<Link to={"http://localhost:8000/add-review" + 1}></Link>);
  }

  async componentDidMount(){
    var location = window.location.href;
    this.state.businessID = location.substr(29);
    console.log("ID is: ", this.state.businessID);
    window.$get_business_ID = this.state.businessID;
    console.log("global ID is: ", window.get_business_ID)

    try{
      await getBusiness({"business_id" : this.state.businessID})
      .then((response) => {
        if(response.message !== 'success'){
          alert('Getting business profile failed! You need to click on one of the business in the home page first!');
        }
        else if(response.message === 'success'){
          this.setState({gettingBusinessData:response});
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
        if(response.message !== 'success'){
          alert('Getting average review for business failed!');
        }
        else if(response.message === 'success'){
          this.setState({gettingAverageRating:response});
        }
      });
      
    }catch(TypeError){
      alert("WARNING for getting business profile!");
    }
  }

  render() {
    if(this.state.gettingBusinessData == null || this.state.gettingReviewData == null || this.state.gettingAverageRating == null){
      return(<Navbar/>);
    }
    else if(this.state.gettingBusinessData != null && this.state.gettingReviewData != null && this.state.gettingAverageRating != null){

      const displayAllReviews = this.state.gettingReviewData.data.map((review) => (
        <PublicBusinessInformation key={review.business_id} publicBusinessInformation={review} />
      ));

      return(
        <><Navbar/><div>
          <div>
            <BusinessProperty 
            businessProperty={this.state.gettingBusinessData} />
          </div>
          <div>
            <Link to={"../add-review/" + this.state.businessID} className="addReviewLink">Add a review</Link>
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
