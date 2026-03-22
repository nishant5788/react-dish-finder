import Dish from './Dish';

export default function DishList({ dishes }) {
  if (!dishes) return null;
  return (
    <div className="results">
      {dishes?.map((dish) => (
        <Dish dish={dish} key={dish.idMeal} />
      ))}
    </div>
  );
}
