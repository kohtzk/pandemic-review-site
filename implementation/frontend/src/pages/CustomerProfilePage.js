import React from "react";

import CustomerDetails from "../components/CustomerDetails";
import CustomerReviews from "../components/CustomerReviews";
import customerData from "../components/customerData";
import reviewData from "../components/reviewData";
import "./style2.css" 

class CustomerProfilePage extends React.Component {
  constructor() {
    super();
    this.state = {
      custD: customerData,
      custR: reviewData,
    };
  }

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