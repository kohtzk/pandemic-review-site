import React from "react";
import "../pages/BusinessProperty.css";

class DispleBusinessAverageRating extends React.Component {
    constructor() {
        super();
    }

    render(){
        //console.log("Display Business Average Rating", this.props.displyBusinessAverageRating.data);
        return(
            <div className="DisplayBusinessAverageRating">
                <h1>Average Rating for the business</h1>
                <h1>One Way System Overall Rating: {this.props.displyBusinessAverageRating.data.oneway}</h1>
                <h1>Sanitizer Overall Rating: {this.props.displyBusinessAverageRating.data.sanitizer}</h1>
                <h1>Customers Wearing Masks In The Business Overall Rating: {this.props.displyBusinessAverageRating.data.mask_usage}</h1>
                <h1>Covid Bouncers Overall Rating: {this.props.displyBusinessAverageRating.data.bouncers}</h1>
                <h1>Temeperature Checking Overall Rating: {this.props.displyBusinessAverageRating.data.temperature_checking}</h1>
                <h1>Staff Wearing PPE Correctly Overall Rating: {this.props.displyBusinessAverageRating.data.staff_ppe}</h1>
                <h1>Social Distancing Overall Rating: {this.props.displyBusinessAverageRating.data.social_distancing}</h1>
                <h1>Ventilation Overall Rating: {this.props.displyBusinessAverageRating.data.ventilation}</h1>
            </div>
        )
    }
}

export default DispleBusinessAverageRating;