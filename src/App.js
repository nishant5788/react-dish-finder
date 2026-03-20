export default function App() {
  return (
    <div class="app">
  <header class="header">
    <h1>🍕 Food Explorer</h1>
    <p>Search delicious meals instantly</p>
  </header>

  <div class="search-box">
    <input type="text" placeholder="Search pizza, pasta..." />
  </div>

  <div class="results">
    <div class="card">
      <img src="meal.jpg" />
      <h3>Pizza Margherita</h3>
      <button>View Details</button>
    </div>
  </div>

  <div class="favorites">
    <h2>❤️ Favorites</h2>
  </div>
</div>
  );
}