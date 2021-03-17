export async function createBusiness(details) {
    console.log(details);
    return fetch("http://localhost:3000/newbusiness", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(details),
    }).then((data) => data.json());
}
