import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseProductQty,
  increaseProductQty,
  productAddedToCart,
} from "../../features/users/cartSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const selectProduct = (product, e) => {
    e.preventDefault();
    dispatch(productAddedToCart({ ...product, qty: 1 }));
  };

  const increaseQty = (product, e) => {
    e.preventDefault();
    dispatch(increaseProductQty(product));
    var selectedItem = cartItems.filter((item) => item.id === product.id);
    if (selectedItem) {
      selectedItem.qty = selectedItem.qty ? selectedItem.qty + 1 : 1;
    }
  };

  const decreaseQty = (product, e) => {
    e.preventDefault();
    dispatch(decreaseProductQty(product));
  };

  const getQty = (product) => {
    var selectedProduct = cartItems.find((item) => item.id === product.id);
    return selectedProduct && selectedProduct.qty ? selectedProduct.qty : 1;
  };
  return (
    <div>
      <div className="group relative">
        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
          <img
            src={product.imageSrc}
            alt={product.imageAlt}
            className="w-full h-full object-center object-cover lg:w-full lg:h-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">{product.name}</h3>
            <p className="mt-1 text-sm text-gray-500">{product.color}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">${product.price}</p>
        </div>
        {cartItems.filter((item) => item.id === product.id).length === 0 ? (
          <button
            onClick={(e) => selectProduct(product, e)}
            className="mt-5 bg-orange-600 border border-transparent rounded-md py-2 px-4 flex items-center justify-center font-sm text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mx-auto"
          >
            Add To Cart
          </button>
        ) : (
          <div className="flex justify-center mt-7">
            <button
              onClick={(e) => decreaseQty(product, e)}
              className="px-5 m-0 border"
            >
              -
            </button>
            <input
              type="text"
              value={getQty(product)}
              readOnly
              className="w-10 border text-center"
            />
            <button
              onClick={(e) => increaseQty(product, e)}
              className="px-5 m-0 border"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
