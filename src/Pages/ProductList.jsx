import { useState } from "react";
import Header from "../Components/Header";

const products = [
  {
    id: 1,
    name: "Earthen Bottle",
    href: "#",
    price: 48,
    is_selected: false,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "#",
    price: 35,
    is_selected: false,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    price: 89,
    is_selected: false,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: 35,
    is_selected: false,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 5,
    name: "Basic Tee",
    href: "#",
    price: 35,
    is_selected: false,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    color: "Black",
  },
];

function ProductList() {
  const [productList, setProductList] = useState(products);
  const selectProduct = (product, e) => {
    e.preventDefault();
    var updatedProduct = productList.map((productData) => {
      if (productData.id === product.id) {
        productData.qty = 1;
        productData.is_selected = !productData.is_selected;
      }
      return productData;
    });
    setProductList(updatedProduct);
  };
  const chekoutProduct = () => {
    var selectedProducts = productList.filter((product) => product.is_selected);
    localStorage.setItem('cart_items', JSON.stringify(selectedProducts));
    window.location.href = '/checkout';
  };
  const updateQty = (e) => {

  };
  const decrement = (product, e) => {
    if(product.qty > 0) {
      var updatedProduct = productList.map((productData) => {
        if (productData.id === product.id) {
          if(product.qty === 1) {
            productData.is_selected = false;
          }
          productData.qty -= 1;
        }
        return productData;
      });
      setProductList(updatedProduct);
    }
  };
  const increment = (product, e) => {
    var updatedProduct = productList.map((productData) => {
      if (productData.id === product.id) {
        productData.qty += 1;
      }
      return productData;
    });
    setProductList(updatedProduct);
  };
  return (
    <div className="bg-white">
      <Header title="Featured" />
      <div className="max-w-2xl mx-auto py-8 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8 mt-10">
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {productList.map((product) => (
            <div key={product.id}>
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
                    <h3 className="text-sm text-gray-700">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.color}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    ${product.price}
                  </p>
                </div>
                {
                  product.is_selected === false ?
                    (
                      <button
                        onClick={(e) => selectProduct(product, e)}
                        className="mt-5 bg-indigo-600 border border-transparent rounded-md py-2 px-4 flex items-center justify-center font-sm text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mx-auto"
                      >
                        Add To Cart
                      </button>
                    ) : (
                      <div className="flex justify-center mt-7">
                        <button
                          onClick={(e) => decrement(product, e)}
                          className="px-5 m-0 border"
                        >
                          -
                        </button>
                        <input type="text" value={product.qty} onChange={(e) => updateQty(product, e)} className="w-10 border text-center"/>
                        <button
                          onClick={(e) => increment(product, e)}
                          className="px-5 m-0 border"
                        >
                          +
                        </button>
                      </div>
                    )
                }
              </div>
            </div>
          ))}
        </div>
      </div>
      {productList.filter((product) => product.is_selected).length > 0 && (
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start float-right mr-10 sticky bottom-10">
          <div className="rounded-md shadow">
            <button
              onClick={chekoutProduct}
              className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Buy Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductList;
