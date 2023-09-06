import MyLayout from "@/components/MyLayout";
import ContainedSection from "@/components/containedSection";
import AwexContent from "../../data";
import SectionWithRightImg from "@/components/SectionWithRightImg";
import WhyChooseUs from "@/components/WhyChooseUs";
import ExxyaProduct from "@/components/ExxyaPoducts";
import Link from "next/link";

export default function Home() {
  return (
    <MyLayout>
      <SectionWithRightImg data={AwexContent.Homepage.awex} />
      <WhyChooseUs />
      <section className="text-center bg-primary">
        <div className="mx-auto ">
          <h2 className="text-4xl text-white font-extrabold text-center mb-10">
            Our <span className="text-accent">Product</span> Range
          </h2>
          <p className="text-white max-w-[900px] mx-auto">
            We offer a dynamic range of engine oils, gear oils, brake fluids,
            coolants, and greases for motorbikes, cars, trucks, and other
            heavy-duty vehicles. The product mix is constantly reviewed to
            ensure that the specifications are of the latest standards.
          </p>
          <div className="relative mt-10 max-w-[900px] mx-auto">
            <ExxyaProduct />
          </div>
        </div>
      </section>
      <section
        style={{
          backgroundImage: "url('/section-bg.jpg')",
        }}
        className="bg-white zero-margin flex flex-col-reverse sm:flex-row justify-center"
      >
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