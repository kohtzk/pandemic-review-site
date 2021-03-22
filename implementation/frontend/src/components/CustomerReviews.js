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
        // console.log("inside review props")
        // console.log(this.state.reviewS)
        return(
            <div className = "reviewSeperator">
                {/* <div className = "header">
                    <h2 style = {{fontWeight: 'bold'}}> Review details</h2>
                </div> */}

                <div className = "card2">                    
                    <h3 className = "details">Business Name: {this.props.reviewS.business_name}</h3>
                    <h3 className = "details">Date of Review: {this.props.reviewS.date}</h3>
                    <p className = "details">Review text: {this.props.reviewS.text}</p>
                    {/* <button click={this.handleClick}>Delete Review</button>               */}
                </div>
            </div>
            
    
        )
    }   
        
    
}


export default CustomerReviews