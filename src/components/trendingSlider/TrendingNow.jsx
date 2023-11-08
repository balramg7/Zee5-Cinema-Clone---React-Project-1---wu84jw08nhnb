import Card from "@mui/material/Card";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./TrendingNow.module.css";
import axiosInstance from "../../services/axiosInstance";
const TrendingNow = () => {
  const [trendingData, setTrendingData] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/ott/show?page=${page}&limit=${limit}")
      .then((response) => {
        setTrendingData(response.data.data);
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  }, []);

  // console.log(trendingData);
  return (
    <div className={styles.trending_section}>
      <h2>Trending New</h2>

      <ul>
        {/* Map through trendingData and display list items */}
        <Carousel
          className={styles.trending_carousel}
          interval={2000}
          infiniteLoop={true}
          showThumbs={false}
          stopOnHover={false}
          autoPlay={true}
          showStatus={false}
          width={"100%"}
          showIndicators={false}
          centerMode
          centerSlidePercentage={30}
          useKeyboardArrows
        >
          {trendingData.map((item) => (
            <Card
              key={item._id}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                margin: "5px",
                backgroundColor: "transparent",
                height: "100%",
                width: "70%",
                fontSize: "10px",
                
              }}
            >
              <img src={item.thumbnail} alt={item.title} />
              <p key={item._id}>{item.title}</p>
            </Card>
          ))}
        </Carousel>
      </ul>
    </div>
  );
};

export default TrendingNow;
