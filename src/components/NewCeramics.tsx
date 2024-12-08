// components/NewCeramics.jsx
import Image from 'next/image'
import Link from 'next/link'

const NewCeramics = () => {
  const products = [
    {
      id: 1,
      name: 'The Dandy chair',
      price: 250,
      image: '/imges tem 2/chair image.png',
    },
    {
      id: 2,
      name: 'Rustic Vase Set',
      price: 155,
      image: '/imges tem 2/Parent.png',
    },
    {
      id: 3,
      name: 'The Silky Vase',
      price: 125,
      image: '/imges tem 2/Parent (1).png',
    },
    {
      id: 4,
      name: 'The Lucy Lamp',
      price: 399,
      image: '/imges tem 2/Parent (2).png',
    },
  ]

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-light mb-12">New ceramics</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col">
            <div className="relative aspect-square bg-[#E8ECF0] mb-4">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover hover:opacity-90 transition-opacity"
              />
            </div>
            <h3 className="text-lg font-light">{product.name}</h3>
            <p className="text-lg">£{product.price}</p>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <Link 
          href="/collection" 
          className="text-blue-600 hover:underline"
        >
          View collection
        </Link>
      </div>
    </section>
  )
}

export default NewCeramics
