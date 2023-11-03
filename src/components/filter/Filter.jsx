import React, { useEffect, useState } from "react";
import axiosInstance from "../../services/axiosInstance";

const Filter = () => {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [sortingOption, setSortingOption] = useState("newestFirst");
  const [filteredShows, setFilteredShows] = useState([]);

  useEffect(() => {
    const fetchFilteredShows = async () => {
      const filterQuery = { genre: selectedGenres, sort: sortingOption };

      try {
        const response = await axiosInstance.get("", {
          params: { filter: JSON.stringify(filterQuery) },
        });
        if (response.status === 200) {
          setFilteredShows(response.data);
        } else {
          console.error("Failed to fetch data.");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchFilteredShows();
  }, [selectedGenres, sortingOption]);

  const handleGenreChange = (genre) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter((g) => g !== genre));
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  return (
    <div>

      {/* Genre Filters */}
      <div>
        <h2>Genre Filters</h2>
        <label>
          <input
            type="checkbox"
            value="action"
            checked={selectedGenres.includes("action")}
            onChange={(e) => handleGenreChange(e.target.value)}
          />
          Action
        </label>
        {/* Repeat similar labels for other genres (comedy, drama, thriller, etc.) */}
      </div>

      {/* Sorting Options */}
      <div>
        <h2>Sort By</h2>
        <select
          value={sortingOption}
          onChange={(e) => setSortingOption(e.target.value)}
        >
          <option value="newestFirst">Newest First</option>
          <option value="topRated">Top Rated</option>
          <option value="alphabetical">Alphabetical Order</option>
        </select>
      </div>

      {/* Display Filtered Shows */}
      <div>
        <h2>Filtered Shows</h2>
        <ul>
          {filteredShows.map((show) => (
            <li key={show._id}>{show.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Filter;
