export async function getReviews(reviews) {
    //console.log(profileID);
    return fetch("http://localhost:3000/getreviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviews),
    }).then((data) => data.json());
  }