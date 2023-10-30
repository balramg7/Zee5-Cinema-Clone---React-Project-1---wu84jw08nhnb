import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import styles from "./ContentDetails.module.css";
import { FcAddDatabase } from "react-icons/fc";
import { TiTick } from "react-icons/ti";

const ContentDetails = ({ addToWatchlist }) => {
  const [content, setContent] = useState(null);
  const { _id } = useParams();
  const [isAddedToWatchlist, setIsAddedToWatchlist] = useState(false); // Step 1

  useEffect(() => {
    const fetchContentDetails = async () => {
      try {
        const response = await fetch(
          `https://academics.newtonschool.co/api/v1/ott/show/${_id}`,
          {
            headers: {
              projectId: "wu84jw08nhnb",
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          setContent(data.data);
        } else {
          // Handle the error if needed
          console.error("Error fetching content details");
        }
      } catch (error) {
        console.error("Error fetching content details:", error);
      }
    };

    fetchContentDetails();
  }, [_id]);

  const handleAddToWatchlist = () => {
    if (!isAddedToWatchlist) {
      addToWatchlist(content);
    }
    setIsAddedToWatchlist(!isAddedToWatchlist);
  };

  return (
    <div className={styles.content_page}>
      {content === null ? (
        <p>Loading...</p>
      ) : content ? (
        <div style={{ margin: "0px" }}>
          <ReactPlayer
            url={content.video_url}
            controls={true}
            muted={true}
            pip={true}
            width={"1000px"}
            height={"500px"}
            style={{
              margin: "0px",
              border: "1px solid transparent",
            }}
          />
          <h2 className={styles.content_title}>{content.title}</h2>
          <div className={styles.content_description}>
            {content.description}
          </div>
          <div className={styles.content_section}>
            <div className={styles.content_keyword}>
              {content.keywords[0]}, {content.keywords[1]},{" "}
              {content.keywords[2]}
            </div>
            <div className={styles.content_year}>{content.createdAt}</div>
          </div>

          <div className={styles.content_author}>
            Cast: {content.cast[0]}, {content.cast[1]}, {content.cast[2]}
          </div>

          <button className={styles.content_btn} onClick={handleAddToWatchlist}>
            {isAddedToWatchlist ? (
              <span>
                <TiTick /> Watchlist
              </span>
            ) : (
              <span>
                <FcAddDatabase /> Watchlist
              </span>
            )}
          </button>
        </div>
      ) : (
        <p>No content available</p>
      )}
    </div>
  );
};

export default ContentDetails;
