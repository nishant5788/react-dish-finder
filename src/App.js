import { useState } from "react";
import FetchDishes from "./hooks/fetchDishes";
import Header from "./components/Header";
import Search from "./components/Search";
import Favorites from "./components/Favorites";
import DishList from "./components/DishList";

export default function App() {
  const [searchInput, setSearchInput] = useState("");
  const [dishes, setDishes] = useState([]);

  const { isLoading } = FetchDishes(searchInput, setDishes);

  function handleSearchInput() {}

  return (
    <div className="app">
      <Header />
      <Search searchInput={searchInput} setSearchInput={setSearchInput} />

      <DishList dishes={dishes} setDishes={setDishes} />
      <Favorites />

    </div>
  );
}
