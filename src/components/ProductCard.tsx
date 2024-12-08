interface ProductCardProps {
    image: string;
    title: string;
    price: number;
  }
  
  const ProductCard = ({ image, title, price }: ProductCardProps) => {
    return (
      <div className="flex flex-col">
        <div className="overflow-hidden mb-4">
          <img
            src={image}
            alt={title}
            className="w-full h-[300px] object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <p className="text-lg text-gray-700">£{price}</p>
      </div>
    );
  };
  
  export default ProductCard;