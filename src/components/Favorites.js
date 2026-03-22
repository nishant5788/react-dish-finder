import Dish from "./Dish";

export default function Favorites({favorites}) {
    
    return(
        <div className="favorites">
    <h2>❤️ Favorites</h2>
    {favorites.length === 0 && <p>No favorite is added!</p>}

    <div className="favorites-list">
    <Dish />
  </div>

  </div>
    );
}