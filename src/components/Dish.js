export default function Dish({dish, onSelectDish}) {
   if (!dish) return null;
    return(
      <div className="card">
      <img src={dish.strMealThumb} alt={dish.strMeal} />
      <h3>{dish.strMeal}</h3>
      <button onClick={() => onSelectDish(dish.idMeal)} key={dish.idMeal}>View Details</button>
    </div>
    );
}