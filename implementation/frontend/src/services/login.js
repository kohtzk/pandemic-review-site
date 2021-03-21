import React from "react";

class LoginService extends React.Component {
  constructor() {
    super()
    this.state = {}
    // this.state = {
    //   token : null
    // }
    // //MAYBE ADD BINDING
    this.loginUser =  this.loginUser.bind(this)
  }

  // async loginUser(credentials) {
  //   console.log("called loginUser")
  //   return fetch("http://localhost:3000/login", {
  //     method: "POST",
  //     headers: {
  //       "Accept": "application/json",
  //     },
  //     body: JSON.stringify(credentials),
  //   }).then((data) => data.json()).then((data) => {
  //     if (data.success == true) {
  //       console.log("assiging the loginUser to: ", data.token)
  //       this.token = data.token;
  //     }
  //   });
  // }

  async loginUser(credentials) {
    console.log("called loginUser and sending", credentials)
    return fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }).then((response) => response.json()).then((response) => {
      console.log("respones: ", response)
      if (response.message == "success") {
        console.log("assiging the loginUser to: ", response.data.user_id)
        //this.setState({token : response.data.user_id})
        this.state.token = response.data.user_id
      }
    });
  }
}

export default new LoginService();