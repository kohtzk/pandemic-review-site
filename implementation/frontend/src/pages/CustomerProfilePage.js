import React from "react";

import CustomerDetails from "../components/CustomerDetails";
import CustomerReviews from "../components/CustomerReviews";
import customerData from "../components/customerData";
import reviewData from "../components/reviewData";
import "./style2.css"; 

import { getProfile } from "../services/getProfile";
import{ getReviews } from "../services/getReviews";

import loginService from "../services/login";
 
class CustomerProfilePage extends React.Component {
  constructor() {
    super();
    this.state = {
      got_customerData : null,
      got_reviewData : null,
      numOfReviews : 3
    };

    //BINDINGS
    //this.handleClick = this.handleClick.bind(this)
  }

  async componentDidMount() {
    console.log("In componentDidMount")
    this.getData()    
  }

  async getData(){
    if (loginService.token === null) {
      alert("cant access profile page till have logged in");
      return;
    }

    console.log("customerID", loginService.token)
    await getProfile({"user_id" : loginService.token})
    .then((response) => {
      console.log("response: ", response) //THE DATABASE IS FAILING TO RETURN ANYTHING!?

      if (response.message !== 'success') {
        alert("customer profile data read failed");
      }
      else if (response.message === 'success'){
        console.log("got_customerData: ",response);
        this.setState({got_customerData:response});
      }     

    }); 
    
    await getReviews({"user_id" : loginService.token, "business_id": null})
    .then((response) => {
      console.log("respones: ", response)
      if (response.message !== 'success') {
        alert("customer review data read failed");
      }
      else if (response.message === 'success'){

        this.setState({got_reviewData:response});
      }   
      
    }); 
  }

// DO NOT USE setID function- code should access the loginService directly

  render() {

    

      if ( this.state.got_customerData == null || this.state.got_reviewData == null){
        console.log("loading data")
        //this.setID() CANT PUT THIS HERE BECAUSE IT GETS CALLED TOO MUCH
        return(null)
      }
      //ADD IN A CHECK THAT THE USER HAS BEEN LOGGED IN BY TESTING THE CUSTOMER ID      
      else if(this.state.got_customerData != null && this.state.got_reviewData != null){ 

        const custProfileReview_array = this.state.got_reviewData.data.map((review) => (
          <CustomerReviews key={review.review_id} reviewS={review} />
        ));

        let n = this.state.numOfReviews;
    
        return(
          <div className = "body_Profilepage">
            <div className = "inner">
                <CustomerDetails 
                profileS = {this.state.got_customerData}
              />
            </div>
            <div className = "inner">
                {/* <CustomerReviews
                reviewS = {this.state.got_reviewData.data}
              /> */}
              {custProfileReview_array}
              

            </div>
          </div>

        )      

      } 
       
    
  }
}
export default CustomerProfilePage;
