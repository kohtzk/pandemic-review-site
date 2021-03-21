export async function getAverageReview(reviewID){
    return fetch("http://localhost:3000/averagereview", {
        method:"POST",
        headers:{
            "Content-Type": "application.json",
        },
        body: JSON.stringify(reviewID),
    }).then((data) => data.json());
}