import styles from "./WatchList.module.css";
import React, { useEffect, useState } from "react";
import axiosInstance from "../../services/axiosInstance";
import { Card } from "@chakra-ui/react";

const WatchList = ({ userToken, watchlist, setWatchlist }) => {
  // const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const fetchWatchlist = async () => {
      try {
        const response = await axiosInstance.get("/watchlist", {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });

        if (response.status !== 200) {
          const data = response.data;
          setWatchlist(data.data);
        } else {
          console.error("Error fetching watchlist:", response.status);
        }
      } catch (error) {
        console.error("Error fetching watchlist:", error);
      }
    };

    fetchWatchlist();
  }, [userToken]);

  const removeFromWatchlist = (_id) => {
    setWatchlist(watchlist.filter((item) => item._id !== _id));
  };

  
  
  return (
    <div className={styles.watchlist_div}>
      <h2 className={styles.watchlist_heading}>My Watchlist</h2>
      {watchlist && watchlist.length > 0 ? (
        <ul className={styles.watchlist_section}>
          {watchlist.map((item) => (
            <Card
              className={styles.watchlist_card}
              key={item._id}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                margin: "10px",
                backgroundColor: "transparent",
                height: "30%",
                width: "20%",
                color: "whitesmoke",
                fontSize: "10px",
              }}
            >
              <img src={item.thumbnail} alt={item.title} />
              <p key={item._id}>{item.title}</p>
              <button onClick={() => removeFromWatchlist(item._id)}>
                Remove
              </button>
            </Card>
          ))}
        </ul>
      ) : (
        <p className={styles.watchlist_p}>Your watchlist is empty.</p>
      )}
    </div>
  );
};

export default WatchList;
