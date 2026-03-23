import Dish from "./Dish";

export default function Favorites({ favorites, onDeleteFavorite, onSelectDish }) {
  return (
    <div className="favorites">
      {favorites.length === 0 || (
        <div>
          <h2>❤️ Favorites ({favorites.length})</h2>
        </div>
      )}

      <div className="favorites-list">
        {favorites?.map((favorite) => (
          <Dish
            dish={favorite}
            key={favorite.idMeal}
            favorites={favorites}
            onDeleteFavorite={onDeleteFavorite}
            onSelectDish={onSelectDish}
          />
        ))}
      </div>
    </div>
  );
}
