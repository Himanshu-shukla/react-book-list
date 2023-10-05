// // bookActions.js
// import axios from 'axios';

// export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
// export const SET_FILTERS = 'SET_FILTERS';

// export const fetchBooks = (query) => async (dispatch) => {
//   try {
//     const response = await axios.get(`http://68.178.162.203:8080/application-test-v1.1/books${query}`);
//     dispatch({ type: FETCH_BOOKS_SUCCESS, payload: response.data.data });
//   } catch (error) {
//     // Handle error if API request fails
//     console.error('Error fetching data: ', error);
//   }
// };

// export const setFilters = (filters) => {
//   return { type: SET_FILTERS, payload: filters };
// };
