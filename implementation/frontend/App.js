import * as React from "react";
import "./App.css";
import BusinessProperty from  "./BusinessProperty";
import businessData from "./businessData";

class App extends React.Component{

  constructor(){
    super();
    this.state = {
      data: businessData
    };
  }

  render(){
    const businesses = this.state.data.map(business => <BusinessProperty key={business.id} business={business}/>)

    return(
      <div>
        {businesses}
      </div>
    );
  }
} 

export default App;
