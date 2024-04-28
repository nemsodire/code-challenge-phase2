import React, { useState } from 'react';

const SearchBar = ({ onSearchTermChange }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    onSearchTermChange(searchTerm); 
  };

  return (
    <div>
      <form>
        <input
          type="search"
          id="search_bar"
          placeholder="Search"
          value={searchTerm} 
          onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
