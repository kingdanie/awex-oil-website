import React, { useState } from 'react';

const AwexVideo = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Function to handle iframe load event
  const handleIframeLoad = () => {
    setIsLoading(false); // Set loading to false once the iframe has loaded
  };

  return (
    <div className="iframe-container mt-10">
      {isLoading && <div className="loader">Loading...</div>}
      <iframe
        className={`w-full ${isLoading ? 'hidden' : ''}`}
        src="https://www.youtube-nocookie.com/embed/KPNxYdUn_ro?si=DsBdvuaMVfAMMvJw"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        onLoad={handleIframeLoad} // Call the function when the iframe loads
      ></iframe>

      <style jsx>{`
        .iframe-container {
          position: relative;
          overflow: hidden;
          padding-top: 56.25%; /* 16:9 aspect ratio (height: width) */
        }

        .iframe-container iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .loader {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: rgba(255, 255, 255, 0.7);
          z-index: 1;
        }
      `}</style>
    </div>
  );
};

export default AwexVideo;
