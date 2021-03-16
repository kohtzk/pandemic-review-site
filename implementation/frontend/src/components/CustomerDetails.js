import React from "react"


class CustomerDetails extends React.Component{
    convertToDots(){
        var pass = this.props.profileS.password
        var i
        var dots = ""
        for(i =0; i< pass.length; i++){
            dots +="#"
        }        
        //console.log(dots)
        return dots
    }
    //<p>Password: {this.props.profileS.password}</p>
    
    render(){
        console.log(this.convertToDots())
        return(
            <div className = "contact-card">
                <h1>Customer Profile</h1>
                <h3>Name: {this.props.profileS.name}</h3>
                <img src = {this.props.profileS.profilepic}/>
                <h3>Email: {this.props.profileS.email}</h3>                
                <p>Password: {this.convertToDots()}</p>
                <p>Number of reviews: {this.props.profileS.numberOfReviews}</p>
            
            </div>
        )

    }
}

export default CustomerDetails