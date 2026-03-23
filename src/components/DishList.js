import Dish from './Dish';

export default function DishList({ dishes, onSelectDish, selectedDish, favorites, onAddFavorite, onDeleteFavorite }) {


  if (!dishes) return null;
  return (
    <div className="results">
      {dishes.length === 0 && <h3>Nothing to show...</h3>}
      {dishes?.map((dish) => (
        <Dish dish={dish} key={dish.idMeal} onSelectDish={onSelectDish} selectedDish={selectedDish} favorites={favorites} onDeleteFavorite={onDeleteFavorite} onAddFavorite={onAddFavorite} />
      ))}
    </div>
  );
}
