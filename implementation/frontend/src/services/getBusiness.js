export async function getBusiness(profileID) {
    //console.log(profileID);
    return fetch("http://localhost:3000/businessprofile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profileID),
    }).then((data) => data.json());
  }
  