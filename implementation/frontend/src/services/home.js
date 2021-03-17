export async function businessSearch(query) {
    return fetch("http://localhost:3000/businesses?q=" + encodeURIComponent(query), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((data) => data.json());
  }
  