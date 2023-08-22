import { useRouter } from "next/router";

const bgCover = 'awex-oil-cover.jpeg';
const bgCover1 = 'awex-oil-2560.jpg';
const bgCover2 = 'awex-oi1l.jpg';
const bgCover3 = 'awex-oil1.png';

const Hero = ({title}: {title: string}) => {

    const router = useRouter();
    
  
  return (
    <div
      className="w-full"
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
        className="text-bold text-6xl"
        style={{ padding: '5rem', background: '#000000b0' }}
        onClick={() => console.log(router.pathname)}
      >
        {title.toUpperCase()} {router.pathname}
      </h1>
    </div>
  );
}


export default Hero;
