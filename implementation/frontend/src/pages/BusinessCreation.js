import React from "react";
import CreationHeader from "../components/CreationHeader";
import BusinessForms from "../components/BusinessForms";
import "./style.css";
import Navbar from "../components/Navbar.js";

function BusinessCreation() {
  return (
    <><Navbar />
    <div className="creation-outer">
        <div className ="creation-inner">
            <CreationHeader />
            <BusinessForms />
        </div>
    </div></>
  );
}

export default BusinessCreation;
