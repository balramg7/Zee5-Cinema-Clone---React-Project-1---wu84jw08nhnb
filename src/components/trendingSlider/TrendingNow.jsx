import React, { useEffect, useState } from "react";
import styles from "./TrendingNow.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Card from "@mui/material/Card";

const TrendingNow = () => {
  const [trendingData, setTrendingData] = useState([]);

  useEffect(() => {
    const apiUrlTrending =
      "https://academics.newtonschool.co/api/v1/ott/show?page=1&limit=10";

    fetch(apiUrlTrending, { headers: { projectId: "f104bi07c490" } })
      .then((response) => response.json())
      .then((data) => setTrendingData(data.data));
  }, []);

  return (
    <div className={styles.trending_section}>
      <Carousel
        
      >
        <h2>Trending New</h2>

        <ul>
          {/* Map through trendingData and display list items */}
          {trendingData.map((item) => (
            <Card
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "20px",
                margin: "10px",
                height:"650px",
                width: "150%"
              }}
            >
              <div key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <li key={item.id}>{item.title}</li>
              </div>
            </Card>
          ))}
        </ul>
      </Carousel>
    </div>
  );
};

export default TrendingNow;
