import React from "react"

class BussinessReviews extends React.Component{
    constructor() {
        super()
        this.state = {
            submit: false
        }
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick() {
        this.setState(prevState => {
            return {
                submit: true //NOT SUPPOSED TO ALTER DIRECTLY... 
                //CHECK OUT: https://scrimba.com/learn/learnreact/react-todo-app-phase-61--cMqr68Sr
            }
        })
    }
    render(){
        //console.log(this.state.submit)
        return(
            <div className = "contact-card">
                <h2> Review details</h2>
                <h3>CustumorID: {this.props.B_reviewS.CustomerID}</h3>
                <h3>Date of Review: {this.props.B_reviewS.reviewDate}</h3>
                <p>Review text: {this.props.B_reviewS.reviewText}</p>
                <button Click={this.handleClick}>Delete Review</button>              
            </div>
    
        )
        //NEED TO ADD IN THE REVIEW DETAILS COMPNENT LATER!!!!
    }   



}

export default BussinessReviews