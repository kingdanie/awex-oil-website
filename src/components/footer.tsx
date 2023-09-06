import React from 'react';
// In your component or page
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { navLinks } from '@/utils/helperfunctions';
import { useRouter } from 'next/router';
import { EnvelopeIcon, MapIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import AwexMap from './AwexMap';

const Footer = () => {
  const router = useRouter();

  return (
    <footer className="w-full bg-primary text-white">
      <AwexMap />
      <div className="p-5 awe-nav-links flex flex-col items-center py-10 min-h-60">
        <div className="sm:flex w-[90vw] justify-between items-center mb-10" style={{marginTop: "-5em"}}>
          <div className="flex justify-center items-center gap-x-3 bg-accent w-full p-5">
            <MapIcon className="block h-12 w-12" aria-hidden="true" />
            <Link href="">3 Clegg Lane Ojuelegba – Surulere</Link>
          </div>
          <div className="flex justify-center items-center gap-x-3 bg-black w-full p-5">
            <PhoneIcon className="block h-12 w-12" aria-hidden="true" />
            <Link href="tel:+2348025726493">+2348025726493</Link>
          </div>
          <div className="flex justify-center items-center gap-x-3 bg-accent w-full p-5">
            <EnvelopeIcon className="block h-12 w-12" aria-hidden="true" />
            <Link href="mailto:info@awexlubricants.com">
              info@awexlubricants.com
            </Link>
          </div>
        </div>

        {/* Company Logo */}
        {/* <img
          src="/path-to-your-logo.png" // Replace with the actual path to your logo
          alt="Awex Oil Limited Company Logo"
          className="mb-4"
          style={{ maxWidth: '150px' }}
        /> */}
        <h4>Awex Oil Limited</h4>
        <div className="">
          <div className="my-10 flex flex-1 items-center justify-center sm:items-stretch">
            <div className="sm:ml-6 sm:flex sm:space-x-8">
              {navLinks.map((navLink) => (
                <a
                  key={navLink.name} // Add a unique key
                  href={navLink.href}
                  className={`inline-flex items-center hover:text-accent px-1 pt-1 text-sm font-medium text-gray-900 ${
                    router.pathname === navLink.href
                      ? 'text-accent'
                      : 'text-white'
                  }`}
                >
                  {navLink.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-10">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} size="2xl" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2xl" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} size="2xl" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center bg-primary mt-10 p-5 border-t-2 border-accent">
        © {new Date().getFullYear()} Awex Oil Limited. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
