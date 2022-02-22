// import { createReducer, combineReducers } from '@reduxjs/toolkit';
// import booksActions from './booksActions';

// const {
//   fetchBooksRequest,
//   fetchBooksSuccess,
//   fetchBooksError,
  
//   updateResumeBookRequest,
//   updateResumeBookSuccess,
//   updateResumeBookError,
 
// } = booksActions;

// const items = createReducer([], {
//     [fetchBooksSuccess]: (_, { payload }) => payload,
//     [updateResumeBookSuccess]: (state, { payload }) => {
//       const id = payload.data.book._id;
//       const stateBook = payload.data.book;
  
//       return state.map(book =>
//         book._id === id ? { ...book, ...stateBook } : book,
//       );
//     },
//   });

//   const loading = createReducer(false, {
//     [fetchBooksRequest]: () => true,
//     [fetchBooksSuccess]: () => false,
//     [fetchBooksError]: () => false,
   
//     [updateResumeBookRequest]: () => true,
//     [updateResumeBookSuccess]: () => false,
//     [updateResumeBookError]: () => false,
//   });

//   const error = createReducer(null, {
//     [fetchBooksRequest]: () => null,
//     [updateResumeBookRequest]: () => null,
  
//     [fetchBooksError]: (_, { payload }) => payload,
//     [updateResumeBookError]: (_, { payload }) => payload,
//   });
  
// export default combineReducers({
//   items,
//   loading,
//   error,
// });
