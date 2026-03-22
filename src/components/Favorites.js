import Dish from "./Dish";

export default function Favorites() {
    return(
        <div className="favorites">
    <h2>❤️ Favorites</h2>
    <p>No favorite is added!</p>

    <div className="favorites-list">
    <Dish />
  </div>

  </div>
    );
}