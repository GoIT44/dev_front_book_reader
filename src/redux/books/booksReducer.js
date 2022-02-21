// import { createReducer, combineReducers } from '@reduxjs/toolkit';
// import booksActions from './booksActions';

// const {
//   fetchBooksRequest,
//   fetchBooksSuccess,
//   fetchBooksError,
//   addBookRequest,
// //   addBookSuccess,
//   addBookError,
//   updateResumeBookRequest,
// //   updateResumeBookSuccess,
//   updateResumeBookError,
//   removeBookRequest,
// //   removeBookSuccess,
//   removeBookError,
//   firstVisitSuccess,
//   secondVisitSuccess,
// } = booksActions;


// const items = createReducer([], {
//   [fetchBooksSuccess]: (_, action) => (action.payload)
// });

// const loading = createReducer(false, {
//   [fetchBooksRequest]: () => true,
//   [fetchBooksSuccess]: () => false,
//   [fetchBooksError]: () => false,
// });

// const error = createReducer(null, {
//   [fetchBooksRequest]: () => null,
//   [addBookRequest]: () => null,
//   [updateResumeBookRequest]: () => null,
//   [removeBookRequest]: () => null,
// //   [logoutRequest]: () => null,

//   [fetchBooksError]: (_, { payload }) => payload,
//   [addBookError]: (_, { payload }) => payload,
//   [updateResumeBookError]: (_, { payload }) => payload,
//   [removeBookError]: (_, { payload }) => payload,
// //   [logoutError]: (_, { payload }) => payload,
// });

// const firstVisit = createReducer(false, {
//   [firstVisitSuccess]: () => true,
//   [secondVisitSuccess]: () => false,
// //   [logoutSuccess]: () => false,
// });

// export default combineReducers({
//   items,
//   firstVisit,
//   loading,
//   error,
// });
