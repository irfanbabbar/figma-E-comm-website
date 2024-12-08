export default function AboutUsBanner() {
    return (
      <header className="relative border-t-2 border-b-2 bg-gray-100">
        <div className="container mx-auto flex justify-between items-center p-8 h-[12rem]">
          {/* Main Text */}
          <h1 className="text-left text-2xl w-[35rem]">
            A brand built on the love of craftsmanship, quality and outstanding customer service
          </h1>
  
          {/* Button */}
          <a
            href="#"
            className="text-blue-500 hover:underline text-sm font-medium"
          >
            View our products
          </a>
        </div>
      </header>
    );
  }