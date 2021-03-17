export async function getProfile(profileID) {
    //console.log(profileID);
    return fetch("http://localhost:3000/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profileID),
    }).then((data) => data.json());
  }
  