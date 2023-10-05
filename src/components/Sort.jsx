import React from 'react';

const Sort = ({ sortValue, onSortChange }) => {
  return (
    <div className="sort">
      <label>Sort by:</label>
      <select onChange={e => onSortChange(e.target.value)} value={sortValue}>
        <option value="title">Title</option>
        <option value="author">Author</option>
      </select>
    </div>
  );
};

export default Sort;
