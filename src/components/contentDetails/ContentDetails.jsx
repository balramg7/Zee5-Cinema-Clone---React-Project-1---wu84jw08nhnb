import React, { useEffect, useState, useRef } from 'react';
import ReactPlayer from 'react-player';

const ContentDetails = ({ match }) => {
  const [content, setContent] = useState({});
  const playerRef = useRef(null);

  useEffect(() => {
    // Fetch content details using the API
    const contentId = match.params.id;

    fetch(`https://academics.newtonschool.co/api/v1/ott/show/${contentId}`, {
      headers: {
        projectId: 'Your projectId',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setContent(data);
      })
      .catch((error) => {
        console.error('Error fetching content details:', error);
      });
  }, [match.params.id]);

  useEffect(() => {
    // When the component mounts, check if there is a saved playback position
    const contentId = match.params.id;
    const savedPosition = localStorage.getItem(`continueWatching_${contentId}`);
    if (savedPosition) {
      // Use the saved position to seek the video player to the saved time
      playerRef.current.seekTo(parseFloat(savedPosition));
    }

    // When the component unmounts, save the current playback position
    return () => {
      localStorage.setItem(`continueWatching_${contentId}`, playerRef.current.getCurrentTime());
    };
  }, [match.params.id]);

  return (
    <div>
      <h1>{content.title}</h1>
      <p>Genre: {content.genre}</p>
      <p>Release Year: {content.releaseYear}</p>
      <p>Synopsis: {content.synopsis}</p>
      <p>Cast: {content.cast.join(', ')}</p>
      <p>Directors: {content.directors.join(', ')}</p>
      <p>Rating: {content.rating}</p>

      <ReactPlayer
        ref={playerRef}
        url={content.videoUrl} // Replace with the actual video URL from your API response
        controls={true}
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default ContentDetails;
