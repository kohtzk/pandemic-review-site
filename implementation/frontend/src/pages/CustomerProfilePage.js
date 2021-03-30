import React from "react";

import CustomerDetails from "../components/CustomerDetails";
import CustomerReviews from "../components/CustomerReviews";
import customerData from "../components/customerData";
import reviewData from "../components/reviewData";
import "./style2.css";

import { getProfile } from "../services/getProfile";
import { getReviews } from "../services/getReviews";

import loginService from "../services/login";


import Navbar from "../components/Navbar.js";
import NoReviews from "../components/NoReviews"; 

class CustomerProfilePage extends React.Component {
  constructor() {
    super();
    this.business_token = null
    this.state = {
      got_customerData: null,
      got_reviewData: null,
      numOfReviews: 3,
    };

    //BINDINGS
    //this.handleClick = this.handleClick.bind(this)
  }

  async componentDidMount() {
    console.log("Customer In componentDidMount ");
    this.getData();
    //taking out the businessID from the UserID
    //this.setBusinessID()
    
  }

  async getData(){
    if (loginService.token == null) {
      alert("cant access profile page till have logged in");
      return;
    }

    console.log("customerID", loginService.token)
    await getProfile({"user_id" : loginService.token})
    .then((response) => {
      //console.log("response: ", response) 

      if (response.message !== 'success') {
        alert("customer profile data read failed");
      } else if (response.message === "success") {
        console.log("got_customerData: ", response);
        this.setState({ got_customerData: response });
      }
      //makes sure that the data has been retrived before trying to test it
      //this.setBusinessID()
    });

    await getReviews({ user_id: loginService.token, business_id: null }).then(
      (response) => {
        //console.log("respones: ", response);
        if (response.message !== "success") {
          alert("customer review data read failed");
        } else if (response.message === "success") {
          this.setState({ got_reviewData: response });
        }
      }
    );
  }

  setBusinessID(){
    console.log("in setBusinessID")
    if(this.state.got_customerData.business_id == null){
      this.business_token = null
    }
    else{
      this.business_token = this.state.got_customerData.business_id
    }
  }

  // DO NOT USE setID function- code should access the loginService directly

  render() {    

      if ( this.state.got_customerData == null || this.state.got_reviewData == null){
        console.log("loading data")
        //this.setID() CANT PUT THIS HERE BECAUSE IT GETS CALLED TOO MUCH
        
        return(<Navbar/>)
      }
      //ADD IN A CHECK THAT THE USER HAS BEEN LOGGED IN BY TESTING THE CUSTOMER ID      
      else if(this.state.got_customerData != null && this.state.got_reviewData != null){ 

        //Checks if there are reviews to display before displaying them
        if(this.state.got_reviewData.data.length == 0){
          return(
            <><Navbar /><div className = "card-outer">
              <div className = "card-body">
                  <CustomerDetails 
                  profileS = {this.state.got_customerData}
                />
              </div>
              <div className = "card2">
                  <NoReviews/>
               </div>
            </div></>
          )      
        }else{
          const custProfileReview_array = this.state.got_reviewData.data.map((review) => (
            <CustomerReviews key={review.review_id} reviewS={review} />
          ));

          return(
            <><Navbar /><div className = "card-outer">
              <div className = "card-body">
                  <CustomerDetails 
                  profileS = {this.state.got_customerData}
                />
              </div>
              <div className = "card-body">
                {custProfileReview_array}
               </div>
            </div></>
          )      
  
        }
    
   
      } 
       

  }
}
export default CustomerProfilePage;
