import myAxios from "../util/axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Error from "../util/Error";
import ShouldRender from "../util/ShouldRender";

function NewProduct() {
  const [product, setProduct] = useState({
    brand: "",
    model: "",
    price: "",
    discount: "",
    inStock: false,
    image: null,
  });
  const [hasError, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const onInputChange = (evt) => {
    const newState = { ...product, [evt.target.name]: evt.target.value };
    setProduct(newState);
  };

  const onFileChange = (evt) => {
    const newState = { ...product, image: evt.target.files[0] };
    setProduct(newState);
  };

  const navigate = useNavigate();

  const onSaveBtn = async () => {
    try {
      const fd = new FormData();

      for (let key in product) {
        fd.append(key, product[key]);
      }
      const path = "/products";
      await myAxios().post(path, fd);
      setSuccess(true);
      setProduct({
        brand: "",
        model: "",
        price: "",
        discount: "",
        inStock: false,
        image: null,
      });
      setTimeout(() => {
        navigate("/products");
      }, 1000);
    } catch {
      setError(true);
    }
  };

  return (
    <div className="m-2 p-2">
      <ShouldRender when={success}>
        <div className="py-2 my-4 w-1/2 bg-green-500 text-white rounded text-center font-semibold">
          Successfully saved data
        </div>
      </ShouldRender>

      <ShouldRender when={hasError}>
        <Error />
      </ShouldRender>

      <h1 className="text-2xl font-bold">New Product</h1>
      <div className="mt-8 mb-7">
        <label className="block py-1">Brand</label>
        <select
          name="brand"
          value={product.brand}
          onChange={onInputChange}
          className="border border-gray-500 p-1 w-1/2 rounded"
        >
          <option value="">brand</option>
          <option value="Apple">Apple</option>
          <option value="Samsung">Samsung</option>
          <option value="Google">Google</option>
          <option value="Oneplus">Oneplus</option>
        </select>
        <ShouldRender when={!product.brand}>
          <div className="text-sm text-red-500 m-1">Brand is required</div>
        </ShouldRender>
      </div>

      <div className="mb-8">
        <label className="block py-1">Model</label>
        <input
          name="model"
          value={product.model}
          onChange={onInputChange}
          className="border border-gray-500 p-1 w-1/2 rounded"
          placeholder="model"
          type="text"
        />
        <ShouldRender when={!product.model}>
          <div className="text-sm text-red-500 m-1">Model is required</div>
        </ShouldRender>
        <ShouldRender when={product.model && product.model.length < 1}>
          <div className="text-sm text-red-500 m-1">Min 1 char</div>
        </ShouldRender>
        <ShouldRender when={product.model && product.model.length > 20}>
          <div className="text-sm text-red-500 m-1">Max 20 chars</div>
        </ShouldRender>
      </div>

      <div className="mb-8">
        <label className="block py-1">Price</label>
        <input
          name="price"
          value={product.price}
          onChange={onInputChange}
          className="border border-gray-500 p-1 w-1/2 rounded"
          placeholder="price"
          type="text"
        />
        <ShouldRender when={!product.price}>
          <div className="text-sm text-red-500 m-1">Price is required</div>
        </ShouldRender>
      </div>

      <div className="mb-8">
        <label className="block py-1">Discount</label>
        <input
          name="discount"
          value={product.discount}
          onChange={onInputChange}
          className="border border-gray-500 p-1 w-1/2 rounded"
          placeholder="discount"
          type="text"
        />
        <ShouldRender when={!product.discount}>
          <div className="text-sm text-red-500 m-1">Discount is required</div>
        </ShouldRender>
      </div>

      <div className="mb-8">
        <label className="block py-1">InStock</label>

        <input
          type="radio"
          name="inStock"
          value="true"
          onChange={onInputChange}
        />
        <label className="py-1 m-2">Yes</label>

        <input
          type="radio"
          name="inStock"
          value="false"
          onChange={onInputChange}
        />
        <label className="py-1 m-2">No</label>
        <ShouldRender when={!product.inStock}>
          <div className="text-sm text-red-500 m-1">
            Field input is required
          </div>
        </ShouldRender>
      </div>

      <div className="mb-8">
        <label className="block mb-2">Upload Image</label>
        <input type="file" onChange={onFileChange} />
      </div>

      <div className="mb-8">
        <button
          disabled={!product.brand || !product.model || !product.price}
          onClick={onSaveBtn}
          className="bg-orange-500 hover:bg-orange-600 rounded px-6 py-1 focus:ring-4 focus:ring-gray-400"
        >
          Save
        </button>
      </div>
    </div>
  );
}
export default NewProduct;
