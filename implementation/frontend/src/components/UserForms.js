import React, { Component } from 'react'

class UserForms extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            username: '',
            password: ''
        }
        this.handleCreate = this.handleCreate.bind(this)
        this.handleEmail = this.handleEmail.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.handleUsername = this.handleUsername.bind(this)
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

    handleCreate(){
        //TO DATABASE HERE
        console.log("Email" + this.state.email)
        console.log("Username" + this.state.username)
        console.log("Password" + this.state.password)
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
                    <label>Username:</label>
                    <input type="text" className="form-control" placeholder="Enter username" value={this.state.username} onChange={this.handleUsername}/>
                </div>

                <div className="forms">
                    <label>Password:</label>
                    <input type="password" className="form-control" placeholder="Enter password" value={this.state.password} onChange={this.handlePassword}/>
                </div>

                <button type="submit" className="submit-button">Create account</button>
                <p>
                    Already have an account? <a href="#">Log in</a>
                </p>
            </form>
        )
    }
}


export default UserForms