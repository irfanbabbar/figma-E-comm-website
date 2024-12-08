const HeroSection = () => {
  return (
    <section className="relative bg-[#2A254B] text-white">
      {/* Content Container */}
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4 py-8 md:py-16">
        {/* Left Section */}
        <div className="md:w-1/2 space-y-6">
          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            The furniture brand for the future, with timeless designs
          </h1>
          {/* Subheading */}
          <p className="text-gray-300">
            A new era in eco-friendly furniture with Avion, the French luxury
            retail brand with nice fonts, tasteful colors, and a beautiful way
            to display things digitally using modern web technologies.
          </p>
          {/* Button */}
          <button className="px-6 py-3 bg-white text-[#2A254B] font-medium rounded-lg hover:bg-gray-100">
            View collection
          </button>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 flex justify-center relative mt-8 md:mt-0">
          {/* Chair Image */}
          <img
            src="/chair.png"
            alt="Chair"
            className="w-3/4 h-auto drop-shadow-xl"
          />
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
