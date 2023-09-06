import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGem,
  faCheckCircle,
  faCertificate,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const WhyChooseUs = () => {
  return (
    <section className="">
      <div className="max-w-[1080px] mx-auto p-4">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-6">
            Why <span className="text-accent">Choose Us</span>
          </h2>
          <div className="flex flex-col lg:flex-row justify-center gap-4">
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center w-full lg:w-1/3">
              <div className="text-accent text-3xl mr-4">
                <FontAwesomeIcon icon={faGem} />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Premium Ingredients</h3>
                <p className="text-gray-600">
                  Crafted with the finest base oils and cutting-edge additives.
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center w-full lg:w-1/3 mt-4 lg:mt-0">
              <div className="text-accent text-3xl mr-4">
                <FontAwesomeIcon icon={faCheckCircle} />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Reliability</h3>
                <p className="text-gray-600">
                  Our products consistently meet the highest quality standards.
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center w-full lg:w-1/3 mt-4 lg:mt-0">
              <div className="text-accent text-3xl mr-4">
                <FontAwesomeIcon icon={faCertificate} />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Certified Excellence</h3>
                <p className="text-gray-600">
                  ISO 9001 certified for rigorous quality control.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
          <p className="text-gray-700 font-bold text-xl">
            Choose AWE.X Industries for peace of mind and superior support,
            whether on the road or in the field. Experience excellence with us!
          </p>
        </div>
        <div className="text-center mt-12">
          <Link
            className="p-5 bg-accent hover:bg-orange-700 text-xl font-bold text-white"
            href="https://wa.me/+2348025726493?text=Hello,%20I%20will%20I%20like%20to%20place%20an%20order%20for%20Exxya%20Oil%20Thanks"
          >
            Place Your Order
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
