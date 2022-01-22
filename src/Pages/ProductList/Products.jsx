import { useSelector } from "react-redux";
import Header from "../../Components/Header";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";
import ProductSearch from "./ProductSearch";

function Products() {
  const productList = useSelector((state) => state.products);
  const cartItems = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const chekoutProduct = () => {
    navigate("/checkout");
  };

  return (
    <div className="bg-white">
      <Header title="Featured" />
      <div className="mt-28 mx-10">
        <ProductSearch />
      </div>
      <div className="max-w-2xl mx-auto py-8 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
        {productList.length > 0 ? (
          <div className="mt-6  gap-y-10 gap-x-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
            {productList.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
            ))}
          </div>
        ) : (
          <div className="">
            <div className="">
              <h3 className="text-center text-2xl">Product Not Found</h3>
            </div>
          </div>
        )}
      </div>
      {cartItems.length > 0 && (
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start float-right mr-10 sticky bottom-10">
          <div className="rounded-md shadow">
            <button
              onClick={chekoutProduct}
              className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Cart ({cartItems.length})
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;
