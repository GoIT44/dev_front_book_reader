import { createAction } from '@reduxjs/toolkit';

const fetchBooksRequest = createAction('books/fetchBooksRequest');
const fetchBooksSuccess = createAction('books/fetchBooksSuccess');
const fetchBooksError = createAction('books/fetchBooksError');


const booksActions = {
  fetchBooksRequest,
  fetchBooksSuccess,
  fetchBooksError
};
export default booksActions;

