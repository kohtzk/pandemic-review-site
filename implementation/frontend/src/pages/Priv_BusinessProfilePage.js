import React from "react";

import reviewData from "../components/reviewData";
import BusinessReviews from "../components/BusinessReviews"
import BusinessDetails from "../components/BusinessDetails";
import BusinessData from "../components/BusinessData";
import "./style2.css" 
import { getBusiness } from "../services/getBusiness";
import{ getReviews } from "../services/getReviews";

import LoginService from "../services/login";

class Priv_BusinessProfilePage extends React.Component {
  constructor() {
    super();
    this.state = {
      //businessID : 0, // NEED TO UPDATE SO THAT ITS A COOKIE
      businessID : null,
      businessStatus : true,
      got_businessData : null,
      got_reviewData : null

    }
    //BINDING
    this.setID = this.setID.bind(this) 
    
  }

  async componentDidMount() {
    //console.log("In componentDidMount business")
    this.setID()
    // if(this.state.businessID == null){

    //   businessID
    // }
    await getBusiness({"id" : this.state.businessID})
    .then((response) => {
      this.setState({got_businessData:response});
      //console.log(response)

    }); 

    await getReviews({"user_id" : null, "business_id": this.state.businessID})
    .then((response) => {
      this.setState({got_reviewData:response});
      //console.log(response)
    }); 

  }

  setID(){
    console.log(this.state.customerID)
    this.setState({customerID : LoginService.token})
    console.log(this.state.customerID)
  }


  render() {
    // const busPrivData_component = this.state.busD.map((B_profile) => (
    //   <BusinessDetails key={B_profile.id} B_profileS={B_profile} />
    // ));

    // const busPrivReview_component = this.state.custR.map((review) => (
    //   <BusinessReviews
    //     key={review.id}
    //     B_reviewS={review}
    //   />
    // ));


    if(this.state.got_businessData == null || this.state.got_reviewData == null){
      console.log("loading data")
        return(null)
    }
    else if(this.state.got_businessData != null && this.state.got_reviewData != null){ 

      const businessReview_array = this.state.got_reviewData.data.map((review) => (
        <BusinessReviews key={review.review_id} B_reviewS={review} />
      ));

      return (
        <div className = "body_Profilepage">
          <div className = "inner">
            <BusinessDetails
              B_profileS = {this.state.got_businessData}
            />
            </div>
          <div className = "inner">
            {businessReview_array}
          </div>
        </div>
      );

    }    
  }
}

export default Priv_BusinessProfilePage;
