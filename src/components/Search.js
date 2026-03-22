export default function Search({searchInput, setSearchInput}) {

return (
    <div className="search-box">
    <input 
    type="text" 
    placeholder="Search pizza, pasta..."
    value={searchInput}
    onChange={(e) => setSearchInput(e.target.value) }
    />
  </div>
);

}