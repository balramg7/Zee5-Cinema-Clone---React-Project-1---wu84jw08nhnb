import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import styles from "./Home.module.css";

const Home = () => {
  const [popularShows, setPopularShows] = useState([]);
  const [trendingContent, setTrendingContent] = useState([]);

  useEffect(() => {
    // Fetch popular shows
    fetch("https://academics.newtonschool.co/api/v1/ott/show?page=1&limit=5", {
      headers: {
        projectId: "f104bi07c490",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setPopularShows(data);
        } else {
          console.error("Data is not an array:", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching popular shows:", error);
      });

    // Fetch trending content
    fetch("https://academics.newtonschool.co/api/v1/ott/show?page=1&limit=5", {
      headers: {
        projectId: "f104bi07c490",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setTrendingContent(data);
        } else {
          console.error("Data is not an array:", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching trending content:", error);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.home_page}>
      {/* Hero Section */}
      <div className={styles.hero_section}>
        <Slider {...settings}>
          {popularShows.map((show) => (
            <div key={show.id}>
              <img src={show.imageURL} alt={show.title} />
              <h3>{show.title}</h3>
              <p>{show.description}</p>
              <button>Watch Now</button>
            </div>
          ))}
        </Slider>
      </div>

      {/* Trending Section */}
      <div className={styles.trending_section}>
        <h2>Trending Now</h2>
        <div className={styles.trending_list}>
          {trendingContent.map((content) => (
            <div key={content.id} className={styles.trending_item}>
              <img src={content.imageURL} alt={content.title} />
              <h3>{content.title}</h3>
              <p>{content.description}</p>
              <button>Watch Now</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
