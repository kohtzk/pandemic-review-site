import "./App.css";
import Login from "./pages/Login.js";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Home from "./pages/Home.js";
import CustomerProfilePage from "./pages/CustomerProfilePage.js";
import AddCustomerReview from "./pages/AddCustomerReview.js";
import UserCreation from "./pages/UserCreation.js";
import BusinessCreation from "./pages/BusinessCreation.js";
import Priv_BusinessProfilePage from "./pages/Priv_BusinessProfilePage.js";
import ViewBusinessProperty from "./pages/ViewBusinessProperty.js";
import loginService from "./services/login.js";
import { useEffect, useState } from "react";

<script
  src="//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"
  type="text/javascript"
></script>;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/c-profile" component={CustomerProfilePage} />
          <Route path="/b-profile" component={Priv_BusinessProfilePage} />
          <Route path="/add-review" component={AddCustomerReview} />
          <Route path="/c-account-creation" component={UserCreation} />
          <Route path="/b-account-creation" component={BusinessCreation} />
          <Route path="/view-b" component={ViewBusinessProperty} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
