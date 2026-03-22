import { useState } from "react";
import FetchDishes from "./hooks/fetchDishes";
import Header from "./components/Header";
import Search from "./components/Search";
import DishDetails from "./components/DishDetails";
import Favorites from "./components/Favorites";
import DishList from "./components/DishList";
import Loader from "./components/Loader";

export default function App() {
  const [searchInput, setSearchInput] = useState("");
  const [dishes, setDishes] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [selectedDish, setSelectedDish] = useState(null);
  const { isLoading } = FetchDishes(searchInput, setDishes);


  function handleCloseDish() {
    setSelectedDish(null);
  }

  function handleSelectDish(id) {
    setSelectedDish((selectedID) => (id === selectedID ? null : id));
  }

  return (
    <div className="app">
      <Header />
      <Search searchInput={searchInput} setSearchInput={setSearchInput} />

      {selectedDish ? (
  <DishDetails
    onCloseDish={handleCloseDish}
    selectedDish={selectedDish}
  />
) : isLoading ? (
  <Loader />
) : (
  <DishList
    dishes={dishes}
    setDishes={setDishes}
    onSelectDish={handleSelectDish}
  />
)}

      {/* {isLoading ? <Loader />
    :   <DishList dishes={dishes} setDishes={setDishes} onSelectDish={handleSelectDish} />
    }

    <DishDetails onCloseDish={handleCloseDish} selectedDish={selectedDish} /> */}
      
      <Favorites favorites={favorites} />

    </div>
  );
}
