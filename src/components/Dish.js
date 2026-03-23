export default function Dish({
  dish,
  onSelectDish,
  favorites,
  onAddFavorite,
  onDeleteFavorite,
}) {
  const isFavorite = favorites
    .map((fav) => fav.idMeal)
    .includes(dish.idMeal);

  if (!dish) return null;

  return (
    <div className="card">
      <img src={dish.strMealThumb} alt={dish.strMeal} />
      <h3>{dish.strMeal}</h3>
      <div className="card-btns">

      <button onClick={() => onSelectDish(dish.idMeal)}>
        View Details
      </button>

      {isFavorite ? (
        <button
          className="remove-btn"
          onClick={() => onDeleteFavorite(dish.idMeal)}
        >
          Remove
        </button>
      ) : (
        <button
          onClick={() => onAddFavorite(dish)}
        >
          Add to Favorites
        </button>
        
      )}
      </div>
    </div>
  );
}