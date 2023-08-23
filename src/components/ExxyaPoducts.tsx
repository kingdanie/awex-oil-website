import React from 'react';
import Image, { StaticImageData } from 'next/image';
const exxyaOilImage = '/exxya-engine-oil.jpg'; // Replace with your image path
const exxyaCoolantImage = '/exxya-coolant-image.jpg'; // Replace with your image path
const exxyaGearOilImage = '/exxya-gear-oil-image.jpg'; // Replace with your image path

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
  const products = [
    {
      name: 'EXxYA synthetic Engine Oil',
      image: exxyaOilImage,
      alt: 'EXxYA synthetic Engine Oil',
    },
    {
      name: 'EXxYA Coolant',
      image: exxyaCoolantImage,
      alt: 'EXxYA Coolant',
    },
    {
      name: 'EXxYA Gear Oil',
      image: exxyaGearOilImage,
      alt: 'EXxYA Gear Oil',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-10">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          name={product.name}
          image={product.image}
          alt={product.alt}
        />
      ))}
    </div>
  );
};

export default ExxyaProduct;
