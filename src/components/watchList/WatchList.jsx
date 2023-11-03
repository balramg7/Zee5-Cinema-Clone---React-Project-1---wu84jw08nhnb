import styles from "./WatchList.module.css";
import React, { useEffect} from "react";
import axiosInstance from "../../services/axiosInstance";

const WatchList = ({ watchlist }) => {
  // const [watchlist, setWatchlist] = useState([]);
  const jwtToken =
    "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJiYWxyYW1ndXB0YTc1MzRAZ21haWwuY29tIiwiaWF0IjoxNjg3ODQ0MDI4LCJleHAiOjE2ODc5MzA0Mjh9.l-y_CEt2NTMjH074P6rYm8OWRgNSGRfke3NbrCKIKSE";
  

  useEffect(() => {
    const fetchWatchlist = async () => {
      try {
        const response = await axiosInstance.get("/watchlist/like", {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
            
          },
        });

        if (response.status === 200) {
          const data = response.data;
          setWatchlist(data);
        } else {
          console.error("Error fetching watchlist:", response.status);
        }
      } catch (error) {
        console.error("Error fetching watchlist:", error);
      }
    };

    fetchWatchlist();
  }, [jwtToken]);

  const removeFromWatchlist = (showId) => {
    setWatchlist(watchlist.filter((item) => item.showId !== showId));
  };
  console.log(watchlist);
  return (
    <div className={styles.watchlist_div}>
      <h2 className={styles.watchlist_heading}>My Watchlist</h2>
      {watchlist && watchlist.length > 0 ? (
        <ul>
          {watchlist.map((item, index) => (
            <div key={index}>
            <li key={index}>{item.title}</li>
      </div>

          ))}
        </ul>
        
      ) : (
        <p className={styles.watchlist_p}>Your watchlist is empty.</p>
      )}
      <button onClick={() => removeFromWatchlist(item.showId)}>Remove</button>

    </div>
  );
};

export default WatchList;
