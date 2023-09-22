import MyLayout from '@/components/MyLayout';
import SectionWithRightImg from '@/components/SectionWithRightImg';
import WhyChooseUs from '@/components/WhyChooseUs';
import Image from 'next/image';
import Link from 'next/link';
import AwexContent from '../../data';
const ExxyaOil = '/exxya-synth-oil.png';

export default function Home() {
  return (
    <MyLayout>
      <SectionWithRightImg data={AwexContent.Homepage.awex} />
      <WhyChooseUs />
      <section
        className="text-center bg-white"
        style={{
          backgroundImage: "url('/section-bg.jpg')",
        }}
      >
        <div className="mx-auto ">
          <h2 className="text-4xl font-extrabold text-center mb-10">
            Our <span className="text-accent">Product</span> Range
          </h2>
          <p className=" max-w-[900px] mx-auto">
            We offer a dynamic range of engine oils, gear oils, brake fluids,
            coolants, and greases for motorbikes, cars, trucks, and other
            heavy-duty vehicles. The product mix is constantly reviewed to
            ensure that the specifications are of the latest standards.
          </p>
          {/* <div className="">
            <ExxyaProduct />
          </div> */}
          <div className="relative mt-10 max-w-[900px] mx-auto">
            {/* <img src="./exxya-synth-oil.png" className="max-h-[500px]" /> */}
            <Image
              src={ExxyaOil}
              alt="Exxya Sythetic Engine Oil"
              width={1200}
              height={500}
            />
          </div>
          <div className="p-[40px]"></div>
          <Link
            className="p-5 bg-accent font-bold text-white center hover:ring-1 hover:ring-accent"
            href="/products"
          >
            Learn More About Our Products
          </Link>
        </div>
      </section>
      <section className=" zero-margin flex flex-col-reverse sm:flex-row justify-center">
        <div
          className="md:w-1/2 bg-primary"
          style={{
            backgroundImage: "url('./awex-oil-cover.jpeg')",
            backgroundSize: 'cover',
            minHeight: '300px',
          }}
        >
          {' '}
        </div>
        <div className="md:w-1/2 p-20 text-center  min-h-[80vh]">
          <h2 className="text-2xl md:text-4xl leading-sm text-primary font-extrabold text-center mb-10">
            Dealership<span className="text-accent"> Opportunities</span>
          </h2>
          <p className="text-black mb-10">
            {AwexContent.About.DealerOpportunities.paragraph}
          </p>
          <div className="center">
            <Link
              className="p-5 bg-primary font-bold text-white center"
              href="/contact-us"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </MyLayout>
  );
}
