import styles from "./WatchList.module.css";
import React, { useEffect, useState } from "react";

const WatchList = () => {
  const [watchlist, setWatchlist] = useState([]);
  const jwtToken =
    "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJiYWxyYW1ndXB0YTc1MzRAZ21haWwuY29tIiwiaWF0IjoxNjg3ODQ0MDI4LCJleHAiOjE2ODc5MzA0Mjh9.l-y_CEt2NTMjH074P6rYm8OWRgNSGRfke3NbrCKIKSE";
  const projectID = "wu84jw08nhnb";

  useEffect(() => {
    const fetchWatchlist = async () => {
      try {
        const response = await fetch(
          "https://academics.newtonschool.co/api/v1/ott/watchlist/like",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${jwtToken}`,
              projectID: projectID,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setWatchlist(data); // Update the watchlist state with received data
        } else {
          console.error("Error fetching watchlist:", response.status);
        }
      } catch (error) {
        console.error("Error fetching watchlist:", error);
      }
    };

    fetchWatchlist();
  }, []); // The empty dependency array ensures this effect runs only once

  const removeFromWatchlist = (showId) => {
    setWatchlist(watchlist.filter((item) => item.showId !== showId));
  };
console.log(watchlist.data);
  return (
    <div className={styles.watchlist_div}>
      <h2 className={styles.watchlist_heading}>My Watchlist</h2>
      {watchlist && watchlist.length > 0 ? (
        <ul>
          {watchlist.map((item) => (
            <li key={item.showId}>
              {item.showName}
              <button onClick={() => removeFromWatchlist(item.showId)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.watchlist_p}>Your watchlist is empty.</p>
      )}
    </div>
  );
};

export default WatchList;
