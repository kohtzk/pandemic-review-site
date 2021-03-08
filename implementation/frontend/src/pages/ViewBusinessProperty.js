import * as React from "react";
import "./Bochen.css";
import BusinessProperty from "../components/BusinessProperty";
import businessData from "../components/businessDataTwo";

class ViewBusinessProperty extends React.Component {
  constructor() {
    super();
    this.state = {
      data: businessData,
    };
  }

  render() {
    const businesses = this.state.data.map((business) => (
      <BusinessProperty key={business.id} business={business} />
    ));

    return <div>{businesses}</div>;
  }
}

export default ViewBusinessProperty;
