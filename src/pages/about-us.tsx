import AwexVideo from '@/components/AwexVideo';
import ExxyaProduct from '@/components/ExxyaPoducts';
import Layout from '@/components/layout';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import {
  faLightbulb,
  faChartLine,
  faHandsHelping,
  faHandshake,
  faHeadset,
} from '@fortawesome/free-solid-svg-icons';
import SectionWithRightImg from '@/components/SectionWithRightImg';
import AwexContent from '../../data';
import ContainSection from '@/components/containedSection';

export default function About() {
  return (
    <Layout>
      <SectionWithRightImg
        data={AwexContent.About.Introduction}
      ></SectionWithRightImg>

      <section className="zero-margin flex flex-col-reverse sm:flex-row justify-center">
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
        <div className="md:w-1/2 py-20 px-12 md:p-20">
          <h2 className="text-2xl md:text-4xl text-primary font-extrabold text-center mb-10">
            Values & <span className="text-accent">Philosophy</span>
          </h2>
          <p className="text-black">
            We believe in <span className="text-accent">Reliably</span>{' '}
            providing our customers with{' '}
            <span className="text-accent">good performance</span> products at a
            price level considered as &apos;Value for Money&apos; . with
            today&apos;s technology developing rapidly requiring engineering
            performing lubricants, We are committed to meet industry demands
            with a range of products that is technology led. Giving our
            customers{' '}
            <span className="text-accent">&apos;Value for Money&apos;</span>{' '}
            continues to be our company&apos;s core value. This enables our
            customers to be more competitive using the full set of benefits from
            our competitively priced products
          </p>
        </div>
      </section>

      <section className="bg-accent md:flex justify-center py-16">
        <div className="md:w-1/2 text-center md:text-left px-4">
          <h2 className="text-2xl md:text-4xl text-white font-extrabold mb-6">
            Our Vision
          </h2>
          <p className="text-white">
            An international lubricant brand with a reputation for Performance,
            Value and Reliability
          </p>
        </div>
        <div className="md:w-1/2 text-center md:text-left px-4 mt-8 md:mt-0">
          <h2 className="text-2xl md:text-4xl text-white font-extrabold mb-6">
            Our Mission
          </h2>
          <ul className="list-disc list-inside text-white">
            <li className="flex items-start mb-4">
              <span className="text-white font-semibold mr-2">
                <FontAwesomeIcon icon={faCheckCircle} />
              </span>
              To provide high performance, value-for-money and reliable products
            </li>
            <li className="flex items-start mb-4">
              <span className="text-white font-semibold mr-2">
                <FontAwesomeIcon icon={faCheckCircle} />
              </span>
              To customise services to meet customers&apos; needs
            </li>
            <li className="flex items-start">
              <span className="text-white font-semibold mr-2">
                <FontAwesomeIcon icon={faCheckCircle} />
              </span>
              To lead an organization with a competent and responsive
              management team
            </li>
          </ul>
        </div>
      </section>

      <section className="section-img zero-margin bg-white flex flex-col md:flex-row justify-center">
        <div className="md:w-1/2 py-20 px-12 md:p-20">
          <h2 className="text-2xl md:text-4xl text-primary font-extrabold mb-10">
            Company Philosophy
            <span className="text-accent"> & Strengths</span>
          </h2>
          <ul className="text-black font-semibold flex flex-col gap-y-10">
            <li className="flex items-start space-x-4">
              <FontAwesomeIcon
                icon={faLightbulb}
                className="text-accent text-2xl mt-1"
              />
              <span>
                Innovation - Always on the lookout for emerging technologies and
                new materials to stay ahead.
              </span>
            </li>
            <li className="flex items-start space-x-4">
              <FontAwesomeIcon
                icon={faChartLine}
                className="text-accent text-2xl mt-1"
              />
              <span>Continuous Improvement - Dedicated to R &amp; D.</span>
            </li>
            <li className="flex items-start space-x-4">
              <FontAwesomeIcon
                icon={faHandsHelping}
                className="text-accent text-2xl mt-1"
              />
              <span>
                Flexibility - Prompt &amp; responsive in meeting customer needs.
              </span>
            </li>
            <li className="flex items-start space-x-4">
              <FontAwesomeIcon
                icon={faHandshake}
                className="text-accent text-2xl mt-1"
              />
              <span>
                Form Alliance with Customers - Understand and work with
                customers to provide customised services.
              </span>
            </li>
            <li className="flex items-start space-x-4">
              <FontAwesomeIcon
                icon={faHeadset}
                className="text-accent text-2xl mt-1"
              />
              <span>
                Total Customer Support - Experienced team of professionals
                offering product selection, product knowledge, training, and
                logistics support.
              </span>
            </li>
          </ul>
        </div>
        <div
          className="md:w-1/2 bg-accent"
          style={{
            backgroundImage: "url('./12.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            minHeight: '300px',
          }}
        ></div>
      </section>
      <section className="text-primary">
        <div className="max-w-[900px] mx-auto p-4">
          <h2 className="mx-auto text-2xl md:text-4xl text-primary font-extrabold sm:w-[60vw] text-center mb-16">
            Our <span className="text-accent">Products</span>
          </h2>
          <AwexVideo />
          <br />
          {/* <ExxyaProduct /> */}
        </div>
      </section>

      <ContainSection alt="white" data={AwexContent.About.CustomSolutions} />
      <ContainSection
        alt="accent"
        data={AwexContent.About.DealerOpportunities}
      />
      <ContainSection data={AwexContent.About.OurMarketFocus} />
      <ContainSection alt="white" data={AwexContent.About.MeetOurTeam} />
    </Layout>
  );
}
