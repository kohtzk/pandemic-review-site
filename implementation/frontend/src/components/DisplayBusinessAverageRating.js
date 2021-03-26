import { parse } from "ipaddr.js";
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
                <h1>One Way System Overall Rating: {parseFloat(this.props.displyBusinessAverageRating.data.oneway).toFixed(2)}</h1>
                <h1>Sanitizer Overall Rating: {parseFloat(this.props.displyBusinessAverageRating.data.sanitizer).toFixed(2)}</h1>
                <h1>Customers Wearing Masks In The Business Overall Rating: {parseFloat(this.props.displyBusinessAverageRating.data.mask_usage).toFixed(2)}</h1>
                <h1>Covid Bouncers Overall Rating: {parseFloat(this.props.displyBusinessAverageRating.data.bouncers).toFixed(2)}</h1>
                <h1>Temeperature Checking Overall Rating: {parseFloat(this.props.displyBusinessAverageRating.data.temperature_checking).toFixed(2)}</h1>
                <h1>Staff Wearing PPE Correctly Overall Rating: {parseFloat(this.props.displyBusinessAverageRating.data.staff_ppe).toFixed(2)}</h1>
                <h1>Social Distancing Overall Rating: {parseFloat(this.props.displyBusinessAverageRating.data.social_distancing).toFixed(2)}</h1>
                <h1>Ventilation Overall Rating: {parseFloat(this.props.displyBusinessAverageRating.data.ventilation).toFixed(2)}</h1>
            </div>
        )
    }
}

export default DispleBusinessAverageRating;