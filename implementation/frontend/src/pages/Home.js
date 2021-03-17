import React from "react";
import BusinessSearchCard from "../components/BusinessSearchCard.js";
import "./Home.css";

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
        <div>
          <input
            className="searchBar"
            placeholder="Type to search locations and businesses..."
            type="text"
          ></input>
        </div>
        {/* <img style={{ height: "100%" }} src="/images/mapPlaceholder.jpg" /> */}
        <iframe
          className="mapElem"
          frameborder="0" styles="border:0"
          src="https://www.google.com/maps/embed/v1/search?key=AIzaSyBWYTh2WMhAw_I_6FfL8C9HI2vKyjC4-aQ&q=shops+in+Bath&zoom=16">
        </iframe>
      </div>
    </div>
  );
}

export default Home;
