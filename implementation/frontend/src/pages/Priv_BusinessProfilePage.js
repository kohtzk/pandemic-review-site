import React from "react";

import reviewData from "../components/reviewData";
import BusinessReviews from "../components/BusinessReviews"
import BusinessDetails from "../components/BusinessDetails"
import NoBusinessProfile from "../components/NoBusinessProfile"
import "./style2.css"; 
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
    console.log("In componentDidMount business")
    this.setID()
    this.getData()
    

  }

  setID(){
    console.log("businessID BEFORE: ",this.state.businessID)
    //this.setState({businessID : LoginService.token})
    this.state.businessID = 1
    console.log("businessID AFTER: ",this.state.businessID)
  }

  async getData(){
    try{
      console.log("In try")
      await getBusiness({"business_id" : this.state.businessID})
      .then((response) => {
      console.log("response business details: ",response)
      if (response.message !== 'success') {
        alert("business profile data read failed");
      }
      else if (response.message === 'success'){
        this.setState({got_businessData:response});
        console.log("got_businessData: ",this.state.got_businessData)
      }     

    }); 

    await getReviews({"user_id" : null, "business_id": this.state.businessID})
    .then((response) => {
      if (response.message !== 'success') {
        alert("business review data read failed");
      }
      else if (response.message === 'success'){
        this.setState({got_reviewData:response});
      }     

    }); 

    }
    catch(TypeError){ //MAKE THIS CATCH THE ERROR WHERE ID = NULL
      console.log("got_businessData: ",this.state.got_businessData)
      alert("cant access profile page till have logged it?")
    }
  }


  render() {

    if(this.state.got_businessData == null || this.state.got_reviewData == null){
      console.log("loading data")
        return(null)
    }
    else if(this.state.businessID == null){
      return(
        <NoBusinessProfile/>
      )     
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
