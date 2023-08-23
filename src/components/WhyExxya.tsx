// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faCheckCircle,
//   faGasPump,
//   faOilCan,
//   faShieldAlt,
//   faFlask,
//   faCertificate,
//   faCogs,
// } from '@fortawesome/free-solid-svg-icons';

// const Card = ({ icon, title, description }: { icon: any; title: string; description: string }) => {
//   return (
//     <div className="bg-white p-6 rounded-lg shadow-md">
//       <div className="flex items-center justify-center w-12 h-12 bg-indigo-500 text-white rounded-full mb-4">
//         <FontAwesomeIcon icon={icon} />
//       </div>
//       <h3 className="text-lg font-semibold mb-2">{title}</h3>
//       <p className="text-gray-700">{description}</p>
//     </div>
//   );
// };

// const WhyExxya = () => {
//   const points = [
//     {
//       icon: faCheckCircle,
//       title: 'Unmatched reduction on piston deposits',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     },
//     {
//       icon: faGasPump,
//       title: 'High Fuel efficiency',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     },
//     {
//       icon: faOilCan,
//       title: 'Low oil top-up and longer engine life',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     },
//     {
//       icon: faShieldAlt,
//       title: 'Improved protection against sludge',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     },
//     {
//       icon: faFlask,
//       title: 'Improved bio-diesel compatibility',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     },
//     {
//       icon: faCogs,
//       title: 'Excellent after treatment compatibility',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     },
//     {
//       icon: faCertificate,
//       title: 'Internationally Certified & Approved Engine Oil',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     },
//   ];

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//       {points.map((point, index) => (
//         <Card
//           key={index}
//           icon={point.icon}
//           title={point.title}
//           description={point.description}
//         />
//       ))}
//     </div>
//   );
// };

// export default WhyExxya;


import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faGasPump,
  faOilCan,
  faShieldAlt,
  faFlask,
  faCertificate,
  faCogs,
} from '@fortawesome/free-solid-svg-icons';

const Card = ({
  icon,
  title,
}: {
  icon: any;
  title: string;

}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="flex items-center justify-center w-12 h-12 bg-primary-light text-white rounded-full mb-4">
        <FontAwesomeIcon icon={icon} />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
    </div>
  );
};

const WhyExxya = () => {
  const points = [
    {
      icon: faCheckCircle,
      title: 'Unmatched reduction on piston deposits',
    },
    {
      icon: faGasPump,
      title: 'High Fuel efficiency',
    },
    {
      icon: faOilCan,
      title: 'Low oil top-up and longer engine life',
    },
    {
      icon: faShieldAlt,
      title: 'Improved protection against sludge',
    },
    {
      icon: faFlask,
      title: 'Improved bio-diesel compatibility',
    },
    {
      icon: faCogs,
      title: 'Excellent after treatment compatibility',
    },
    {
      icon: faCertificate,
      title: 'Internationally Certified & Approved Engine Oil',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 2xl:grid-cols-2 gap-4">
      {/* First Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 2xl:grid-cols-2 gap-4">
        {points.slice(0, 4).map((point, index) => (
          <Card key={index} icon={point.icon} title={point.title} />
        ))}
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
        {points.slice(4).map((point, index) => (
          <Card key={index} icon={point.icon} title={point.title} />
        ))}
      </div>
    </div>
  );
};

export default WhyExxya;
