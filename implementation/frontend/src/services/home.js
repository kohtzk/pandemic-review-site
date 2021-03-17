export async function businessSearch() {
    return fetch("https://maps.googleapis.com/maps/api/place/textsearch/xml?query=stores+in+Bath&key=AIzaSyBWYTh2WMhAw_I_6FfL8C9HI2vKyjC4-aQ", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((data) => data.json());
  }
  