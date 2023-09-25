import Card from "@mui/material/Card";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./TrendingNow.module.css";

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
      <h2>Trending New</h2>

      <ul>
        {/* Map through trendingData and display list items */}
        <Carousel
          interval={2000}
          infiniteLoop={true}
          showThumbs={false}
          showArrows={true}
          autoPlay={true}
        >
          {trendingData.map((item) => (
            <Card
              key={item.id}
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "20px",
                margin: "20px",
                backgroundColor: "black",
                display: "flex",
                flexDirection: "column"
              }}
            >
              <img src={item.thumbnail} alt={item.title} />
              <li key={item.id}>{item.title}</li>
            </Card>
          ))}
        </Carousel>
      </ul>
    </div>
  );
};

export default TrendingNow;
