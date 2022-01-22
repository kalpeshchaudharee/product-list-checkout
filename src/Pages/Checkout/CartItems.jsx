import React from "react";
import { useDispatch } from "react-redux";

export default function CartItems({ products }) {
  const dispatch = useDispatch();

  const removeItem = (item, e) => {
    e.preventDefault();
    dispatch(item);
  };
  return (
    <div>
      {products.map((product) => (
        <li key={product.id} className="py-6 flex">
          <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
            <img
              src={product.imageSrc}
              alt={product.imageAlt}
              className="w-full h-full object-center object-cover"
            />
          </div>

          <div className="ml-4 flex-1 flex flex-col">
            <div>
              <div className="flex justify-between text-base font-medium text-gray-900">
                <h3>
                  <a href={product.href}>{product.name}</a>
                </h3>
                <p className="ml-4">${product.price * (product.qty ?? 1)}</p>
              </div>
              <p className="mt-1 text-sm text-gray-500">{product.color}</p>
            </div>
            <div className="flex-1 flex items-end justify-between text-sm">
              <p className="text-gray-500">Qty {product.qty ?? 1}</p>

              <div className="flex">
                <button
                  type="button"
                  onClick={(e) => removeItem(product, e)}
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </li>
      ))}
    </div>
  );
}
