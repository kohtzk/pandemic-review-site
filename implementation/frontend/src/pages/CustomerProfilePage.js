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
      customerID: 0
    };
  }
  //componentDidMount()
  loadPage = async =>{
    await getProfile({"id" : this.state.customerID})
    .then((response) => console.log(response));
  };
  loadPage;

  render() {
    const custProfile_component = this.state.custD.map((profile) => (
      <CustomerDetails key={profile.id} profileS={profile} />
    ));

    const custProfileReview_component = this.state.custR.map((review) => (
      <CustomerReviews key={review.id} reviewS={review} />
    ));

    return (
      <div className = "body_Profilepage">
        <div className = "inner">{custProfile_component[1]}</div>
        <div className = "inner">{custProfileReview_component}</div>
      </div>
    );
  }
}
export default CustomerProfilePage;
