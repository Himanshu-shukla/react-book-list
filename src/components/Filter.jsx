import React from 'react';
import './filter.css'; 


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
