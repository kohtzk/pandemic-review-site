import React from "react";

import reviewData from "../components/reviewData";
import BusinessReviews from "../components/BusinessReviews"
import BusinessDetails from "../components/BusinessDetails"
import NoBusinessProfile from "../components/NoBusinessProfile"
import "./style2.css"; 

import { getProfile } from "../services/getProfile";
import { getBusiness } from "../services/getBusiness";
import{ getReviews } from "../services/getReviews";

import loginService from "../services/login";// OLD TOKEN
import NoReviews from "../components/NoReviews";

import Navbar from "../components/Navbar.js";

class Priv_BusinessProfilePage extends React.Component {
  constructor() {
    super();
    this.state = {
      businessStatus : false,
      got_customerData : null,
      got_businessData : null,
      got_reviewData : null

    }
    
  }

  async componentDidMount() {
    console.log("BUSINESS In componentDidMount business")
    this.getCustomerData()   

  }

  async getCustomerData(){

    if(loginService.token == null){
      alert("cant access profile page till have logged in");
      return;
    }
    //try{

      // getting business id
      await getProfile({"user_id" : loginService.token})
      .then((response) => {
        //console.log("getProfile response: ", response) 

        if (response.message !== 'success') {
          alert("customer profile data read failed");
        } else if (response.message === "success") {
          console.log("got_customerData: ", response);
          this.setState({ got_customerData: response});
        }
        //make sure has the response before using it
        this.getBusinessData()
      });

      
    //}
    // catch(TypeError){ //MAKE THIS CATCH THE ERROR WHERE ID = NULL
    //   console.log("TYPE ERROR got_businessData: ",this.state.got_businessData)
    //   alert("cant access profile page till have logged it?")
    // }
  }

  async getBusinessData(){
    //case where user does have a business
    console.log("busimess_id: ",this.state.got_customerData.data.business_id)
    if(this.state.got_customerData.data.business_id != null){
      //this.state.setState({businessStatus: true})
      this.state.businessStatus = true
      console.log("IN if  businessStatus =", this.state.businessStatus)

      //await getBusiness({"business_id" :loginService.token})
      await getBusiness({"business_id" :this.state.got_customerData.data.business_id})
      .then((response) => {
        console.log("response business details: ",response)
        if (response.message !== 'success') {
          alert("business profile data read failed");
        }
        else if (response.message === 'success'){
          this.setState({got_businessData:response});
          console.log("got_businessData: ",this.state.got_businessData)
        } 
        
        this.getReviewsData()
      }); 

      
    }
    //case where user does not have a business
    else{
      console.log("IN ELSE, business_id was null")
      alert("This user does NOT own a business")
      this.state.businessStatus = false
      return null
    }
    //console.log("In try")

  }

  async getReviewsData(){
    //await getReviews({"user_id" : null, "business_id": loginService.token})
    await getReviews({"user_id" : null, "business_id": this.state.got_customerData.data.business_id})
    .then((response) => {
      if (response.message !== 'success') {
        alert("business review data read failed");
      }
      else if (response.message === 'success'){
        this.setState({got_reviewData:response});
      }     

    }); 

  }


  render() {

    if(this.state.got_businessData == null || this.state.got_reviewData == null){
      console.log("loading data")
        return(<Navbar/>)
    }
    else if(this.state.businessStatus == false){
      console.log("status == flase")
      return(
        <div className = "card-body">
          <Navbar/>
          <NoBusinessProfile className = "card2"/>
        </div>
      )     
    }
    else if(this.state.got_businessData != null && this.state.got_reviewData != null){

      console.log("status == true")
      
      //if()
      console.log("else if 2: this.state.got_reviewData", this.state.got_reviewData)
      if(this.state.got_reviewData.data.length == 0){
        return (
          <><Navbar /><div className = "card-outer">            
            <div className = "card-body">
              <BusinessDetails
                B_profileS = {this.state.got_businessData}
              />
              </div>
            <div className = "card2">
              <NoReviews/>
            </div>
          </div></>
        );
      }else{
        const businessReview_array = this.state.got_reviewData.data.map((review) => (
          <BusinessReviews key={review.review_id} B_reviewS={review} />
        ));

        return (
          <><Navbar /><div className = "card-outer">
            <div className = "card-body">
              <BusinessDetails
                B_profileS = {this.state.got_businessData}
              />
              </div>
            <div className = "card-body">
              {businessReview_array}
            </div>
          </div></>
        );

      }
    }    
  }
}

export default Priv_BusinessProfilePage;
