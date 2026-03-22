export default function Dish({dish}) {
  console.log(dish);
   if (!dish) return null;
    return(
        <div className="card">
      <img src={dish.strMealThumb} alt={dish.strMeal} />
      <h3>{dish.strMeal}</h3>
      <button>View Details</button>
    </div>
    );
}