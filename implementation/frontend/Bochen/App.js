import * as React from "react";
import "./App.css";
import BusinessProperty from  "./BusinessProperty";
import businessData from "./businessData";
import review from "./review";
import ReviewLayout from "./ReviewLayout";


class App extends React.Component{

  constructor(){
    super();
    this.state = {
      //data: businessData
      data: review
    };
  }

  render(){
    //const businesses = this.state.data.map(business => <BusinessProperty key={business.id} business={business}/>)
    const reviews = this.state.data.map(review => <ReviewLayout key={review.id} review={review}/>)

    return(
      <div>
        {reviews}
      </div>
    );
  }
} 

export default App;
