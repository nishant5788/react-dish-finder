export default function DishDetails() {
    return(
        <div className="details">
  <button className="back-btn">← Back</button>

  <div className="details-card">
    <img src="meal.jpg" alt="Meal" />

    <div className="details-content">
      <h2>Pizza Margherita</h2>
      <p className="category">Category: Italian</p>

      <button className="fav-btn">❤️ Add to Favorites</button>

      <h3>Instructions</h3>
      <p className="instructions">
        Mix ingredients, prepare dough, bake in oven...
      </p>
    </div>
  </div>
</div>
    );
}