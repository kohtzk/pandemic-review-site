import React from "react";
import "../pages/BusinessProperty.css";

class DispleBusinessAverageRating extends React.Component {
    constructor() {
        super();
    }

    render(){
        return(
            <div>
                <h1>{this.props.displyBusinessAverageRating.oneway}</h1>
                <h1>{this.props.displyBusinessAverageRating.sanitizer}</h1>
                <h1>{this.props.displyBusinessAverageRating.mask_usage}</h1>
                <h1>{this.props.displyBusinessAverageRating.bouncers}</h1>
                <h1>{this.props.displyBusinessAverageRating.temperature_checking}</h1>
                <h1>{this.props.displyBusinessAverageRating.staff_ppe}</h1>
                <h1>{this.props.displyBusinessAverageRating.social_distancing}</h1>
                <h1>{this.props.displyBusinessAverageRating.ventilation}</h1>
            </div>
        )
    }
}

export default DispleBusinessAverageRating;