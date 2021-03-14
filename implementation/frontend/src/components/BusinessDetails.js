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
    return (
      <div>
        <h1> PRIVATE Business Profile </h1>
        <h3>Name: {this.props.B_profileS.name}</h3>
        <img src={this.props.B_profileS.profilePic} />
        <h3>Email: {this.props.B_profileS.email}</h3>
        <p>Password: {this.convertToDots()}</p>
        <h3>Business Name: {this.props.B_profileS.businessName}</h3>
        <h3>Location: {this.props.B_profileS.location}</h3>
      </div>
    );
  }
}

export default BusinessDetails;
