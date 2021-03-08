import * as React from "react";
import "./Bochen.css";
import review from "./review";
import ReviewLayout from "./ReviewLayout";


class AddCustomerReview extends React.Component{

  constructor(){
    super();
    this.state = {
      data: review
    };
  }

  render(){
    const reviews = this.state.data.map(review => <ReviewLayout key={review.id} review={review}/>)

    return(
      <div>
        {reviews}
      </div>
    );
  }
} 

export default AddCustomerReview;
