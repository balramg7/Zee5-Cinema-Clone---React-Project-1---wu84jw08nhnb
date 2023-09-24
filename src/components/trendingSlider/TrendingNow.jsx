import React, { useEffect, useState } from "react";

const TrendingNow = () => {
  const [trendingData, setTrendingData] = useState([]);
  

  useEffect(() => {
    const apiUrlTrending =
      "https://academics.newtonschool.co/api/v1/ott/show?page=1&limit=10";

    fetch(apiUrlTrending, { headers: { projectId: "f104bi07c490" } })
      .then((response) => response.json())
      .then((data) => setTrendingData(data.data));
  }, []);

  // console.log(trendingData);
  return (
    <div className="trending-section">
      <h2>Trending New</h2>
      <ul>
        {/* Map through trendingData and display list items */}
        {trendingData.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingNow;
