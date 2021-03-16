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

<script
  src="//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"
  type="text/javascript"
></script>;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/c-profile">
            <CustomerProfilePage />
          </Route>
          <Route path="/b-profile">
            <Priv_BusinessProfilePage />
          </Route>
          <Route path="/add-review">
            <AddCustomerReview />
          </Route>
          <Route path="/c-account-creation">
            <UserCreation />
          </Route>
          <Route path="/b-account-creation">
            <BusinessCreation />
          </Route>
          <Route path="/view-b">
            <ViewBusinessProperty />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
