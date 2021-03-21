import * as React from "react";
import BusinessProperty from "../components/BusinessProperty";
import PublicBusinessInformation from "../components/PublicBusinessInformation";
import DisplyBusinessAverageRating from "../components/DisplayBusinessAverageRating";
import NoSuchBusiness from "../components/NoSuchBusiness";
import { getReviews } from "../services/getReviews";
import { getBusinessProfile } from "../services/getBusinessProfile";
import { getAverageReview } from "../services/getAverageReview";
import "../pages/BusinessProperty.css";

class ViewBusinessProperty extends React.Component {
  constructor() {
    super();
    this.state = {
      businessID: null,
      gettingBusinessData: null,
      gettingReviewData: null,
      gettingAverageRating: null,
    };
  }

  async componentDidMount(){
    await getBusinessProfile({"business_id" : this.state.businessID})
    .then((response) => {
      this.setState({gettingBusinessData:response});
    });

    await getReviews({"user_id" : null, "business_id" : this.state.businessID})
    .then((response) => {
      this.setState({gettingReviewData:response});
    });

    await getAverageReview({"user_id" : null, "business_id" : this.state.businessID})
    .then((response) => {
      this.setState({gettingAverageRating:response});
    });
  }

  render() {
    if(this.state.gettingBusinessData == null || this.state.gettingReviewData == null){
      return null;
    }
    else if(this.state.businessID == null){
      return(<NoSuchBusiness />)
    }
    else if(this.state.gettingBusinessData != null || this.state.gettingReviewData != null){
      const businessProfile = this.state.gettingBusinessData.data.map((business) => (
        <BusinessProperty key={business.business_id} businessProperty={business} />
      ));

      const displayAllReviews = this.state.gettingReviewData.data.map((review) => (
        <PublicBusinessInformation key={review.business_id} publicBusinessInformation={review} />
      ));

      const businessAverageRating = this.state.gettingAverageRating.data.map((rating) => (
        <DisplyBusinessAverageRating key={rating.business_id} displyBusinessAverageRating={rating} />
      ))

      return(
        <div>
          <div>
            {businessProfile}
          </div>
          <div>
            {businessAverageRating}
          </div>
          <div className="displayAllReviews">
            {displayAllReviews}
          </div>
        </div>
      );
    }
  }
}

export default ViewBusinessProperty;
