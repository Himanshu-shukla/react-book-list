import React, { useState, useEffect  } from 'react';
import axios from 'axios';

const BookList = ({ books, setBooks, sortValue }) => {
  const [editedBook, setEditedBook] = useState(null);
  const [sortedBooks, setSortedBooks] = useState([]);


  const handleEdit = (book) => {
    setEditedBook(book);
  };

  const handleSave = async () => {
    try {
      if (editedBook) {
        // Send a PUT request to update the book data in the API
        await axios.put(`http://68.178.162.203:8080/application-test-v1.1/books/${editedBook.id}`, {
          title: editedBook.title,
          author: editedBook.author,
        });
        // Handle success, for example, show a success message or update the book list
        console.log('Book updated successfully!');
        // Reset editedBook state after successful submission

        setBooks(prevBooks => {
          return prevBooks.map(book => {
            if (book.id === editedBook.id) {
              return editedBook;
            }
            return book;
          });
        });

        setEditedBook(null);

      }
    } catch (error) {
      // Handle error, for example, show an error message to the user
      console.error('Error updating book:', error);
    }
  };

  const handleInputChange = (e, field) => {
    if (editedBook) {
      setEditedBook({ ...editedBook, [field]: e.target.value });
    }
  };

  useEffect(() => {
    // Sort the books based on the selected sorting option (title or author)
    const sorted = [...books].sort((a, b) => {
      if (sortValue === 'title') {
        return (a.title || '').localeCompare(b.title || '');
      } else if (sortValue === 'author') {
        return (a.author || '').localeCompare(b.author || '');
      }
      return 0;
    });
    setSortedBooks(sorted);
  }, [books, sortValue]);



  return (
    <div className="book-list">
      {sortedBooks ?.map((book) => (
        <div key={book.id} className="book-item">
          {editedBook && editedBook.id === book.id ? (
            <div>
              <input
                type="text"
                value={editedBook.title}
                onChange={(e) => handleInputChange(e, 'title')}
              />
              <input
                type="text"
                value={editedBook.author}
                onChange={(e) => handleInputChange(e, 'author')}
              />
              <button onClick={handleSave}>Save</button>
            </div>
          ) : (
              <div>
                <h3>{book.title}</h3>
                <p>Author: {book.author}</p>
                <button onClick={() => handleEdit(book)}>Edit</button>
              </div>
            )}
        </div>
      ))}
    </div>
  );
};

export default BookList;
