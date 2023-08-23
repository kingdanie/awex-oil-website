import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

const AwexVideo = () => {
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  const handlePlayClick = () => {
    setIsVideoVisible(true);
  };

  return (
    <div className="relative">
      <div
        className={`h-64 bg-gray-300 cursor-pointer ${
          isVideoVisible ? 'hidden' : ''
        }`}
        onClick={handlePlayClick}
      >
     <div className="absolute inset-0 flex items-center justify-center">
          <FontAwesomeIcon
            icon={faPlayCircle}
            className="text-orange-500 h-16 w-16"
          />
      </div>
      {isVideoVisible && (
        <div className="h-64">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/QXgBI8drB-k?si=xPI2JGFaO1f0IM2N"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      )}
    </div>
    </div>
  );
};

export default AwexVideo;
