import { useEffect, useState } from "react";
import Loader from "./Loader";

export default function DishDetails({onCloseDish, selectedDish}) {
const [dish, setDish] = useState({});
const [loading, setLoading] = useState(false);

useEffect(function(){

  function callback(e) {
    if(e.code === 'Escape') {
      onCloseDish();
    }
  }

  document.addEventListener("keydown", callback);

    return function() {
    document.removeEventListener("keydown", callback);
    }

}, [onCloseDish]);

useEffect(function(){
  if (!selectedDish) return;

  async function getDishDetails() {
    setLoading(true);
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${selectedDish}`);
    const data = await res.json();
    setDish(data.meals[0]);
    setLoading(false);

  }

  getDishDetails();  

}, [selectedDish]);

 if (!selectedDish) return null;
  if (loading) return <Loader />;
  if (!dish.strMeal) return null;

    return(
        <div className="details">
  <button className="back-btn" onClick={onCloseDish}>← Back</button>

  <div className="details-card">
    <img src={dish.strMealThumb} alt={dish.strMeal} />

    <div className="details-content">
      <h2>{dish.strMeal}</h2>
      <p className="category">Category: {dish.strCategory}</p>
      <p className="category">Type: {dish.strArea}</p>

      <button className="fav-btn">Add to Favorites</button>

      <h3>Instructions</h3>
      <div className="instructions">{dish.strInstructions}</div>
    </div>
  </div>
</div>
    );
}