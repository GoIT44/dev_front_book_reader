import { getAllBooks, formatError } from '../../services/bookApi';
import axios from 'axios';
import booksActions from './booksActions';

const {
  fetchBooksRequest,
  fetchBooksSuccess,
  fetchBooksError,
  removeBookRequest,
  removeBookSuccess,
  removeBookError,
  updateResumeBookRequest,
  updateResumeBookSuccess,
  updateResumeBookError,
  firstVisitSuccess,
  secondVisitSuccess,
} = booksActions;

const fetchBooks = () => async dispatch => {
  dispatch(fetchBooksRequest());

  try {
    const data = await getAllBooks();
    dispatch(fetchBooksSuccess(data));
    if (data.data.books.length === 0) {
      dispatch(firstVisitSuccess());
    }
    if (data.data.books.length > 0) {
      dispatch(secondVisitSuccess());
    }
  } catch (error) {
    dispatch(fetchBooksError(formatError(error)));
  }
};

const removeBook = id => async dispatch => {
  dispatch(removeBookRequest());
  try {
    axios
      .delete(`https://api-br.herokuapp.com/api/books/${id}`)
      .then(() => dispatch(removeBookSuccess(id)));
  } catch (error) {
    dispatch(removeBookError(formatError(error)));
  }
};

const updateResumeBook = (id, rating, resume) => async dispatch => {
  dispatch(updateResumeBookRequest());
  try {
    const { data } = await axios.patch(
      `https://api-br.herokuapp.com/api/books/${id}`,
      {
        rating,
        resume,
      },
    );
    dispatch(updateResumeBookSuccess(data));
  } catch (error) {
    console.log(error);
    dispatch(updateResumeBookError());
  }
};

const booksOperations = {
  fetchBooks,
  removeBook,
  updateResumeBook,
};

export default booksOperations;
