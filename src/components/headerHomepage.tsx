import { useState } from 'react';
import Hero from './Hero';
import NavBar from './navbar';
const bgCover3 = 'awex-oil1.png';

const HeaderHomepage = () => {
  return (
    <div className="w-full flex flex-col items-center bg-primary relative min-h-[80]">
      <NavBar />
      <HeroHomepage />
    </div>
  );
};


const HeroHomepage = () => {

    const [videoLoaded, setVideoLoaded] = useState(false);

    const handleVideoReady = () => {
      setVideoLoaded(true);
    };

    // const [videoLoaded, setVideoLoaded] = useState(false);

    const handleVideoLoad = () => {
      setVideoLoaded(true);
    };

   return (
     <>
       <div
         className="w-full text-white"
         style={{
           display: 'flex',
           flexDirection: 'column',
           alignItems: 'center',
           justifyContent: 'center',
           minHeight: '75vh',
           backgroundImage: `url(${bgCover3})`,
           backgroundSize: 'cover',
           backgroundPosition: 'center center',
         }}
       >
         <h1
           className="text-bold text-4xl md:text-6xl"
           style={{ padding: '5rem', background: '#000000b0' }}
         >
           Awe X Industries Limited
         </h1>
       </div>

       <div>
         <div className={`hero-container ${videoLoaded ? 'loaded' : ''}`}>
           {/* {!videoLoaded && (
            <div className="cover-image">
              <img src="/awex-oil3.jpg" alt="Cover Image" />
            </div>
          )} */}

           {/* <iframe
            src="https://www.youtube.com/embed/KPNxYdUn_ro?autoplay=1&mute=1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onLoad={handleVideoLoad}
            className="video-background"
          ></iframe> */}
           <video
             autoPlay
             loop
             muted
             playsInline
             onLoadedData={handleVideoLoad}
             className="video-background"
             preload=""
           >
             <source src="/awex-video.mp4" type="video/mp4" />
           </video>
         </div>

         <style jsx>{`
           .hero-container {
             position: relative;
             width: 100%;
             height: 100vh;
             max-height: 800px;
             overflow: hidden;
           }

           .cover-image {
             position: absolute;
             top: 0;
             left: 0;
             width: 100%;
             height: 100%;
             background: url('/awex-oil3.jpg') center/cover no-repeat;
             z-index: 1;
           }

           .video-background {
             position: absolute;
             top: 0;
             left: 0;
             width: 100%;
             height: 100%;
           }

           .loaded .cover-image {
             display: none;
           }
         `}</style>
       </div>
     </>
   );
};


export default HeaderHomepage;


