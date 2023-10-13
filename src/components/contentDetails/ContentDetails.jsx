import React, { useEffect, useState, useRef } from 'react';
import ReactPlayer from 'react-player';

const ContentDetails = () => {
  const [content, setContent] = useState({});
  const playerRef = useRef(null);
  
  // Extract the id from the URL
  const urlParts = window.location.pathname.split('/');
  const id = urlParts[urlParts.length - 1];

  useEffect(() => {
    // Fetch content details using the API
    fetch(`https://academics.newtonschool.co/api/v1/ott/show/64cffee700bad552e8dcd509`, {
      headers: {
        projectId: 'wu84jw08nhnb',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setContent(data);
      })
      .catch((error) => {
        console.error('Error fetching content details:', error);
      });
  }, [id]);

  useEffect(() => {
    // When the component mounts, check if there is a saved playback position
    const savedPosition = localStorage.getItem(`continueWatching_${id}`);
    if (savedPosition) {
      // Use the saved position to seek the video player to the saved time
      playerRef.current.seekTo(parseFloat(savedPosition));
    }

    // When the component unmounts, save the current playback position
    return () => {
      localStorage.setItem(`continueWatching_${id}`, playerRef.current.getCurrentTime());
    };
  }, [id]);


  console.log(content);

  return (
    <div>
      <h1>{content.title}</h1>
      <p>Genre: {content.genre}</p>
      <p>Release Year: {content.createdAt}</p>
      <p>Synopsis: {content.description}</p>
      {/* <p>Cast: {content.cast.join(', ')}</p>
      <p>Directors: {content.directors.join(', ')}</p> */}
      <p>Rating: {content.rating}</p>

      <ReactPlayer
        ref={playerRef}
        url={content.video_url}
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default ContentDetails;
