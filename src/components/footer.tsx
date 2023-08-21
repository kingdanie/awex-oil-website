import React from 'react';
// In your component or page
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about-us' },
  { name: 'Services', href: '/services' },
  { name: 'Contact Us', href: '/contact-us' },
];

const Footer = () => {
  return (
    <footer className="w-full bg-accent">
      <div className="min-h-25vh">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.111960256491!2d3.360206174495132!3d6.5075096233499865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c4152cb60d3%3A0x47c27cbd3938e4a8!2s3%20Clegg%20Ln%2C%20Surulere%20101241%2C%20Lagos!5e0!3m2!1sen!2sng!4v1692628718174!5m2!1sen!2sng"
          width="100%"
          height="300px"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="bg-black p-5 awe-nav-links flex flex-col items-center py-10 h-60">
        {/* Company Logo */}
        {/* <img
          src="/path-to-your-logo.png" // Replace with the actual path to your logo
          alt="Awex Oil Limited Company Logo"
          className="mb-4"
          style={{ maxWidth: '150px' }}
        /> */}
        <h4>Awex Oil Limited</h4>
        <div className="flex flex-1 items-center justify-center sm:items-stretch">
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            {navLinks.map((navLink) => (
              <a
                key={navLink.name} // Add a unique key
                href={navLink.href}
                className="inline-flex items-center text-white hover:text-primary px-1 pt-1 text-sm font-medium text-gray-900"
              >
                {navLink.name}
              </a>
            ))}
          </div>
        </div>

        {/* Social Media Links */}
        {/* Social Media Links */}
        <div className="flex space-x-10 mt-10">
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
      <div className="text-center bg-accent  mt-5 p-5">
        © {new Date().getFullYear()} Awex Oil Limited. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
