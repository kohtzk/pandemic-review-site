import * as React from "react";
import review from "../components/review";
import ReviewLayout from "../components/ReviewLayout";
import Navbar from "../components/Navbar.js";

class AddCustomerReview extends React.Component {
  constructor() {
    super();
    this.state = {
      data: review,
    };
  }

  render() {
    const reviews = this.state.data.map((review) => (
      <ReviewLayout key={review.id} review={review} />
    ));

    return <><Navbar /><div>{reviews}</div></>;
  }
}

export default AddCustomerReview;
