import React, { Component } from 'react'
import {createAccount} from "../services/createAccount";
import {Link} from "react-router-dom";

class UserForms extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            name: '',
            username: '',
            password: '',
            businessid: null
        }
        this.handleCreate = this.handleCreate.bind(this)
        this.handleEmail = this.handleEmail.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.handleUsername = this.handleUsername.bind(this)
        this.handleName = this.handleName.bind(this)
    }

    handleName(e){
        this.setState({name: e.target.value})
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

    handleCreate = async (e) =>{
        e.preventDefault();
        await createAccount(this.state)
            .then((response) => {
                if (response.message !== 'success'){
                    alert('failure');
                }
                else if (response.message === 'success') {
                    window.location.replace('/')
                }
            });

    }


    render()
    {
        return (
            <form className="outerForm" onSubmit={this.handleCreate}>
                <div className="forms">
                    <label>Email Address:</label>
                    <input type="email" className="form-control" placeholder="Enter email" value={this.state.email} onChange={this.handleEmail}/>
                </div>

                <div className="forms">
                    <label>Full Name:</label>
                    <input type="text" className="form-control" placeholder="Enter your full name" value={this.state.name} onChange={this.handleName}/>
                </div>

                <div className="forms">
                    <label>Username:</label>
                    <input type="text" className="form-control" placeholder="Enter username" value={this.state.username} onChange={this.handleUsername}/>
                </div>

                <div className="forms">
                    <label>Password:</label>
                    <input type="password" className="form-control" placeholder="Enter password" value={this.state.password} onChange={this.handlePassword}/>
                </div>

                <button type="submit" className="submit-button" onClick={this.handleCreate}>Create account</button>
                <p>
                    Already have an account? <Link to={{pathname: '../Login'}}>Log in</Link>
                </p>
            </form>
        )
    }
}


export default UserForms