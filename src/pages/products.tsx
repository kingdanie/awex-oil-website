import ExxyaProduct from '@/components/ExxyaPoducts';
import Layout from '@/components/layout';

export default function Products() {
  return (
    <Layout>
      <section className="text-center">
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

      </section>
      <section className="text-center bg-white">
        <h2 className="text-4xl text-primary font-extrabold text-center mb-10">
          Product <span className="text-accent">Range</span>
        </h2>
        <p className="text-black">
          AWE.X Industries lubricants product range is designed to meet
          requirements of various markets and applications, ranging from
          Industrial, automotive , Construction and Marine.
        </p>
        <p className="text-black">
          We offer a dynamic range of engine oils, gear oils, brake fluids,
          coolants and greases for motorbikes, cars, trucks and other heavy duty
          vehicles. The product mix is constantly reviewed to ensure that the
          specifications are of the latest standards.
        </p>

        <div className="mt-20">
          <ExxyaProduct />
        </div>
      </section>
    </Layout>
  );
}
