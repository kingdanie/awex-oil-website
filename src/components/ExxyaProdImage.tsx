import Link from 'next/link';
import React from 'react';

const ExxyaProdImage = ({
  name,
  image,
  alt,
  url,
}: {
  name: string;
  image: string;
  alt: string;
  url?: String
}) => {
  return (
    <div className="flex flex-col relative">
      <Link href={`${url}`}>
        <div className="flex-grow exxyaProductStyles exxyaproduct relative mb-4">
          <img src={image} alt={alt} className="w-full h-full" />
          <h3
            style={{ position: 'absolute', bottom: '0px', color: '#fff' }}
            className="text-lg p-6 font-semibold mb-2 text-white text-center"
          >
            {name}
          </h3>
        </div>
      </Link>
    </div>
  );
};

export default ExxyaProdImage;
