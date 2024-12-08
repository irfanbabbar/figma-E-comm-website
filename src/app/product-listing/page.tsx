import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Productlist from "@/components/ProductList";
import ProductListPage from "@/components/ProductListPage";

export default function ProductListing() {
  return (
    <>
      <Header />
      <div className="w-full mx-auto">
        <Productlist />
      </div>

      {/* <ProductTypes /> */}
      <ProductListPage />

      <Footer />
    </>
  );
}
