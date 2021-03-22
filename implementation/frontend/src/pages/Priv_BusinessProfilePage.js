import React from "react";

import reviewData from "../components/reviewData";
import BusinessReviews from "../components/BusinessReviews"
import BusinessDetails from "../components/BusinessDetails"
import NoBusinessProfile from "../components/NoBusinessProfile"
import "./style2.css"; 
import { getBusiness } from "../services/getBusiness";
import{ getReviews } from "../services/getReviews";

import loginService from "../services/login";// OLD TOKEN
import NoReviews from "../components/NoReviews";

import Navbar from "../components/Navbar.js";

class Priv_BusinessProfilePage extends React.Component {
  constructor() {
    super();
    this.state = {
      businessStatus : true,
      got_businessData : null,
      got_reviewData : null

    }
    
  }

  async componentDidMount() {
    console.log("In componentDidMount business")
    this.getData()
    

  }

  async getData(){

    if(loginService.token == null){
      alert("cant access profile page till have logged in");
      return;
    }
    try{
      console.log("In try")
      await getBusiness({"business_id" :loginService.token})
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

    await getReviews({"user_id" : null, "business_id": loginService.token})
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
        return(<Navbar/>)
    }
    else if(loginService.token == null){
      return(
        <div>
          <Navbar/>
          <NoBusinessProfile/>
        </div>
      )     
    }
    else if(this.state.got_businessData != null && this.state.got_reviewData != null){
      
      //if()
      console.log("else if 2: this.state.got_reviewData", this.state.got_reviewData)
      if(this.state.got_reviewData.data.length == 0){
        return (
          <><Navbar /><div className = "body_Profilepage">            
            <div className = "inner">
              <BusinessDetails
                B_profileS = {this.state.got_businessData}
              />
              </div>
            <div className = "inner">
              <NoReviews/>
            </div>
          </div></>
        );
      }else{
        const businessReview_array = this.state.got_reviewData.data.map((review) => (
          <BusinessReviews key={review.review_id} B_reviewS={review} />
        ));

        return (
          <><Navbar /><div className = "body_Profilepage">
            <div className = "inner">
              <BusinessDetails
                B_profileS = {this.state.got_businessData}
              />
              </div>
            <div className = "inner">
              {businessReview_array}
            </div>
          </div></>
        );

      }
    }    
  }
}

export default Priv_BusinessProfilePage;
