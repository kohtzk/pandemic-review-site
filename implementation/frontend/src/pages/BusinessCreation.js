import React from "react";
import CreationHeader from "../components/CreationHeader";
import BusinessForms from "../components/BusinessForms";
import "./style.css";

function BusinessCreation() {
  return (
    <div className="creation-outer">
        <div className ="creation-inner">
            <CreationHeader />
            <BusinessForms />
        </div>
    </div>
  );
}

export default BusinessCreation;
