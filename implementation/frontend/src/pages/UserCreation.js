import React from "react";
import CreationHeader from "../components/CreationHeader";
import UserForms from "../components/UserForms";
import "./style.css";
import Navbar from "../components/Navbar.js";

function UserCreation() {
  return (
    <><Navbar /><div className="creation-outer">
        <div className="creation-inner">
            <CreationHeader />
            <UserForms />
        </div>
    </div></>
  );
}

export default UserCreation;
