import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchedItem } from "../../features/products/productsSlice";

export default function ProductSearch() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const searchedProduct = (event) => {
    var searched = event.target.value;
    setSearch(searched);
    dispatch(searchedItem(searched));
  };
  return (
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search product here..."
        value={search}
        onChange={searchedProduct}
        className="shadow appearance-none border border-gray-500 hover:border-black focus:border-black rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-fit md:w-96 justify-end"
      />
  );
}
