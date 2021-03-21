import React, { Component } from "react";
import {createAccount} from "../services/createAccount";
import {createBusiness} from "../services/createBusiness";
import {Link} from 'react-router-dom'
import {linkBusiness} from "../services/linkBusiness";

class BusinessForms extends Component {
    constructor(props){
        super(props)
        this.state = {
            userEmail: '',
            businessEmail: '',
            username: '',
            password: '',
            ownerName: '',
            businessName: '',
            businessAddress: '',
            businessPostcode: '',
            businessid: null
        }

        this.handleCreate = this.handleCreate.bind(this)
        this.handleUserEmail = this.handleUserEmail.bind(this)
        this.handleBusinessEmail = this.handleBusinessEmail.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.handleUsername = this.handleUsername.bind(this)
        this.handleOwnerName = this.handleOwnerName.bind(this)
        this.handleBusinessName = this.handleBusinessName.bind(this)
        this.handleBusinessAddress = this.handleBusinessAddress.bind(this)
        this.handleBusinessPostcode = this.handleBusinessPostcode.bind(this)

    }

    handleUserEmail(e){
        this.setState({userEmail: e.target.value})
    }

    handleBusinessEmail(e){
        this.setState({businessEmail: e.target.value})
    }

    handleBusinessPostcode(e){
        this.setState({businessPostcode: e.target.value})
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

    handleCreate = async (e) =>{
        e.preventDefault();
        let businessID;
        await createBusiness({name : this.state.businessName, email : this.state.businessEmail, address : this.state.businessAddress, postcode : this.state.businessPostcode, description: "This business is a business"})
            .then((response) => {
                if (response.message !== 'success') {
                    alert("Business account creation failed, please try again");
                }
                else if (response.message === 'success'){
                    this.state.businessid = response.data.business_id;
                    businessID = response.data.business_id
                }
                });

        await createAccount({name : this.state.ownerName, username : this.state.username, email : this.state.userEmail, password : this.state.password})
            .then((response) => {
                if (response.message !== 'success'){
                    alert('failure');
                }
                else if (response.message === 'success') {
                    this.linkBusinessAndUser({business_id : businessID, user_id : response.data.user_id})
                }
            });
    }


    linkBusinessAndUser = async (ids) =>{
        await linkBusiness(ids).then((response) => {
            if (response.message !== 'success'){
                alert('Couldnt link account to business')
            }
            else if (response.message === 'success'){
                window.location.replace('/');
            }
        })
    }

    render() {
        return (
          <form className="outerForm">

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
                  <label>User Email Address:</label>
                  <input
                      type="email"
                      className="form-control"
                      placeholder="Enter user email"
                      value={this.state.userEmail}
                      onChange={this.handleUserEmail}
                  />
              </div>

              <div className="forms">
                  <label>Business Email Address:</label>
                  <input
                      type="email"
                      className="form-control"
                      placeholder="Enter business email"
                      value={this.state.businessEmail}
                      onChange={this.handleBusinessEmail}
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
                  <label>Business Address:</label>
                  <input
                      type="text"
                      className="form-control"
                      placeholder="Enter business address"
                      value={this.state.businessAddress}
                      onChange={this.handleBusinessAddress}
                  />
              </div>

              <div className="forms">
                  <label>Business Postcode:</label>
                  <input
                      type="text"
                      className="form-control"
                      placeholder="Enter business postcode"
                      value={this.state.businessPostcode}
                      onChange={this.handleBusinessPostcode}
                  />
              </div>

              <button type="submit" className="submit-button" onClick={this.handleCreate}>
                  Create account
              </button>
              <p>
                  Already have an account? <Link to={{pathname: '../Login'}}>Log in</Link>
              </p>
          </form>
        );
    }
}

export default BusinessForms;
