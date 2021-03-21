import React from "react";
import "../pages/BusinessProperty.css";

class BusinessProperty extends React.Component {
  
  constructor() {
    super();
  }

  render(){
    return (
      <div className="Font">
        <h1>{this.props.businessProperty.name}</h1>
        <h2>{this.props.businessProperty.address}</h2>
        <h2>{this.props.businessProperty.postcode}</h2>
        <h2>{this.props.businessProperty.email}</h2>
        <h2>{this.props.businessProperty.description}</h2>
      </div>
    );
  }
}

export default BusinessProperty;
