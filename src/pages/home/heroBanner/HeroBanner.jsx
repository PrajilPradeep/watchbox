import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import "./style.scss";
const HeroBanner = () => {
  const [query, setQuery] = useState("");
  const [background, setBackground] = useState("");
  const navigate = useNavigate();
  const { data, loading } = useFetch("/movie/upcoming");

  useEffect(() => {
    const bgUrl =
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bgUrl);
  }, [data]);

  function searchQueryHandler(e) {
    if (e.key === "Enter" && query.length > 0) {
      console.log("working");
      navigate("/search/${query}");
    }
  }
  return (
    <div className="hero-banner">
      <div className="hero-banner-content">
        <div className="title">Welcome</div>
        <div className="subtitle">Discover a World of Entertainment</div>
        <input
          type="text"
          placeholder="Search for a movie or a tv show"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyUp={searchQueryHandler}
        />
        <button className="search-button">Search</button>
      </div>
    </div>
  );
};

export default HeroBanner;
