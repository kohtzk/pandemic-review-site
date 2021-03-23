import React from "react";

class BusinessReviews extends React.Component {
  constructor() {
    super();
    this.state = {
      submit: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => {
      return {
        submit: true, //NOT SUPPOSED TO ALTER DIRECTLY...
        //CHECK OUT: https://scrimba.com/learn/learnreact/react-todo-app-phase-61--cMqr68Sr
      };
    });
  }
  render() {
    
    return (
      <div className="reviewSeperator-card">
        <div className = "card2">
          
          <h3 className = "details">UserID: {this.props.B_reviewS.user_id}</h3>
          {/* <h3>Date of Review: {this.props.B_reviewS.date}</h3> */}
          <p className = "details2">Review text: {this.props.B_reviewS.text}</p>
          {/* <button onClick={this.handleClick}>Delete Review</button>  */}

        </div>        
      </div>
    );//NEED TO EITHER MAKE THE BUTTON INTERACTIVE OR DELET IT!!

  }
}

export default BusinessReviews;
