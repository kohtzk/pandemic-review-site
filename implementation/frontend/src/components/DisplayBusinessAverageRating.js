import React from "react";
import "../pages/BusinessProperty.css";

class DispleBusinessAverageRating extends React.Component {
    constructor() {
        super();
    }

    render(){
        //console.log("Display Business Average Rating", this.props.displyBusinessAverageRating.data);
        return(
            <div>
                <h1>{this.props.displyBusinessAverageRating.data.oneway}</h1>
                <h1>{this.props.displyBusinessAverageRating.data.sanitizer}</h1>
                <h1>{this.props.displyBusinessAverageRating.data.mask_usage}</h1>
                <h1>{this.props.displyBusinessAverageRating.data.bouncers}</h1>
                <h1>{this.props.displyBusinessAverageRating.data.temperature_checking}</h1>
                <h1>{this.props.displyBusinessAverageRating.data.staff_ppe}</h1>
                <h1>{this.props.displyBusinessAverageRating.data.social_distancing}</h1>
                <h1>{this.props.displyBusinessAverageRating.data.ventilation}</h1>
            </div>
        )
    }
}

export default DispleBusinessAverageRating;