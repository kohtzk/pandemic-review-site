import React from "react";
import "../pages/BusinessProperty.css";

class PublicBusinessInformation extends React.Component {

  constructor() {
    super();
  }

  render() {

    return (
      <div className="PublicBusinessInformation">
        <h1>Customer review for the business</h1>
        <p>One Way System Rating: {this.props.publicBusinessInformation.oneway}</p>
        <p>Sanitizer Rating: {this.props.publicBusinessInformation.sanitizer}</p>
        <p>Customers Wearing Masks In The Business Rating: {this.props.publicBusinessInformation.mask_usage}</p>
        <p>Covid Bouncers Rating: {this.props.publicBusinessInformation.bouncers}</p>
        <p>Temeperature Checking Rating: {this.props.publicBusinessInformation.temperature_checking}</p>
        <p>Staff Wearing PPE Correctly Rating: {this.props.publicBusinessInformation.staff_ppe}</p>
        <p>Social Distancing Rating: {this.props.publicBusinessInformation.social_distancing}</p>
        <p>Ventilation Rating: {this.props.publicBusinessInformation.ventilation}</p>
      </div>  
    );
  }
}

export default PublicBusinessInformation;
