import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdClose, IoMdRemove, IoMdAdd } from "react-icons/io";
import { CartContext } from "../context/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);
  // destructuring items
  const { _id, brand, model, image, price, amount } = item;
  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        {/* image */}
        <Link to={`/products/${_id}`}>
          <img className="max-w-[80px]" src={image} />
        </Link>
        {/* brand,model & remove icon */}
        <div className="w-full flex flex-col">
          <div className="flex justify-between mb-2">
            {/* brand,model */}
            <Link
              to={`/products/${_id}`}
              className="text-sm uppercase font-medium max-w-[240px] text-black hover:underline"
            >
              {brand}{' '}{model}
            </Link>
            {/* remove icon */}
            <div
              onClick={() => {
                removeFromCart(_id);
              }}
              className="text-xl cursor-pointer"
            >
              <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
            </div>
          </div>
          {/* quantity */}
          <div className="flex gap-x-2 h-[36px] text-sm">
            {/* qty */}
            <div className="flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium">
              {/* minus icon */}
              <div
                onClick={() => {
                  decreaseAmount(_id);
                }}
                className="flex-1 h-full flex justify-center items-center cursor-pointer"
              >
                <IoMdRemove />
              </div>
              {/* amt */}
              <div className="h-full flex justify-center items-center px-2">
                {amount}
              </div>
              {/* plus icon */}
              <div
                onClick={() => increaseAmount(_id)}
                className="flex-1 h-full flex justify-center items-center cursor-pointer"
              >
                <IoMdAdd />
              </div>
            </div>
            {/* item price */}
            <div className="flex-1 flex items-center justify-around">
            ₹ {price}
            </div>
            {/* final price */}
            {/* make price at 2 decimals */}
            <div className="flex-1 flex justify-end items-center text-primary font-medium">{`₹ ${parseFloat(
              item.price * amount
            ).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
