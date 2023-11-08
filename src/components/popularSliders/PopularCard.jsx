import React, { useEffect, useState } from "react";
import styles from "./PopularCard.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Card from "@mui/material/Card";
import axiosInstance from "../../services/axiosInstance";

const PopularCard = () => {
  const [popularData, setPopularData] = useState([]);

  useEffect(() => {
    const fetchPopularData = async () => {
      try {
        const response = await axiosInstance.get(
          "/ott/show?page=${page}&limit=${limit}"
        );
        if (response.status === 200) {
          setPopularData(response.data.data);
        } else {
          // Handle the error if needed
          console.error("Error fetching popular data");
        }
      } catch (error) {
        console.error("Error fetching popular data:", error);
      }
    };

    fetchPopularData();
  }, []);
  // console.log(popularData);
  return (
    <div className={styles.popular_section}>
      <h2>Popular Shows & Movies</h2>
      <ul>
        {/* Map through popularData and display list items */}
        <Carousel
          className={styles.popular_carousel}
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
          {popularData.map((item) => (
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

export default PopularCard;
