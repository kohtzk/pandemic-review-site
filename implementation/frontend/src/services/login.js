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