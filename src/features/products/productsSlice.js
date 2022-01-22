import { createSlice } from "@reduxjs/toolkit";

const productList = [
  {
    id: 1,
    name: "Earthen Bottle",
    href: "#",
    price: 48,
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
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    color: "Black",
  },
];

const initialState = productList;

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    searchedItem(state, action) {
      state = productList;
      if (action.payload) {
        var filteredData = state.filter((item) => {
          return item.name.toLowerCase().includes(action.payload);
        });
        return filteredData;
      }
      return state;
    },
  },
});

export const { searchedItem } = productsSlice.actions;

export default productsSlice.reducer;
