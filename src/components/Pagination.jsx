import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  const handlePageClick = (number) => {
    onPageChange(number);
  };

  return (
    <div className="pagination">
      {pageNumbers.map(number => (
        <button key={number}  onClick={() => handlePageClick(number)} className={currentPage === number ? number+'active' : number}>
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
