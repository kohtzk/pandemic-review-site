import * as React from "react";
import BusinessProperty from "../components/BusinessProperty";
import businessData from "../components/businessDataTwo";
import { getBusiness } from "../services/getBusiness";
import { getReviews } from "../services/getReviews";
import BusinessReviews from "../components/BusinessReviews";

class ViewBusinessProperty extends React.Component {
  constructor() {
    super();
    this.state = {
      data: businessData,
      businessID: 0,
      gettingBusinessData: null,
      gettingReviewData: null,
    };
  }

  async componentDidMount(){
    await getBusiness({"id" : this.state.businessID})
    .then((response) => {
      this.setState({gettingBusinessData:response});
    });

    await getReviews({"user_id" : null, "business_id" : this.state.businessID})
    .then((response) => {
      this.setState({gettingReviewData:response});
    });
  }

  render() {
    if(this.state.gettingBusinessData == null || this.state.gettingReviewData == null){
      return null;
    }
    else if(this.state.gettingBusinessData != null || this.state.gettingReviewData != null){
      const businesses = this.state.data.map((business) => (
        <BusinessProperty key={business.id} business={business} />
      ));

      return(
        <div>
          {businesses}

        </div>
      );
    }
    
  }
}

export default ViewBusinessProperty;
