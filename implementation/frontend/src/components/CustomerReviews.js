import React from "react"

class CustomerReviews extends React.Component{

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
        console.log(this.state.submit)
        return(
            <div className = "contact-card">
                <h2> Review details</h2>
                <h3>Business Name: {this.props.reviewS.BusinessName}</h3>
                <h3>Date of Review: {this.props.reviewS.reviewDate}</h3>
                <p>Review text: {this.props.reviewS.reviewText}</p>
                <button Click={this.handleClick}>Delete Review</button>              
            </div>
    
        )
    }   
        
    
}


export default CustomerReviews