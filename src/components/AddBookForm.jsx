import React, { useState } from 'react';
import axios from 'axios';
import './addbookform.css'; 


const AddBookForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    // Add other form fields as needed
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddBook = async () => {
    try {
      // Send a POST request to add the book data to the API
      await axios.post('http://68.178.162.203:8080/application-test-v1.1/books', formData);
      // Handle success, for example, show a success message or redirect the user
      console.log('Book added successfully!');
      // Reset the form after successful submission
      setFormData({
        title: '',
        author: '',
        // Reset other form fields as needed
      });
    } catch (error) {
      // Handle error, for example, show an error message to the user
      console.error('Error adding book:', error);
    }
  };

  return (
    <div className="add-book-form">
      <h2>Add a New Book</h2>
      <form>
        <div className="form-group">
          <label>Title:</label>
          <input type="text" name="title" value={formData.title} onChange={handleFormChange} />
        </div>
        <div className="form-group">
          <label>Author:</label>
          <input type="text" name="author" value={formData.author} onChange={handleFormChange} />
        </div>
        <button type="button" onClick={handleAddBook}>Add Book</button>
      </form>
    </div>
  );
};

export default AddBookForm;
