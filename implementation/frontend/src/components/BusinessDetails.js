import React from "react";

class BusinessDetails extends React.Component {
  convertToDots() {
    var pass = this.props.B_profileS.password;
    var i;
    var dots = "";
    for (i = 0; i < pass.length; i++) {
      dots += "#";
    }
    //console.log(dots)
    return dots;
  }

  render() {
    console.log("B_profileS: ", this.props.B_profileS)

    return (
      <div>
        <h1> PRIVATE Business Profile </h1>
        <h3>Name: {this.props.B_profileS.data.name}</h3>
        <h3>Email: {this.props.B_profileS.data.email}</h3>
        <p>Postcode: {this.props.B_profileS.data.postcode}</p>
        <p>Description: {this.props.B_profileS.data.description}</p>
      </div>
    );
  }
}

export default BusinessDetails;
