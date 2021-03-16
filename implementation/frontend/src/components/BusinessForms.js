import React, { Component } from "react";

class BusinessForms extends Component {
  render() {
    return (
      <form className="outerForm">
        <div className="forms">
          <label>Email Address:</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="forms">
          <label>Username:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter username"
          />
        </div>

        <div className="forms">
          <label>Password:</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="forms">
          <label>Confirm Password:</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="forms">
          <label>Your name:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter full name"
          />
        </div>

        <div className="forms">
          <label>Name of business:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter business name"
          />
        </div>

        <div className="forms">
          <label>Business address</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter business address"
          />
        </div>

        <button type="submit" className="submit-button">
          Create account
        </button>
        <p>
          Already have an account? <a href="#">Log in</a>
        </p>
      </form>
    );
  }
}

export default BusinessForms;
