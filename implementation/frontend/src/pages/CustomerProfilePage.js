import React from "react";

import CustomerDetails from "../components/CustomerDetails";
import CustomerReviews from "../components/CustomerReviews";
import customerData from "../components/customerData";
import reviewData from "../components/reviewData";
import "./style2.css"; 

import { getProfile } from "../services/getProfile";
import{ getReviews } from "../services/getReviews";

import LoginService from "../services/login";
 
class CustomerProfilePage extends React.Component {
  constructor() {
    super();
    this.state = {
      //customerID: LoginService.token,
      customerID : null,
      got_customerData : null,
      got_reviewData : null,
      numOfReviews : 3
    };

    //BINDINGS
    //this.handleClick = this.handleClick.bind(this)
    this.setID = this.setID.bind(this)
  }

  async componentDidMount() {
    console.log("In componentDidMount")
    this.setID()
    this.getData()


    // try {
    //   console.log("In try")
    //   //this.setID()
    //   this.setState({customerID : 1}) //DOING A HARD CODED TEST
    //   console.log("customerID", this.state.customerID)
    //   await getProfile({"id" : this.state.customerID})
    //   .then((response) => {

    //     if (response.message !== 'success') {
    //       alert("customer profile data read failed");
    //     }
    //     else if (response.message === 'success'){
    //       console.log("got_customerData: ",response);
    //       this.setState({got_customerData:response});
    //     }     

    //   }); 
      
    //   await getReviews({"user_id" : this.state.customerID, "business_id": null})
    //   .then((response) => {
    //     if (response.message !== 'success') {
    //       alert("customer review data read failed");
    //     }
    //     else if (response.message === 'success'){

    //       this.setState({got_reviewData:response});
    //     }   
        
    //   }); 
    // }
    // catch(TypeError){
    //   alert("cant access profile page till have logged in");
    // }
    
  }

  async getData(){
    try {
      console.log("In try")
      //this.setState({customerID : 1}) //DOING A HARD CODED TEST
      console.log("customerID", this.state.customerID)
      await getProfile({"user_id" : this.state.customerID})
      .then((response) => {
        console.log("response: ", response) //THE DATABASE IS FAILING TO RETURN ANYTHING!?

        if (response.message !== 'success') {
          alert("customer profile data read failed");
        }
        else if (response.message === 'success'){
          console.log("got_customerData: ",response);
          this.setState({got_customerData:response});
        }     

      }); 
      
      await getReviews({"user_id" : this.state.customerID, "business_id": null})
      .then((response) => {
        console.log("respones: ", response)
        if (response.message !== 'success') {
          alert("customer review data read failed");
        }
        else if (response.message === 'success'){

          this.setState({got_reviewData:response});
        }   
        
      }); 
    }
    catch(TypeError){
      alert("cant access profile page till have logged in");
    }
  }

  setID(){
    console.log("customerID BEFORE: ",this.state.customerID)
    //this.setState({customerID : LoginService.token})
    //this.setState({customerID : 1})
    this.state.customerID = 9
    console.log("LoginService.token: ", LoginService.token)
    //this.state.customerID = LoginService.token
    console.log("customerID AFTER: ",this.state.customerID)
  }

  

  render() {

    //console.log("this.state.got_reviewData");
    //console.log(this.state.got_reviewData);
    
    
    // const custProfile_component = this.state.custD.map((profile) => (
    //   <CustomerDetails key={profile.id} profileS={profile} />
    // ));

    //FAIL ATTEMPT
    // const custProfile_component = this.state.data.map((profile) => (
    //   <CustomerDetails key={profile.id} profileS={profile} />
    // ));
    
    // return (
    //   <div className = "body_Profilepage">
    //     <div className = "inner">{custProfile_component[1]}</div>
    //     <div className = "inner">{custProfileReview_component}</div>
    //   </div>
    // );
    

      if ( this.state.got_customerData == null || this.state.got_reviewData == null){
        console.log("loading data")
        //this.setID() CANT PUT THIS HERE BECAUSE IT GETS CALLED TOO MUCH
        return(null)
      }
      //ADD IN A CHECK THAT THE USER HAS BEEN LOGGED IN BY TESTING THE CUSTOMER ID      
      else if(this.state.got_customerData != null && this.state.got_reviewData != null){ 

        const custProfileReview_array = this.state.got_reviewData.data.map((review) => (
          <CustomerReviews key={review.review_id} reviewS={review} />
        ));

        let n = this.state.numOfReviews;
    
        return(
          <div className = "body_Profilepage">
            <div className = "inner">
                <CustomerDetails 
                profileS = {this.state.got_customerData}
              />
            </div>
            <div className = "inner">
                {/* <CustomerReviews
                reviewS = {this.state.got_reviewData.data}
              /> */}
              {custProfileReview_array}
              

            </div>
          </div>

        )      

      } 
       
    
  }
}
export default CustomerProfilePage;
