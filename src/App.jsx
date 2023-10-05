import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookList from './components/BookList';
import SearchBar from './components/SearchBar';
import Pagination from './components/Pagination';
import Filter from './components/Filter';
import Sort from './components/Sort';
import AddBookForm from './components/AddBookForm';
import './App.css';

const App = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filters, setFilters] = useState('');
  const [sortValue, setSortValue] = useState('title');

  useEffect(() => {

    const fetchData = async () => {
      const page = currentPage;
      try {

        let queryString = `?page=${currentPage}`;

        if (searchTerm) {
          queryString += `&title=${encodeURIComponent(searchTerm)}`;
        }

        // if (filters) {
        //   queryString += `&category=${encodeURIComponent(filters)}`;
        // }

        // if (sortValue) {
        //   queryString += `&_sort=${encodeURIComponent(sortValue)}`;
        // }

        // Make the API request with the constructed query string
        const response = await axios.get(`http://68.178.162.203:8080/application-test-v1.1/books${queryString}`);

        setBooks(response.data.data);
        // Assuming the API response contains a header like 'x-total-count' indicating total items
        setTotalPages(response.data.pagination.totalPages);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, [searchTerm, currentPage]); // Dependencies to re-run the effect when these values change




  const handleAddToBooksList = book => {
    // Implement logic to add the selected book to your books list (e.g., dispatch a Redux action)
    console.log('Adding book to Books List:', book);
  };

  const handleEditBook = id => {
    // Implement logic to edit the selected book (e.g., navigate to edit page or open a modal)
    console.log('Editing book with ID:', id);
  };

  const handleFilterChange = (value) => {
    // Upda te filters state when the filter text changes
    setFilters(value);
  };

  return (
    <>
      <div className="title-heading">Book Search App</div>
      <div className="app-container">
        <div className="left-panel">
          <AddBookForm />
        </div>
        <div className="right-panel">
          <div className="top-row">
            <SearchBar onSearch={setSearchTerm} />
          </div>
          <Filter filters={filters} onFilterChange={handleFilterChange} />
          <Sort sortValue={sortValue} onSortChange={setSortValue} />
          <BookList books={books} setBooks={setBooks} sortValue={sortValue} filterValue={filters} />
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </div>
      </div>
    </>

  );
};

export default App;
