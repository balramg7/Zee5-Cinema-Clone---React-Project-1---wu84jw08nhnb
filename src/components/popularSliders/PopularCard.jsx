import React, { useEffect, useState } from "react";
import styles from "./PopularCard.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Card from "@mui/material/Card";

const PopularCard = () => {
  const [popularData, setPopularData] = useState([]);

  useEffect(() => {
    const apiUrlPopular =
      "https://academics.newtonschool.co/api/v1/ott/show?page=1&limit=10";

    fetch(apiUrlPopular, { headers: { projectId: "f104bi07c490" } })
      .then((response) => response.json())
      .then((data) => setPopularData(data.data));
  }, []);
  // console.log(popularData);
  return (
    <div className={styles.popular_section}>
      <h2>Popular Shows & Movies</h2>
      <ul>
        {/* Map through popularData and display list items */}
        <Carousel
          interval={2000}
          infiniteLoop={true}
          showThumbs={false}
          showArrows={true}
          autoPlay={true}
        >
          {popularData.map((item) => (
            <Card
              key={item.id}
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "20px",
                margin: "10px",
                backgroundColor: "black",
                display: "flex",
                flexDirection: "column",
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

export default PopularCard;
