// import axios from 'axios';

// const API_BASE_URL = 'http://68.178.162.203:8080/application-test-v1.1';

// const api = axios.create({
//   baseURL: API_BASE_URL,
// });

// export const fetchBooks = async (searchTerm, filters, sortValue, currentPage) => {
//   try {
//     const response = await api.get('/books', {
//       params: {
//         title: searchTerm,
//         category: filters,
//         _sort: sortValue,
//         _page: currentPage,
//         _limit: 25, // Number of items per page
//       },
//     });
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

// export const addBookToAPI = async (book) => {
//   try {
//     const response = await api.post('/books', book);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

// export const editBookInAPI = async (id, updatedBook) => {
//   try {
//     const response = await api.put(`/books/${id}`, updatedBook);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

// // You can add more functions for other API requests if needed

// export default api;
