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

   function handleAddFavorite(dish) {
  setFavorites((favorites) => [...favorites, dish]);
   handleCloseDish();
  }

  function handleDeleteFavorite(id) {
    setFavorites((fav) => fav.filter((dish) => dish.idMeal !== id));
  }

  return (
    <div className="app">
      <Header />
      <Search searchInput={searchInput} setSearchInput={setSearchInput} />

      {selectedDish ? (
  <DishDetails
    onCloseDish={handleCloseDish}
    selectedDish={selectedDish}
    onAddFavorite={handleAddFavorite}
    favorites={favorites}
  />
) : isLoading ? (
  <Loader />
) : (
  <DishList
    dishes={dishes}
    setDishes={setDishes}
    onSelectDish={handleSelectDish}
    selectedDish={selectedDish}
    favorites={favorites}
    onAddFavorite={handleAddFavorite}
    onDeleteFavorite={handleDeleteFavorite}
  />
)}
      
      <Favorites favorites={favorites} onDeleteFavorite={handleDeleteFavorite} onSelectDish={handleSelectDish} />

    </div>
  );
}
