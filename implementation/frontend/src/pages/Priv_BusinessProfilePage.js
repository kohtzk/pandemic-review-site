import React from "react";

import reviewData from "../components/reviewData";

import BusinessReviews from "../components/BusinessReviews";
import BusinessDetails from "../components/BusinessDetails";
import BusinessData from "../components/BusinessData";

class Priv_BusinessProfilePage extends React.Component {
  constructor() {
    super();
    this.state = {
      custR: reviewData,
      busD: BusinessData,
    };
  }

  render() {
    const busPrivData_component = this.state.busD.map((B_profile) => (
      <BusinessDetails key={B_profile.id} B_profileS={B_profile} />
    ));

    const busPrivReview_component = this.state.custR.map((review) => (
      <BusinessReviews
        key={review.id}
        B_reviewS={review}

        //ADD CODE SO THAT IT ONLY GETS THE VALUES WHERE THE CustomerReviews.bussinesID == BusinessDetails.bussinesID
        //OR Do you only request to be sent the data for that business so it should matter???
      />
    ));

    return (
      <div>
        <div>{busPrivData_component}</div>
        <div>{busPrivReview_component}</div>
      </div>
    );
  }
}

export default Priv_BusinessProfilePage;
