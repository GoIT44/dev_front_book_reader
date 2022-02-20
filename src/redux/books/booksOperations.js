import { getAllBooks, formatError } from '../../services/bookApi';
import axios from 'axios';
import booksActions from './booksActions';

const {
  fetchBooksRequest,
  fetchBooksSuccess,
  fetchBooksError,

  // firstVisitSuccess,
  // secondVisitSuccess,
} = booksActions;

const fetchBooks = () => async dispatch => {
  dispatch(fetchBooksRequest());

  try {
    const data = await getAllBooks();
    dispatch(fetchBooksSuccess(data));
    
    // if (data.data.books.length === 0) {
    //   dispatch(firstVisitSuccess());
    // }
    // if (data.data.books.length > 0) {
    //   dispatch(secondVisitSuccess());
    // }
  } catch (error) {
    dispatch(fetchBooksError(formatError(error)));
  }
};

const booksOperations = {
  fetchBooks,
};

export default booksOperations;
