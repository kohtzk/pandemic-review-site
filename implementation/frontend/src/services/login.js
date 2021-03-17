class LoginService {
  constructor() {
    this.token = null;
  }

  async loginUser(credentials) {
    return fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Accept": "application/json",
      },
      body: JSON.stringify(credentials),
    }).then((data) => data.json()).then((data) => {
      if (data.success == true) {
        this.token = data.token;
      }
    });
  }
}

export default new LoginService();