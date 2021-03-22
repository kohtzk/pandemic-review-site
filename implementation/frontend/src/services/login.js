class LoginService {
  constructor() {
    this.token = null
  }

  async loginUser(credentials) {
    console.log("Attempting to log in user with credentials: ", credentials)

    return fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      })
      .then((response) => response.json())
      .then((response) => {
        console.log("Response: ", response)
        if (response.message == "success") {
          console.log("Login succeeded for user with ID", response.data.user_id)
          this.token = response.data.user_id
        } else {
          console.log("Login failed, response: ", response)
        }
      });
  }
}

export default new LoginService();

// //ATTEMPT1 BUT FAILED COZ IT FUCKED UP THE NAVBAR 
// //Including the token for the business id -------------
// import {getProfile} from "../services/getProfile";

// class LoginService {
//   constructor() {
//     this.User_token = null
//     this.Business_token = null
//   }

//   async loginUser(credentials) {
//     console.log("Attempting to log in user with credentials: ", credentials)

//     return fetch("http://localhost:3000/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(credentials),
//       })
//       .then((response) => response.json())
//       .then((response) => {
//         console.log("Response: ", response)
//         if (response.message == "success") {
//           console.log("Login succeeded for user with ID", response.data.user_id)
//           this.User_token = response.data.user_id
//         } else {
//           console.log("Login failed, response: ", response)
//         }
//         //calling the for the profile data to get the corresponding businessid
//         this.getUserData()

//       });
//   }

//   async getUserData(){
//         await getProfile({"user_id" : this.User_token})
//         .then((response) => {
//           console.log("response: ", response) 

//           if (response.message !== 'success') {
//             alert("customer profile data read failed");
//           } else if (response.message == "success") {
//             this.Business_token = response.business_id
//           }
         
//         });
//   }
// }

// export default new LoginService();