import * as api from '../../services/bookApi';
import axios from 'axios';

import {
    addNewBookRequest,
    addNewBookSuccess,
    addNewBookError,
} from '../actions/bookAction';

import {
    getUsersBooksRequest,
    getUsersBooksSuccess,
    getUsersBooksError,

  updateResumeBookRequest,
  updateResumeBookSuccess,
  updateResumeBookError,


} from '../actions/userLibraryAction';

const addBookOperation = book => async dispatch => {
    dispatch(addNewBookRequest());
    try {
        const response = await api.addBook(book);
        dispatch(addNewBookSuccess(response));
    } catch (error) {
        dispatch(addNewBookError(error));
    }
};

const getUsersBooksOperation = () => async (dispatch, getState) => {
    dispatch(getUsersBooksRequest());

    try {
        const data = await api.getLibraryInfo();
        console.log(data);
        dispatch(getUsersBooksSuccess(data));
    } catch (error) {
        dispatch(getUsersBooksError(error.message));
        console.log(error);
    }
};

const updateResumeBook = (id, rating, comment) => async dispatch => {
    dispatch(updateResumeBookRequest());
    try {
      const { data } = await axios.post(
        `https://api-br.herokuapp.com/api/library/addReview/${id}`,
        {
          rating,
          comment,
        },
      );

      dispatch(updateResumeBookSuccess(data));
    } catch (error) {
      console.log(error);
      dispatch(updateResumeBookError());
    }
  };

export { addBookOperation, getUsersBooksOperation, updateResumeBook };
