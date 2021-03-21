import React from "react";
import "../pages/BusinessProperty.css";

class BusinessProperty extends React.Component {
  
  constructor() {
    super();
  }

  render(){
    console.log("businessProperty data: ",this.props.businessProperty.data);
    return (
      
      <div className="Font">
        <h1>{this.props.businessProperty.data.name}</h1>
        <h2>{this.props.businessProperty.data.address}</h2>
        <h2>{this.props.businessProperty.data.postcode}</h2>
        <h2>{this.props.businessProperty.data.email}</h2>
        <h2>{this.props.businessProperty.data.description}</h2>
      </div>
    );
  }
}

export default BusinessProperty;
