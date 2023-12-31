import { useRouter } from 'next/router';
import { slugToTitle } from './../utils/helperfunctions';

const bgCover = 'awex-oil-cover.jpeg';
const bgCover1 = 'awex-oil-2560.jpg';
const bgCover2 = 'awex-oi1l.jpg';
const bgCover3 = 'awex-banner-2.jpg';

const Hero = ({ title = '' }: { title?: string }) => {
  const router = useRouter();
  const PageTitle = router.pathname == '/' ? "Awe X Industries Limited" : router.pathname;
  console.log(router.pathname);

  return (
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
        className="font-bold leading-none text-4xl md:text-6xl text-center"
        style={{ padding: '5rem', background: '#000000b0', minWidth: '70%', minHeight: '70%' }}
        onClick={() => console.log(router.pathname)}
      >
        {title !== '' ? title : slugToTitle(PageTitle)}
      </h1>
    </div>
  );
};

export default Hero;
