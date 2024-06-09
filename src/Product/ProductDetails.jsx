import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import myAxios from "../util/axios";
import { CartContext } from "../context/CartContext";
import Loader from "../util/Loader";
import { IoMdArrowBack } from "react-icons/io";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
        const path= `/products/${id}`
      const response = await myAxios().get(path);
      setProduct(response.data);
      setLoading(false);
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <section className="h-screen flex justify-center items-center">
        <Loader />
      </section>
    );
  }

  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        <p>Product not found</p>
      </section>
    );
  }

  const { brand,model, price, description, image } = product;

  return (
    <section className="pb-12 log:py-32 h-screen flex items-center">
      <div className="container mx-auto">
        <button
          onClick={() => navigate("/products")}
          className="absolute top-28 left-24 text-2xl text-black"
        >
          <IoMdArrowBack />
        </button>
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img
              className="max-w-[200px] lg:max-w-sm"
              src={image}
              alt={model}
            />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
              {brand}{' '}{model}
            </h1>
            <div className="text-xl text-primary font-medium mb-6">
            ₹ {price}
            </div>
            <p className="mb-8">{description}</p>
            <button
              onClick={() => addToCart(product, product.id)}
              className="bg-primary text-white py-4 px-4 rounded-lg"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
