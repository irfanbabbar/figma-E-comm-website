import Header from "../components/Header";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import NewCeramics from "@/components/NewCeramics";
import JoinUs from "@/components/JoinUs";
import ProductCard from "../components/ProductCard";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <FeatureSection />
      <NewCeramics />
      {/* <Productlist />
      <ProductTypes />
      <ProductListPage /> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-medium text-gray-900 mb-8">
          Our popular products
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProductCard
            image="/imges tem 2/Large sofa.png"
            title="The Pop made sofa"
            price={980}
          />
          <ProductCard
            image="/imges tem 2/chair image.png"
            title="The Dandy chair"
            price={250}
          />
          <ProductCard
            image="/imges tem 2/chair 2.png"
            title="The Dandy chair"
            price={250}
          />
        </div>

        <div className="text-center mt-8">
          <button className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
            View collection
          </button>
        </div>
      </div>
      <JoinUs />

      <div className="h-[35rem] bg-[#f5f5f5] flex items-center justify-center">
        <div className="container mx-auto px-4 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6">
              From a studio in London to a global brand with over 400 outlets
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              When we started Axon, the idea was simple: Make high-quality
              furniture affordable and available for the mass market.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Handmade and lovingly crafted furniture and homeware is what we
              live, breathe, and design as our Chelsea boutique became the
              hotbed for the London interior design community.
            </p>
            <a
              href="#"
              className="text-blue-600 underline text-sm font-medium hover:text-blue-800"
            >
              Get in touch
            </a>
          </div>

          {/* Right Column */}
          <div className="flex justify-center items-center">
            <div className="relative">
              {/* Sofa */}
              <div className="flex w-[40rem] h-[30rem]">
                <img
                  src="/imges tem 2/corner sofa.png"
                  alt="Sofa"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
