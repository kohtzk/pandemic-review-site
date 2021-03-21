export async function getAverageReview(reviewID){
    console.log("I have been here", reviewID);
    return fetch("http://localhost:3000/averagereview", {
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(reviewID),
    }).then((data) => data.json());
}