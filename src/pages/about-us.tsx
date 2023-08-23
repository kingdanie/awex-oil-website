import AwexVideo from '@/components/AwexVideo';
import ExxyaProduct from '@/components/ExxyaPoducts';
import WhyExxya from '@/components/WhyExxya';
import Layout from '@/components/layout';
import Image from 'next/image';

export default function About() {
  return (
    <Layout>
      <section className="text-primary bg-white md:flex md:gap-x-10 justify-center items-center">
        <div className="md:w-2/5">
          <Image
            src="/builder-batter-left.jpg"
            alt="exxya engine oil"
            width={500}
            height={500}
            sizes="(max-width: 768px) 100vw"
          />
        </div>
        <div className="md:w-3/5">
          <h3 className="text-3xl font-bold text-accent">
            Ultra Superiour Quality
          </h3>
          <h2 className="text-6xl font-extrabold text-primary">
            Designed for Modern Vehicles
          </h2>
          <p className="text-base mb-3">
            EXXYA 5W 30 Fully Synthetic Engine Oil is a premium Engine Oil that
            offers superior quality and specifically designed for modern cars
            running on petrol or Diesel. This makes it suitable for a broad
            range of temperatures, and one of the most commonly used oil in the
            Nigeria market.
          </p>

          <p className="text-base mb-3">
            EXXYA Oil has been formulated to clean away old sludge while
            preventing new sludge formation. No oil keeps engines cleaner then
            EXXYA 5W 30 Fully Synthetic Engine Oil, it outperforms conventional
            motor oil, reduces friction and wear at start-up and protects your
            engine against performance robbing sludge and varnish deposits and
            help improve fuel economy.
          </p>

          <p className="text-base mb-3">
            Our products are manufactured from finest API stocks and state of
            the art additive technology to meet the most stringent requirements
            of APN SN, ACEA A5/B5 thus making it suitable for contemporary cars.
          </p>
        </div>
      </section>
      <section className="text-primary flex flex-col justify-center items-center">
        <h2 className="text-4xl text-primary font-extrabold md:w-[60vw] text-center mb-10">
          Why Choose{' '}
          <span className="text-accent">EXxYA Synthetic Engine Oil?</span>
        </h2>
        <WhyExxya />
      </section>

      <section className="bg-accent md:flex justify-center">
        <div>
          <h2 className="text-4xl text-white font-extrabold mb-10">
            Our Vision
          </h2>
          <p>
            An international lubricant brand with a reputation for Performance,
            Value and Reliability
          </p>
        </div>
        <div>
          <h2 className="text-4xl text-white font-extrabold mb-10">
            Our Mission
          </h2>
          <ul>
            <li>
              <span className="text-primary">Our Products:</span> To provide
              high performance, value-for-money and reliable products
            </li>
            <li>
              <span className="text-primary">Our Services:</span> To customise
              services to meet customers' needs
            </li>
            <li>
              <span className="text-primary">Our People:</span> To lead the
              organisation with a competent and responsive management team
            </li>
          </ul>
        </div>
      </section>

      <section className="zero-margin flex flex-col-reverse sm:flex-row justify-center">
        <div className="md:w-1/2 bg-primary"> </div>
        <div className="md:w-1/2 p-20">
          <h2 className="text-4xl text-primary font-extrabold text-center mb-10">
            Values & <span className="text-accent">Philosophy</span>
          </h2>
          <p className="text-black">
            We believe in <span className="text-accent">Reliably</span>{' '}
            providing our customers with{' '}
            <span className="text-accent">good performance</span> products at a
            price level considered as 'Value for Money' . with today's
            technology developing rapidly requiring engineering performing
            lubricants, WE are committed to meet industry demands with a range
            of products that is technology led. Giving our customers{' '}
            <span className="text-accent">'Value for Money'</span> continues to
            be our company's core value. This enables our customers to be more
            competitive using the full set of benefits from our competitively
            priced products
          </p>
        </div>
      </section>

      <section className="zero-margin bg-white flex justify-center">
        <div className="md:w-1/2 p-20">
          <h2 className="text-4xl text-primary font-extrabold mb-10">
            Company Philosophy
            <span className="text-accent"> & Strengths</span>
          </h2>
          <ul className="text-black font-semibold">
            <li>
              Innovation - Always on the lookout for emerging technologies and
              new materials to stay ahead.
            </li>
            <li>Continuous Improvement - Dedicated to R & D.</li>
            <li>
              Flexibility - Prompt & responsive in meeting customer needs.
            </li>
            <li>
              Form Alliance with Customers - Understand and work with customers
              to provide customised services.
            </li>
            <li>
              Total Customer Support - Experience team of professionals offering
              product selection, product knowledge, training and logistics
              support.
            </li>
          </ul>
        </div>
        <div className="md:w-1/2 bg-accent"></div>
      </section>
      <section className="text-primary flex flex-col justify-center items-center">
        <h2 className="text-4xl text-primary font-extrabold sm:w-[60vw] text-center mb-10">
          Our <span className="text-accent">Products</span>
        </h2>
        <ExxyaProduct />
      </section>
    </Layout>
  );
}
