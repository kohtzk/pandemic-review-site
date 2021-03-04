import "./App.css";
import Login from "./pages/Login.js";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/Home.js";

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
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
