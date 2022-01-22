/* This example requires Tailwind CSS v2.0+ */
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header";
import CartItems from "./CartItems";
import PaymentForm from "./PaymentForm";

export default function ProductCheckout(props) {
  const cartItems = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const subTotal = () => {
    var total = 0;
    for (let item of cartItems) {
      total += item.price * item.qty;
    }
    return <p>${total}</p>;
  };
  return (
    <div>
      <div className="w-100">
        <Header title="Checkout" />
        {cartItems.length > 0 ? (
          <div className="h-full flex flex-col">
            <div className="flex-1 py-6 px-4 sm:px-6">
              <div className="mt-24 px-10 md:px-24 container">
                <div className="flow-root">
                  <ul className="-my-6 divide-y divide-gray-200">
                    <CartItems products={cartItems} />
                  </ul>
                </div>
              </div>
            </div>
            <div className="container px-10 md:px-24">
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
                    <span
                      onClick={(e) => navigate("/")}
                      className="text-indigo-600 font-medium hover:text-indigo-500 cursor-pointer"
                    >
                      Continue Shopping<span aria-hidden="true"> &rarr;</span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex h-screen">
            <div className="m-auto">
              <h3>Cart is Empty</h3>
              <span
                onClick={(e) => navigate("/")}
                className="text-indigo-600 font-medium hover:text-indigo-500 cursor-pointer"
              >
                Continue Shopping<span aria-hidden="true"> &rarr;</span>
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
