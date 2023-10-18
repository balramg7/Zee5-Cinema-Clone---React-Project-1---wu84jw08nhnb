import React, { useEffect, useState } from "react";
import styles from './CarouselCard.module.css';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PopularCard from "../popularSliders/PopularCard.jsx";
import TrendingNow from "../trendingSlider/TrendingNow.jsx";

const CarouselCard = () => {
  const [carouselData, setCarouselData] = useState([]);

  useEffect(() => {
    const apiUrlCarousel =
      "https://academics.newtonschool.co/api/v1/ott/show?limit=5";

    fetch(apiUrlCarousel, { headers: { projectId: "wu84jw08nhnb" } })
      .then((response) => response.json())
      .then((data) => setCarouselData(data.data));
  }, []);

  return (
    <div className={styles.home_page}>
      {/* Hero Section with Carousel */}
      <div className={styles.hero_section}>
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          autoPlay={true}
          interval={2000}
          showThumbs={false}
          centerMode
          centerSlidePercentage={75}
        >
          {/* Map through carouselData and display carousel items */}
          {carouselData.map((item) => (
            <div key={item.id}>
              <img src={item.thumbnail} alt={item.title} />
              <p className="legend">{item.title}</p>
            </div>
          ))}
        </Carousel>
      </div>
      <TrendingNow />
      {/* Popular Shows and Movies Section */}
      <PopularCard />
    </div>
  );
};

export default CarouselCard;
