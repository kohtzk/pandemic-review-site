export async function createCustomer(details) {
    console.log(details);
    return fetch("http://localhost:3000/newaccount", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(details),
    }).then((data) => data.json());
}
