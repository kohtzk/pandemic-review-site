import * as React from "react";
import review from "../components/review";
import ReviewLayout from "../components/ReviewLayout";

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

    return <div>{reviews}</div>;
  }
}

export default AddCustomerReview;
