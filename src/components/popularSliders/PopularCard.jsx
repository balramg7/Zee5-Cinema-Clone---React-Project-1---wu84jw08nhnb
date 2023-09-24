import React, { useEffect, useState} from 'react';
import styles from './PopularCard.module.css';

const PopularCard = () => {
    const [popularData, setPopularData] = useState([]);


    useEffect(() =>{
        const apiUrlPopular =
      "https://academics.newtonschool.co/api/v1/ott/show?page=1&limit=10";

      fetch(apiUrlPopular, { headers: { projectId: "f104bi07c490" } })
      .then((response) => response.json())
      .then((data) => setPopularData(data.data));
    }, [])
  return (
    <div className={styles.popular_section}>
        <h2>Popular Shows & Movies</h2>
        <ul>
          {/* Map through popularData and display list items */}
          {popularData.map((item) => (
            <div key={item.id}>
              <img src={item.thumbnail} alt={item.title}/>
            <li key={item.id}>{item.title}</li>
            </div>
          ))}
        </ul>
      </div>
  )
}

export default PopularCard
