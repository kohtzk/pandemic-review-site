import React from "react"

class BussinessDetails extends React.Component{

    convertToDots(){
        var pass = this.props.B_profileS.password
        var i
        var dots = ""
        for(i =0; i< pass.length; i++){
            dots +="#"
        }        
        //console.log(dots)
        return dots
    }

    render(){
        return(
            <div>
                <h1> PRIVATE Bussiness Profile </h1>
                <h3>Name: {this.props.B_profileS.name}</h3>
                <img src = {this.props.B_profileS.profilePic}/>
                <h3>Email: {this.props.B_profileS.email}</h3>
                <p>Paaword: {this.convertToDots()}</p>
                <h3>Bussiness Name: {this.props.B_profileS.bussinessName}</h3>
                <h3>Location: {this.props.B_profileS.location}</h3>
            </div>
        )
    }

}

export default BussinessDetails