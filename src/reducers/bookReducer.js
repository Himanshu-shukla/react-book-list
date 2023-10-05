// // bookReducer.js
// import { FETCH_BOOKS_SUCCESS, SET_FILTERS } from '../actions/bookActions';

// const initialState = {
//   books: [],
//   filters: '',
// };

// const bookReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case FETCH_BOOKS_SUCCESS:
//     return {    
//       ...state,
//       books: action.payload, // Update the books state with fetched data
//     };
//     case SET_FILTERS:
//       return { ...state, filters: action.payload };
//     default:
//       return state;
//   }
// };

// export default bookReducer;
