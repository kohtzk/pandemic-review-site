import React from "react";

import CustomerDetails from "../components/CustomerDetails";
import CustomerReviews from "../components/CustomerReviews";
import customerData from "../components/customerData";
import reviewData from "../components/reviewData";

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
      <div>
        <div>{custProfile_component[1]}</div>
        <div>{custProfileReview_component}</div>
      </div>
    );
  }
}
export default CustomerProfilePage;
