import React from "react";

import CustomerDetails from "../components/CustomerDetails";
import CustomerReviews from "../components/CustomerReviews";
import customerData from "../components/customerData";
import reviewData from "../components/reviewData";
import "./style2.css"; 

import { getProfile } from "../services/getProfile";

class CustomerProfilePage extends React.Component {
  constructor() {
    super();
    this.state = {
      custD: customerData,
      custR: reviewData,
      customerID: 0,
      got_customerData : null
    };
  }

<<<<<<< Updated upstream
  async componentDidMount() {
    await getProfile({"id" : this.state.customerID})
    .then((response) => {
      console.log(response);
      console.log("its more code!!!");
=======
  // setCustomerDetails(details){
  //   console.log(details);
  // }

  componentDidMount() {
    console.log("In componentDidMount")
    getProfile({"id" : this.state.customerID})
    .then((response) => {
      this.setState({got_customerData:response});
      console.log(response)
>>>>>>> Stashed changes
    }); 
  }

  // async componentDidMount() {
  //   const response = await getProfile({"id" : this.state.customerID});
  //   const json = await response.json();
  //   this.setState({data:json});
  // }

  

  render() {

    console.log("thisstate");
    console.log(this.state.got_customerData);
    
    // const custProfile_component = this.state.custD.map((profile) => (
    //   <CustomerDetails key={profile.id} profileS={profile} />
    // ));

    //FAIL ATTEMPT
    // const custProfile_component = this.state.data.map((profile) => (
    //   <CustomerDetails key={profile.id} profileS={profile} />
    // ));

    //OLD CUST REVIEW
    // const custProfileReview_component = this.state.custR.map((review) => (
    //   <CustomerReviews key={review.id} reviewS={review} />
    // ));

    // return (
    //   <div className = "body_Profilepage">
    //     <div className = "inner">{custProfile_component[1]}</div>
    //     <div className = "inner">{custProfileReview_component}</div>
    //   </div>
    // );
    

      if ( this.state.got_customerData == null){
        console.log("loading data")
        return(null)
      }
      else{ 

      return(
        <div className = "body_Profilepage">
        <div className = "inner">
              <CustomerDetails 
              profileS = {this.state.got_customerData}
            />
          </div>
          {/* <div className = "inner">{custProfileReview_component}</div> */}
        </div>

      )      

      } 
       
    
  }
}
export default CustomerProfilePage;
