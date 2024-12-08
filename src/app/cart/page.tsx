// pages/shopping-cart.js
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ShoppingCart() {
  return (
    <>
      {" "}
      <Header />
      <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
        {/* Header */}
        <header className="w-full bg-orange-500 text-white py-4 text-center text-xl font-bold">
          Your Shopping Cart
        </header>

        {/* Shopping Cart Container */}
        <div className="bg-white shadow-md rounded-lg w-11/12 md:w-3/4 lg:w-1/2 p-6">
          {/* Product List */}
          <div className="space-y-6">
            {/* Product 1 */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img
                  src="/imges tem 2/thek port.png"
                  alt="Graystone Vase"
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h2 className="text-lg font-semibold">Graystone Vase</h2>
                  <p className="text-sm text-gray-500">
                    A timeless ceramic vase with a tri-color gray glaze.
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold">£85</p>
                <p className="text-sm text-gray-500">Quantity: 1</p>
              </div>
            </div>

            {/* Product 2 */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img
                  src="/imges tem 2/tree.png"
                  alt="Basic White Vase"
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h2 className="text-lg font-semibold">Basic White Vase</h2>
                  <p className="text-sm text-gray-500">
                    Beautiful and simple, this is one for the classics.
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold">£125</p>
                <p className="text-sm text-gray-500">Quantity: 1</p>
              </div>
            </div>
          </div>

          {/* Subtotal */}
          <div className="border-t mt-6 pt-4">
            <div className="flex justify-between text-lg font-semibold">
              <p>Subtotal</p>
              <p>£210</p>
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Taxes and shipping are calculated at checkout.
            </p>
          </div>

          {/* Checkout Button */}
          <button className="w-full bg-blue-600 text-white py-3 mt-6 rounded-lg hover:bg-blue-700 transition">
            Go to Checkout
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
