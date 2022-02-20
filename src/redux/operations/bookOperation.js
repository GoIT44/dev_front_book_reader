import * as api from '../../services/bookApi';
import {
    addNewBookRequest,
    addNewBookSuccess,
    addNewBookError,
} from '../actions/bookAction';

import {
    getUsersBooksRequest,
    getUsersBooksSuccess,
    getUsersBooksError,
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

        dispatch(getUsersBooksSuccess(data));
    } catch (error) {
        dispatch(getUsersBooksError(error.message));
    }
};

export { addBookOperation, getUsersBooksOperation };
