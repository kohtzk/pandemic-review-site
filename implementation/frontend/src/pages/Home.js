import React from "react";
import BusinessSearchCard from "../components/BusinessSearchCard.js";

function Home() {
  const businesses = [
    {
      name: "The Whole Bagel",
      location: "Upper Borough Walls",
      rating: "5",
      type: "food",
    },
    {
      name: "Lush",
      location: "Union St.",
      rating: "5",
      type: "cosmetics",
    },
    {
      name: "The Whole Bagel",
      location: "Upper Borough Walls",
      rating: "5",
      type: "food",
    },
    {
      name: "Lush",
      location: "Union St.",
      rating: "5",
      type: "cosmetics",
    },
    {
      name: "The Whole Bagel",
      location: "Upper Borough Walls",
      rating: "5",
      type: "food",
    },
    {
      name: "Lush",
      location: "Union St.",
      rating: "5",
      type: "cosmetics",
    },
    {
      name: "The Whole Bagel",
      location: "Upper Borough Walls",
      rating: "5",
      type: "food",
    },
    {
      name: "Lush",
      location: "Union St.",
      rating: "5",
      type: "cosmetics",
    },
    {
      name: "The Whole Bagel",
      location: "Upper Borough Walls",
      rating: "5",
      type: "food",
    },
    {
      name: "Lush",
      location: "Union St.",
      rating: "5",
      type: "cosmetics",
    },
    {
      name: "The Whole Bagel",
      location: "Upper Borough Walls",
      rating: "5",
      type: "food",
    },
    {
      name: "Lush",
      location: "Union St.",
      rating: "5",
      type: "cosmetics",
    },
  ];
  return (
    <div className="container">
      <div className="leftColumn">
        <ul className="searchResults">
          {businesses.map((bus) => (
            <li>
              <BusinessSearchCard
                name={bus.name}
                location={bus.location}
                rating={bus.rating}
                type={bus.type}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="rightColumn">
        <h1> MAP BIT </h1>
      </div>
    </div>
  );
}

export default Home;
