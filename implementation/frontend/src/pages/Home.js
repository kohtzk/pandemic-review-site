import React, { useEffect, useState } from "react";
import BusinessSearchCard from "../components/BusinessSearchCard.js";
import "./Home.css";
import { businessSearch } from "../services/home.js";
import Navbar from "../components/Navbar.js";

function Home() {
  const [businesses, setBusinesses] = useState([]);
  const [searchQuery, setSearchQuery] = useState("shops in bath");
  const fetchData = async () => {
    await businessSearch(searchQuery).then((response) =>
      setBusinesses(response)
    );
  };
  useEffect(fetchData, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="leftColumn">
          <ul className="searchResults">
            {businesses.map((bus) => (
              <li key={bus.business_id}>
                <BusinessSearchCard
                  id={bus.business_id}
                  name={bus.business_name}
                  location={bus.location}
                  rating={bus.rating}
                  type={bus.type}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="rightColumn">
          <div className="searchBarButton">
            <input
              className="searchBar"
              placeholder="Type to search locations and businesses..."
              type="text"
              onChange={(e) => setSearchQuery(e.target.value)}
            ></input>
            <div>
              <button className="searchButton" onClick={fetchData}>
                Search
              </button>
            </div>
          </div>
          <iframe
            className="mapElem"
            frameBorder="0"
            styles="border:0"
            src="https://www.google.com/maps/embed/v1/search?key=AIzaSyBWYTh2WMhAw_I_6FfL8C9HI2vKyjC4-aQ&q=shops+in+Bath&zoom=16"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Home;
