import React from "react";
import CreationHeader from "../components/CreationHeader";
import UserForms from "../components/UserForms";
import "./style.css";

function UserCreation() {
  return (
    <div className="creation-outer">
        <div className="creation-inner">
            <CreationHeader />
            <UserForms />
        </div>
    </div>
  );
}

export default UserCreation;
