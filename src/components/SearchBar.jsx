import React, { useState } from 'react';

const SearchBar = ({ transactions=[], setFilteredTransactions }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    const searchValue = event.target.value;
    setSearchTerm(searchValue);


    const filteredTransactions = transactions.filter(transaction =>
      transaction.description.toLowerCase().includes(searchValue.toLowerCase())
    );

    
     function setFilteredTransactions(filteredTransactions){};
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by description..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <button onClick={handleSearch}>search</button>
    </div>
  );
};
    
export default SearchBar;
