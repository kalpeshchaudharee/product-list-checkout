import { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { emptyCart } from "../../features/users/cartSlice";

function PaymentForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [card, setCard] = useState({
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  });
  
  const handleInputFocus = (e) => {
    setCard({ ...card, focus: e.target.name });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setCard({ ...card, [name]: value });
  };

  const payAmount = () => {
    dispatch(emptyCart([]));
    alert('order successful');
    navigate("/");
  }
  return (
    <div id="PaymentForm" className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Cards
        cvc={card.cvc}
        expiry={card.expiry}
        focused={card.focus}
        name={card.name}
        number={card.number}
      />

      <form action="#" method="POST">
        <div className="shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-6">
                <input
                  type="tel"
                  name="number"
                  id="number"
                  maxLength="22"
                  minLength="16"
                  pattern="[\d| ]{16,22}"
                  placeholder="Card Number"
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="col-span-6 sm:col-span-6">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="col-span-4 sm:col-span-4">
              <input
                  type="text"
                  name="expiry"
                  id="expiry"
                  placeholder="mm/yy"
                  maxLength="5"
                  minLength="4"
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  className="mt-1 px-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div className="col-span-2 sm:col-span-2">
                <input
                  type="text"
                  name="cvv"
                  id="cvv"
                  placeholder="CVV"
                  maxLength="4"
                  minLength="3"
                  pattern="\d{3,4}"
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              onClick={payAmount}
              className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Pay Now
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default PaymentForm;