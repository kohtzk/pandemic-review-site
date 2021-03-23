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
        <div className = "header">
                    <h1 style = {{fontWeight: 'bold'}}>PRIVATE Business Profile</h1>
        </div>
        <div className = "profilePic">
          <img src = "https://image.flaticon.com/icons/png/128/474/474509.png"/>
        </div>
        <div className = "card">
          <h3 className = "details">Name: {this.props.B_profileS.data.name}</h3>
          <h3 className = "details">Email: {this.props.B_profileS.data.email}</h3>
          <p className = "details2">Postcode: {this.props.B_profileS.data.postcode}</p>
          <p className = "details2">Description: {this.props.B_profileS.data.description}</p>
        </div>

        <div className = "header">
                    <h1 style = {{fontWeight: 'bold'}}>Review details</h1>
        </div>
        
      </div>
    );
  }
}

export default BusinessDetails;
