/* This example requires Tailwind CSS v2.0+ */
import { useState } from "react";
import Header from "../Components/Header";
import PaymentForm from "../Components/PaymentForm";

const products = localStorage.getItem("cart_items")
  ? JSON.parse(localStorage.getItem("cart_items"))
  : [];

export default function Checkout(props) {
  const [productList, setProductList] = useState(products);
  const removeItem = (item, event) => {
    var productData = productList.filter((product) => item.id !== product.id);
    setProductList(productData);
    localStorage.setItem("cart_items", JSON.stringify(productData));
  };
  const subTotal = () => {
    var total = 0;
    for(let item of productList) {
      total += (item.price * item.qty);

    }
    return <p>${total}</p>;
  };
  return (
    <div>
      <div className="w-100">
        <Header title="Checkout" />
        {productList.length > 0 ? (
          <div className="h-full flex flex-col bg-white shadow-xl">
            <div className="flex-1 py-6 px-4 sm:px-6">
              <div className="mt-24 px-24 container">
                <div className="flow-root">
                  <ul className="-my-6 divide-y divide-gray-200">
                    {productList.length > 0 &&
                      productList.map((product) => (
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
                                <p className="ml-4">${product.price * product.qty}</p>
                              </div>
                              <p className="mt-1 text-sm text-gray-500">
                                {product.color}
                              </p>
                            </div>
                            <div className="flex-1 flex items-end justify-between text-sm">
                              <p className="text-gray-500">
                                Qty {product.qty ?? 1}
                              </p>

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
                  </ul>
                </div>
              </div>
            </div>

            <div className="container px-24">
              <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Subtotal</p>
                  {subTotal()}
                </div>
                <div className="mt-6">
                  <div>
                    <PaymentForm />
                  </div>
                  
                </div>
                <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                  <p>
                    or{" "}
                    <a
                      href="/"
                      className="text-indigo-600 font-medium hover:text-indigo-500"
                    >
                      Continue Shopping<span aria-hidden="true"> &rarr;</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex h-screen">
            <div className="m-auto">
              <h3>Cart is Empty</h3>
              <a
                href="/"
                className="text-indigo-600 font-medium hover:text-indigo-500"
              >
                Continue Shopping<span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
