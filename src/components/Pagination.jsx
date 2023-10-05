import React from 'react';
import './pagination.css'; 

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  const handlePageClick = (number) => {
    onPageChange(number);
  };

  return (
    <div className="pagination">
      {pageNumbers.map(number => (
        <button key={number}  onClick={() => handlePageClick(number)} className={currentPage === number ? 'active' : "default"}>
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
