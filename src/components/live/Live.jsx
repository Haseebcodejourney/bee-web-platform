import React, { useState, useEffect } from 'react';
import { Image, ScreenWrapper, Text } from '../../style/live/style';

export default function Live() {
  const [videoSrc, setVideoSrc] = useState("https://beesscamera.serveo.net/?action=stream");

  useEffect(() => {
    const interval = setInterval(() => {
      setVideoSrc(`https://beesscamera.serveo.net/?action=stream&t=${new Date().getTime()}`);
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Text>Live Streaming</Text>
      <ScreenWrapper style={{
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
        ></iframe>        
        {/* If you're using an image instead of iframe */}
        <Image
          src="https://beesscamera.serveo.net/?action=stream"
          alt="Live Stream"
        />
      </ScreenWrapper>
    </>
  );
}
