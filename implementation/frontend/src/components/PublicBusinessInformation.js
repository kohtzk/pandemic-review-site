import React from "react";
import "../pages/BusinessProperty.css";

class PublicBusinessInformation extends React.Component {

  constructor() {
    super();
  }

  render() {

    return (
      <div>
        <h1>Average Rating for {this.props.publicBusinessInformation.business_id}</h1>
        <p>One Way System Overall Rating: {this.props.publicBusinessInformation.oneway}</p>
        <p>Sanitizer Overall Rating: {this.props.publicBusinessInformation.sanitizer}</p>
        <p>Customers Wearing Masks In The Business Overall Rating: {this.props.publicBusinessInformation.mask_usage}</p>
        <p>Covid Bouncers Overall Rating: {this.props.publicBusinessInformation.bouncers}</p>
        <p>Temeperature Checking Overall Rating: {this.props.publicBusinessInformation.temperature_checking}</p>
        <p>Staff Wearing PPE Correctly Overall Rating: {this.props.publicBusinessInformation.staff_ppe}</p>
        <p>Social Distancing Overall Rating: {this.props.publicBusinessInformation.social_distancing}</p>
        <p>Ventilation Overall Rating: {this.props.publicBusinessInformation.ventilation}</p>
      </div>  
    );
  }
}

export default PublicBusinessInformation;
