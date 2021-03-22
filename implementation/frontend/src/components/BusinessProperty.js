import React from "react";
import "../pages/BusinessProperty.css";

class BusinessProperty extends React.Component {
  
  constructor() {
    super();
  }

  render(){
    console.log("businessProperty data: ",this.props.businessProperty.data);
    return (
      
      <div className="BusinessProperty">
        <h1 className="name">Name: {this.props.businessProperty.data.name}</h1>
        <h2>Address: {this.props.businessProperty.data.address}</h2>
        <h2>Postcode: {this.props.businessProperty.data.postcode}</h2>
        <h2>Email: {this.props.businessProperty.data.email}</h2>
        <h2>Description: {this.props.businessProperty.data.description}</h2>
      </div>
    );
  }
}

export default BusinessProperty;
