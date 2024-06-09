import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { CartContext } from "../context/CartContext";

function Actions({ product }) {
  const { addToCart } = useContext(CartContext);
  const { _id } = product;
  return (
    <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 hidden md:flex">
      <button onClick={() => addToCart(product, _id)}>
        <div className="flex justify-center items-center text-white w-12 h-12 bg-primary">
          <BsPlus className="text-3xl" />
        </div>
      </button>
      <Link
        to={`/products/${_id}`}
        className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl"
      >
        <BsEyeFill />
      </Link>
    </div>
  );
}

function ProductItem({ product }) {
  const { addToCart } = useContext(CartContext);
  const { _id, image, brand, model, price } = product;
  return (
    <div className="border border-[#e4e4e4] h-[400px] mb-4 relative overflow-hidden group transition rounded-lg hover:border-primary shadow-lg">
      <div className="w-full h-full flex flex-col justify-between">
        <div className="w-full h-[200px] flex justify-center items-center">
          <img
            className="max-h-[240px] w-[240px] mt-24 group-hover:scale-110 transition duration-300"
            src={image}
            alt={brand}
          />
        </div>
        <div className="p-4">
          
          <Link to={`/product/${_id}`}>
            <h2 className="font-semibold mb-1">{brand}{' '}{model}</h2>
          </Link>
          <div className="font-semibold">₹ {price}</div>
          <div className="flex justify-center items-center mt-4 md:hidden space-x-4">
            <button
              onClick={() => addToCart(product, _id)}
              className="text-white bg-primary hover:bg-secondary rounded px-4 py-2 hover:bg-white hover:text-primary hover:border hover:border-primary"
            >
              Buy Now
            </button>
            <Link
              to={`/product/${_id}`}
              className="bg-white border border-primary text-primary hover:bg-primary hover:text-white rounded px-4 py-2"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
      <Actions product={product} />
    </div>
  );
}

export default ProductItem;
