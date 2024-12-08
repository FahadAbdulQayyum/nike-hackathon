"use client"

import { useParams, useSearchParams } from 'next/navigation';
import Image from 'next/image';

const ProductDetail: React.FC = () => {
  const params = useParams();
  const { id } = params; // Access the product ID from the route
  const searchParams = useSearchParams();

  const dataString = searchParams.get("data");
  const product = dataString ? JSON.parse(decodeURIComponent(dataString)) : null;

  if (!product) return <p>Loading...</p>;

  return (
    <div className="flex justify-center p-standardSize">
      <div className="w-1/2 items-end">
        <Image src={product.image} alt={product.title} width={550} height={550} className="bg-primaryy" />
      </div>
      <div className="w-1/2 items-start space-y-3">
        <h1 className="text-4xl font-bold">{product.title}</h1>
        <p>{product.desc}</p>
        <p className="text-xl font-bold">{'₹ ' + product.price}</p>
        <button className="bg-black rounded-full p-2 px-4 text-white">Add to cart</button>
      </div>
      {/* Fetch and display more details based on the ID */}
    </div>
  );
};

export default ProductDetail;
