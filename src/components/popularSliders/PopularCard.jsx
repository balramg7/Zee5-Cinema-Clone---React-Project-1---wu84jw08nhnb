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

    fetch(apiUrlPopular, { headers: { projectId: "wu84jw08nhnb" } })
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
          stopOnHover={true}
          autoPlay={true}
          showStatus={false}
          width={"100%"}
          showIndicators={false}
          centerMode
          centerSlidePercentage={30}
          useKeyboardArrows
        >
          {popularData.map((item) => (
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
                fontSize: "10px",
                background: "transparent",
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
