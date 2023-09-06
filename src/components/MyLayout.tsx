import React, { Children, useState } from 'react';
import Footer from './footer';
import NavBar from './navbar';

const MyLayout = ({ children }: { children: any }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Function to handle the video load event
  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  return (
    <main className="relative min-h-screen bg-gray-200 flex flex-col justify-between items-center max-w-full">
      <div
        className={`hero-container bg-primary h-[50vh] md:h-screen ${
          videoLoaded ? 'loaded' : ''
        } w-full`}
      >
        {/* <video
          src="https://youtu.be/qIm-zdkD-i8?si=IHSIRKgNmEsGA3-S"
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={handleVideoLoad}
          className="video-background"
        ></video> */}
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/qIm-zdkD-i8?si=OtlkwidOIgVZasf6&amp;autoplay=1&amp;controls=0&amp;loop=1"
          allowFullScreen
          className="video-background"
        ></iframe>

        <div className="content">
          <div className="absolute top-5 w-full p-0 mx-auto flex justify-center">
            <NavBar />
          </div>
          {/* <nav className="navbar">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </nav> */}

          <div className="welcome-text">
            <h1>Welcome to Awe X Industries Limited</h1>
            <p>authorized dealer of Exxya OIl.</p>
            <button className="learn-more-button">Learn More</button>
          </div>
        </div>
      </div>
      <section className="p-0 min-h-[40vh]">{children}</section>
      <Footer />

      <style jsx>{`
        .hero-container {
          position: relative;
          width: 100%;
          max-height: 700px;
          overflow: hidden;
        }

        .video-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .loaded .video-background {
          display: block;
        }

        .content {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .navbar {
          width: 80%; /* Adjust as needed */
          background-color: rgba(255, 255, 255, 0.8); /* Adjust transparency */
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
          position: absolute;
          top: 20px;
        }

        .navbar ul {
          list-style-type: none;
          display: flex;
          justify-content: space-around;
        }

        .welcome-text {
          text-align: center;
          margin-top: 20px;
          color: #fff; /* Adjust text color */
        }

        .welcome-text h1 {
          font-size: 36px;
          margin-bottom: 10px;
        }

        .welcome-text p {
          font-size: 18px;
          margin-bottom: 20px;
        }

        .learn-more-button {
          padding: 10px 20px;
          background-color: #007bff; /* Adjust button color */
          color: #fff;
          border: none;
          border-radius: 5px;
          font-size: 16px;
          cursor: pointer;
        }
      `}</style>
    </main>
  );
};

export default MyLayout;
