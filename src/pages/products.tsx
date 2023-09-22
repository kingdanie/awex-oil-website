import AwexVideo from '@/components/AwexVideo';
import Layout from '@/components/layout';
import Image from 'next/image';
import Link from 'next/link';
const ExxyaOil = '/exxya-synth-oil.png';

export default function Products() {
  return (
    <Layout>
      <section className="text-center max-w-[900px] mx-auto">
        <h2 className="text-4xl text-primary font-extrabold text-center mb-10">
          EXxya 5W 30{' '}
          <span className="text-accent">Fully Synthetic Engine Oil</span>
        </h2>
        <p className="text-black">
          EXXYA 5W 30 Fully Synthetic Engine Oil is a premium Engine Oil that
          offers superior quality and specifically designed for modern cars
          running on petrol or Diesel. This makes it suitable for a broad range
          of temperatures, and one of the most commonly used oil in the Nigeria
          market.
        </p>
        <p className="text-black">
          EXXYA Oil has been formulated to clean away old sludge while
          preventing new sludge formation. No oil keeps engines cleaner then
          EXXYA 5W 30 Fully Synthetic Engine Oil, it outperforms conventional
          motor oil, reduces friction and wear at start-up and protects your
          engine against performance robbing sludge and varnish deposits and
          help improve fuel economy.
        </p>
        <p>
          Our products are manufactured from finest API stocks and state of the
          art additive technology to meet the most stringent requirements of APN
          SN, ACEA A5/B5 thus making it suitable for contemporary cars.
        </p>
        <AwexVideo />
      </section>
      <section className="text-center bg-white w-screen">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-4xl text-primary font-extrabold text-center mb-10">
            Product <span className="text-accent">Range</span>
          </h2>
          <p className="text-black max-w-[900px] mx-auto">
            AWE.X Industries lubricants product range is designed to meet
            requirements of various markets and applications, ranging from
            Industrial, automotive, Construction, and Marine.
          </p>
          <p className="text-black max-w-[900px] mx-auto">
            We offer a dynamic range of engine oils, gear oils, brake fluids,
            coolants, and greases for motorbikes, cars, trucks, and other
            heavy-duty vehicles. The product mix is constantly reviewed to
            ensure that the specifications are of the latest standards.
          </p>
          <div className="relative mt-10 max-w-[900px] mx-auto">
            {/* <ExxyaProduct /> */}
            {/* <img src="./exxya-synth-oil.png" className="max-h-[500px]" /> */}
            <Image
              src={ExxyaOil}
              alt="Exxya Sythetic Engine Oil"
              width={1200}
              height={500}
            />
          </div>
          <div className="p-[30px]"></div>
          <Link
            className="p-5 bg-accent font-bold text-white center"
            href="/exxya-fully-synthetic-engine-oil"
          >
            Learn More About Exxya Oil
          </Link>
        </div>
      </section>
    </Layout>
  );
}
