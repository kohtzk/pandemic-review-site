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
    
    // render(){
    //     //console.log(this.convertToDots())
    //     return(
    //         <div className = "contact-card">
    //             <h1>Customer Profile</h1>
    //             <h3>Name: {this.props.profileS.name}</h3>
    //             <img src = {this.props.profileS.profilepic}/>
    //             <h3>Email: {this.props.profileS.email}</h3>                
    //             <p>Password: {this.convertToDots()}</p>
    //             <p>Number of reviews: {this.props.profileS.numberOfReviews}</p>
            
    //         </div>
    //     )

    // }

    render(){
        //console.log("props inside")
        //console.log(this.props.profileS)
        return(
            <div>
                <div className = "header">
                    <h1 style = {{fontWeight: 'bold'}}>Customer Profile</h1>
                </div>
                
                <div className = "profilePic">
                    {/* <img src = "https://image.flaticon.com/icons/png/512/64/64495.png"/> */}
                    <img src = "https://image.flaticon.com/icons/png/128/1946/1946429.png"/>
                    
                </div>

                <div className = "card">
                    
                    <h3 className = "details">Name: {this.props.profileS.data.name}</h3>
                    <h3 className = "details">Username: {this.props.profileS.data.username}</h3>
                    <h3 className = "details">Email: {this.props.profileS.data.email}</h3>                
                </div>

                <div className = "header">
                    <h2 style = {{fontWeight: 'bold'}}> Review details</h2>
                </div>
            </div>
            
        )

    }
}

export default CustomerDetails