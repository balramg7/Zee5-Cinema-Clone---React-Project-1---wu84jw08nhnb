import React, { useEffect, useState } from "react";
import styles from "./CarouselCard.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PopularCard from "../popularSliders/PopularCard.jsx";
import TrendingNow from "../trendingSlider/TrendingNow.jsx";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../services/axiosInstance";

const CarouselCard = () => {
  const navigate = useNavigate();
  const [carouselData, setCarouselData] = useState([]);

  useEffect(() => {
    if (status === "success") {
      navigate('/signIn')
    }
  }, [])

  useEffect(() => {
    const fetchCarouselData = async () => {
      try {
        const response = await axiosInstance.get("/ott/show?limit=${limit}");
        if (response.status === 200) {
          setCarouselData(response.data.data);
        } else {
          // Handle the error if needed
          console.error("Error fetching carousel data");
        }
      } catch (error) {
        console.error("Error fetching carousel data:", error);
      }
    };

    fetchCarouselData();
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
          useKeyboardArrows
        >
          {/* Map through carouselData and display carousel items */}
          {carouselData.map((item) => (
            <Link to={`/ContentDetails/${item._id}`} key={item._id}>
              <div key={item._id}>
                <img src={item.thumbnail} alt={item.title} />
                <p className="legend">{item.title}</p>
              </div>
            </Link>
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
