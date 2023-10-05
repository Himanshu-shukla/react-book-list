import React from 'react';

const Filter = ({ filters, onFilterChange }) => {
  return (
    <div className="filter">
      <label>Filter by Title:</label>
      <input 
        type="text"
        value={filters}
        onChange={e => onFilterChange(e.target.value)} 
        placeholder="Enter title keyword..."
      />
    </div>
  );
};

export default Filter;
