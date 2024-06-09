import { useEffect, useState } from "react";
import myAxios from "../util/axios";
import { Link, useNavigate } from "react-router-dom";
import Error from "../util/Error";
import ShouldRender from "../util/ShouldRender";
import ProductItem from "./ProductItem";
import Loader from "../util/Loader";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [hasError, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [metadata, setMetadata] = useState({});
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState(null);
  const [direction, setDirection] = useState(null);

  const navigate = useNavigate();

  const onPrev = () => {
    if (page > 1) setPage(page - 1);
  };
  const onNext = () => {
    if (page < metadata.pages) setPage(page + 1);
  };

  const fetchData = async () => {
    const path = `/products/page/${page}/size/12?search=${search}&sort=${sort}&direction=${direction}`;
    try {
      const res = await myAxios().get(path);
      setProducts(res.data.data);
      setMetadata(res.data.metadata);
      setError(false);
    } catch (err) {
      if (err.response && err.response.status === 401) {
        navigate("/login");
        return;
      }
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page, search, sort, direction]);

  const onTextChange = (evt) => {
    setSearch(evt.target.value);
  };

  const onSearch = () => {
    fetchData();
  };

  const onEnter = (evt) => {
    if (evt.keyCode === 13) fetchData();
  };

  const onSortChange = (evt) => {
    // price:asc
    const sortStrings = evt.target.value;
    const tokens = sortStrings.split(":");
    setSort(tokens[0]);
    setDirection(tokens[1]);
  };

  const refresh = () => {
    fetchData();
  };

  return (
    <div>
      <div className="flex m-2 justify-center mt-6">
        <h1 className="flex mt-3 p-1 mr-2">
          Products
        </h1>
        <button
          onClick={onPrev}
          style={{ backgroundColor: page === 1 ? "gray" : "" }}
          className="flex bg-primary mt-3 mb-5 text-white  p-1 rounded"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <h1 className="ml-2 mt-4 mr-2 text-gray-500 font-normal text-md">
          {page} of {metadata.pages} (Total: {metadata.rows})
        </h1>
        <button
          onClick={onNext}
          style={{ backgroundColor: page === metadata.pages ? "gray" : "" }}
          className="bg-primary mt-3 mb-5 text-white p-1 rounded"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>

        <div className="mt-3 ml-2">
          <label
            htmlFor="default-search"
            className="sr-only mb-2 text-sm font-medium"
          >
            Search
          </label>
          <div className="relative ml-2">
            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
              <svg
                className="h-4 w-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              onKeyUp={onEnter}
              onChange={onTextChange}
              type="search"
              id="default-search"
              className="block w-full rounded-lg border p-2 ps-10 text-sm text-black focus:ring-primary"
              placeholder="Search Brand.."
              required
            />
            <button
              onClick={onSearch}
              type="submit"
              className="absolute bottom-2.5 end-2.5 rounded bg-primary px-1 text-sm font-medium text-white hover:bg-primary "
            >
              Search
            </button>
          </div>
        </div>

        <div>
          <select
            onChange={onSortChange}
            className="h-9 ml-3 mt-3 px-1 border border-primary rounded"
          >
            <option>Sort</option>
            <option value="price:asc">Price Low to High</option>
            <option value="price:desc">Price High to Low</option>
          </select>
        </div>

        {/* <Link
          to="/products/new"
          className="bg-primary m-2 p-2 pt-3 rounded ml-4 text-white focus:ring-4 focus:ring-gray-400"
        >
          Add Product
        </Link> */}
      </div>

      <ShouldRender when={loading}>
        <Loader />
      </ShouldRender>

      <ShouldRender when={hasError}>
        <Error />
      </ShouldRender>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-[1200px] mt-8">
        {products.map((product) => (
          <ProductItem key={product._id} product={product} onDelete={refresh} />
        ))}
      </div>
    </div>
  );
}
export default ProductList;