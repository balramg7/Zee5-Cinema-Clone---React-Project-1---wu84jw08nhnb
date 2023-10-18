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

    fetch(apiUrlTrending, { headers: { projectId: "wu84jw08nhnb" } })
      .then((response) => response.json())
      .then((data) => setTrendingData(data.data));
  }, []);

  return (
    <div className={styles.trending_section}>
      <h2>Trending New</h2>

      <ul className={styles.trending_card}>
        {/* Map through trendingData and display list items */}
        <Carousel
          interval={2000}
          infiniteLoop={true}
          showThumbs={false}
          stopOnHover={false}
          autoPlay={true}
          showStatus={false}
          // width={"100%"}
          showIndicators={false}
          centerMode
          centerSlidePercentage={30}
        >
          {trendingData.map((item) => (
            <Card
              key={item.id}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                margin: "10px",
                backgroundColor: "transparent",
                height: "100%",
                width: "70%",
                color: "whitesmoke",
                fontSize: "10px"
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
