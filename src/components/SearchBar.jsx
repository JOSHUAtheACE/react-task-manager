function SearchBar({ search, setSearch }) {
  return (
    <input
      className="search-bar"
      type="text"
      placeholder="Search Task..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default SearchBar;