import React from "react";

import CustomerDetails from "../components/CustomerDetails";
import CustomerReviews from "../components/CustomerReviews";
import customerData from "../components/customerData";
import reviewData from "../components/reviewData";
import "./style2.css"; 

import { getProfile } from "../services/getProfile";
import{ getReviews } from "../services/getReviews";
 
class CustomerProfilePage extends React.Component {
  constructor() {
    super();
    this.state = {
      custD: customerData,
      custR: reviewData,
      customerID: 0,
      got_customerData : null,
      got_reviewData : null,
      numOfReviews : 3
    };
  }
  // setCustomerDetails(details){
  //   console.log(details);
  // }

  async componentDidMount() {
    console.log("In componentDidMount")
    await getProfile({"id" : this.state.customerID})
    .then((response) => {
      this.setState({got_customerData:response});
      //console.log(response)

    }); 
    
    await getReviews({"user_id" : this.state.customerID, "business_id": null})
    .then((response) => {
      this.setState({got_reviewData:response});
      //console.log(response)

    }); 
    
  }

  // async componentDidMount() {
  //   const response = await getProfile({"id" : this.state.customerID});
  //   const json = await response.json();
  //   this.setState({data:json});
  // }

  

  render() {

    console.log("this.state.got_reviewData");
    console.log(this.state.got_reviewData);
    
    
    // const custProfile_component = this.state.custD.map((profile) => (
    //   <CustomerDetails key={profile.id} profileS={profile} />
    // ));

    //FAIL ATTEMPT
    // const custProfile_component = this.state.data.map((profile) => (
    //   <CustomerDetails key={profile.id} profileS={profile} />
    // ));
    
    // return (
    //   <div className = "body_Profilepage">
    //     <div className = "inner">{custProfile_component[1]}</div>
    //     <div className = "inner">{custProfileReview_component}</div>
    //   </div>
    // );
    

      if ( this.state.got_customerData == null || this.state.got_reviewData == null){
        console.log("loading data")
        return(null)
      }
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
