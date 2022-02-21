import { getAllBooks, formatError } from '../../services/bookApi';
import axios from 'axios';
import booksActions from './booksActions';

const {
  fetchBooksRequest,
  fetchBooksSuccess,
  fetchBooksError,
} = booksActions;

export const fetchBooks = () => async (dispatch) => {
  dispatch(fetchBooksRequest());

  try {
    const data = await getAllBooks();
    console.log(data)
    dispatch(fetchBooksSuccess(data));
  } catch (error) {
    dispatch(fetchBooksError(formatError(error)));
  }
};

const booksOperations = {
  fetchBooks,
};

export default booksOperations;
