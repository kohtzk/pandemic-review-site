import React, { Component } from 'react'

class UserForms extends Component {
    render()
    {
        return (
            <form className="outerForm">
                <div className="forms">
                    <label>Email Address:</label>
                    <input type="email" className="form-control" placeholder="Enter email"/>
                </div>

                <div className="forms">
                    <label>Username:</label>
                    <input type="text" className="form-control" placeholder="Enter username"/>
                </div>

                <div className="forms">
                    <label>Password:</label>
                    <input type="password" className="form-control" placeholder="Enter password"/>
                </div>

                <div className="forms">
                    <label>Confirm Password:</label>
                    <input type="password" className="form-control" placeholder="Enter password again"/>
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