import { createAction } from '@reduxjs/toolkit';

const fetchBooksRequest = createAction('books/fetchRequest');
const fetchBooksSuccess = createAction('books/fetchSuccess');
const fetchBooksError = createAction('books/fetchError');


const booksActions = {
  fetchBooksRequest,
  fetchBooksSuccess,
  fetchBooksError
};
export default booksActions;

