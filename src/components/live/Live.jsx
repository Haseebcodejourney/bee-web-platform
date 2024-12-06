import React, { useState, useEffect } from 'react';
import { Text } from '../../style/live/style';

export default function Live() {
  // State to store the iframe source URL
  const [videoSrc, setVideoSrc] = useState("https://beesscamera.serveo.net/?action=stream");

  useEffect(() => {
    // Set an interval to refresh the video every 60 seconds (60000 milliseconds)
    const interval = setInterval(() => {
      // Add a timestamp to the URL to force a reload of the iframe
      setVideoSrc(`https://beesscamera.serveo.net/?action=stream&t=${new Date().getTime()}`);
    }, 60000); // Refresh every 60000ms (1 minute)

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Text>Live Streaming</Text>
      <div style={{
        position: 'relative',
        height: '100vh',  // Full height of the viewport
        width: '100vw',  // Full width of the viewport
        background: '#000'
      }}>
        {/* Use an iframe or image depending on your content */}
        <iframe
          src={videoSrc}  // Dynamically change the src
          frameBorder="0"
          allowFullScreen
          title="Live Stream Video"
          style={{
            position: 'absolute',
            top: 0, left: 0,
            width: '100vw',  // Full width of the viewport
            height: '100vh',  // Full height of the viewport
          }}
        ></iframe>
        
        {/* If you're using an image instead of iframe */}
        <img
          src="https://beesscamera.serveo.net/?action=stream"
          alt="Live Stream"
          style={{
            width: '100%',  // Ensure the image takes the full width
            height: '100%', // Ensure the image takes the full height
            objectFit: 'cover',  // Adjust how the image fits within the container
            position: 'absolute',
            top: 0,
            left: 0
          }}
        />
      </div>
    </>
  );
}
