import React from "react";
import { Link, useLocation } from "react-router-dom";
import { IoCheckmarkCircle } from "react-icons/io5";

const OrderConfirmation = () => {
  const location = useLocation();
  const { address } = location.state || {};
  const { name, street, city, pincode } = address || {};

  // Calculate estimated delivery date (4 days from today)
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 4);

  return (
    <div className="h-screen flex flex-col items-center justify-center px-4">
      <IoCheckmarkCircle className="text-6xl lg:text-9xl text-primary mb-8" />
      <div className="text-center">
        <h1 className="text-2xl lg:text-3xl font-semibold mb-4">
          Thank You for Your Order, {name}!
        </h1>
        <p className="text-lg lg:text-xl mb-8">
          Your order has been successfully placed and will be shipped to the
          following address:
        </p>
        {address && (
          <div className="bg-gray-100 rounded-lg p-6 mb-8">
            <h2 className="text-lg lg:text-xl font-semibold mb-2">Shipping Address:</h2>
            <p>{name}</p>
            <p>{street}</p>
            <p>{city}, {pincode}</p>
          </div>
        )}
        {deliveryDate && (
          <p className="text-lg lg:text-xl mb-8">
            Estimated Delivery Date:{" "}
            <strong>
              {deliveryDate.toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric"
              })}
            </strong>
          </p>
        )}
        <Link
          to="/product"
          className="bg-primary text-white py-2 px-4 rounded text-lg inline-block"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmation;
