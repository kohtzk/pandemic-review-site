import React, { Component } from "react";

class BusinessForms extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            username: '',
            password: '',
            ownerName: '',
            businessName: '',
            businessAddress: '',
            businessid: 1
        }
        this.handleCreate = this.handleCreate.bind(this)
        this.handleEmail = this.handleEmail.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.handleUsername = this.handleUsername.bind(this)
        this.handleOwnerName = this.handleOwnerName.bind(this)
        this.handleBusinessName = this.handleBusinessName.bind(this)
        this.handleBusinessAddress = this.handleBusinessAddress.bind(this)

    }

    handleEmail(e){
        this.setState({email: e.target.value})
    }

    handleUsername(e){
        this.setState({username: e.target.value})
    }

    handlePassword(e){
        this.setState({password: e.target.value})
    }

    handleOwnerName(e){
        this.setState({ownerName: e.target.value})
    }

    handleBusinessName(e){
        this.setState({businessName: e.target.value})
    }

    handleBusinessAddress(e){
        this.setState({businessAddress: e.target.value})
    }

    handleCreate(){
        //TO DATABASE HERE
        console.log("Email" + this.state.email)
        console.log("Username" + this.state.username)
        console.log("Password" + this.state.password)
    }


    render() {
        return (
          <form className="outerForm">
            <div className="forms">
              <label>Email Address:</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                value={this.state.email}
                onChange={this.handleEmail}
              />
            </div>

              <div className="forms">
                  <label>Your name:</label>
                  <input
                      type="text"
                      className="form-control"
                      placeholder="Enter full name"
                      value={this.state.ownerName}
                      onChange={this.handleOwnerName}
                  />
              </div>

            <div className="forms">
                <label>Username:</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter username"
                    value={this.state.username}
                    onChange={this.handleUsername}
                />
            </div>

            <div className="forms">
              <label>Password:</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={this.state.password}
                onChange={this.handlePassword}
              />
            </div>

            <div className="forms">
              <label>Name of business:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter business name"
                value={this.state.BusinessName}
                onChange={this.handleBusinessName}
              />
            </div>

            <div className="forms">
              <label>Business address</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter business address"
                value={this.state.businessAddress}
                onChange={this.handleBusinessAddress}
              />
            </div>

            <button type="submit" className="submit-button" onClick={this.handleCreate()}>
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
