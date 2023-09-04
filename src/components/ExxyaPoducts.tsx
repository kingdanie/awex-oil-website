import React from 'react';
import Image, { StaticImageData } from 'next/image';
import ExxyaProdImage from './ExxyaProdImage';
import AwexContent from '../../data';


const ProductCard = ({
  name,
  image,
  alt,
}: {
  name: string;
  image: StaticImageData;
  alt: string;
}) => {
  return (
    <div className="bg-white shadow-md">
      <div className="flex items-center justify-center mb-4">
        <Image src={image} alt={alt} width={400} height={500} />
      </div>
      <h3 className="text-lg p-6 font-semibold mb-2 text-accent text-center">{name}</h3>
    </div>
  );
};

const ExxyaProduct = () => {
 

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-10">
      {AwexContent.products.map((product, index) => (
        <ExxyaProdImage
          key={index}
          name={product.name}
          image={product.image}
          alt={product.alt}
          url={product.url}
        />
      ))}
    </div>
  );
};

export default ExxyaProduct;
