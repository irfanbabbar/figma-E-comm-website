import Image from "next/image";

export default function ProductListingPage() {
  const products = [
    { id: 1, name: "The Dandy Chair", price: "£250", image: "/imges tem 2/chair image.png" },
    { id: 2, name: "The Dandy Chair", price: "£250", image: "/imges tem 2/Parent.png" },
    { id: 3, name: "The Dandy Chair", price: "£250", image: "/imges tem 2/stol pic.png" },
    { id: 4, name: "The Dandy Chair", price: "£250", image: "/imges tem 2/Parent (1).png" },
    { id: 5, name: "The Dandy Chair", price: "£250", image: "/imges tem 2/Parent (2).png" },
    { id: 6, name: "The Dandy Chair", price: "£250", image: "/imges tem 2/chair 2.png" },
    { id: 7, name: "The Dandy Chair", price: "£250", image: "/imges tem 2/jhomar pic.png" },
    { id: 8, name: "The Dandy Chair", price: "£250", image: "/imges tem 2/whaite port.png" },
    { id: 9, name: "The Dandy Chair", price: "£250", image: "/imges tem 2/yellow chair.png" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-center mb-8">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg overflow-hidden w-[20rem] h-[30rem]"
          >
            <div className="relative h-[24rem]">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-500">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}