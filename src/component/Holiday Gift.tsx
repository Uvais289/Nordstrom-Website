// HolidayGift.js

import React, { useRef } from 'react';
 

const HolidayGift: React.FC = () => {
  const videoRef = useRef<HTMLIFrameElement | null>(null);

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.src =
        'https://n.nordstrommedia.com/it/ed5eff36-2f96-44b5-ad4c-83018ab1c12a.mp4?h=&w=';
    }
  };

  return (
    <div className="full-width-container">
      <div className="holiday-gift-container">
        <h2 className="holiday-gift-heading">Holiday Gift</h2>
        <div className="holiday-gift-video-container">
          <iframe
            className="holiday-gift-video"
            title="Holiday Gift Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            src=""
            ref={videoRef}
          ></iframe>
        </div>
        <div className="play-button-container">
          <button className="holiday-gift-button" onClick={playVideo}>
            Play Video
          </button>
        </div>
        <div className="image-container">
          <img
            src="https://n.nordstrommedia.com/it/f5aeaecc-45bc-4344-a584-6c49e2382005.png?h=132&w=1332"
            alt="Product Image 1"
            className="holiday-gift-image"
          />
          <img
            src="https://n.nordstrommedia.com/it/005751cf-7d79-41aa-a7eb-81dd8db1ea2b.gif?h=161&w=1332"
            alt="Product Image 2"
            className="holiday-gift-image"
          />
          <img
            src="https://n.nordstrommedia.com/it/1f594430-bfc2-4e52-ae0a-c9b092a1b98c.png?h=181&w=1332"
            alt="Product Image 3"
            className="holiday-gift-image"
          />
        </div>
      </div>
    </div>
  );
};

export default HolidayGift;
