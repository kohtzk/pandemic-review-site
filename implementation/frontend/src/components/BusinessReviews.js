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
    // return (
    //   <div className="contact-card">
    //     <h2> Review details</h2>
    //     <h3>CustomerID: {this.props.B_reviewS.CustomerID}</h3>
    //     <h3>Date of Review: {this.props.B_reviewS.reviewDate}</h3>
    //     <p>Review text: {this.props.B_reviewS.reviewText}</p>
    //     <button onClick={this.handleClick}>Delete Review</button>
    //   </div>
    // );

    return (
      <div className="contact-card">
        <h2> Review details</h2>
        <h3>UserID: {this.props.B_reviewS.user_id}</h3>
        <h3>Date of Review: {this.props.B_reviewS.date}</h3>
        <p>Review text: {this.props.B_reviewS.text}</p>
        <button onClick={this.handleClick}>Delete Review</button>
      </div>
    );

  }
}

export default BusinessReviews;
