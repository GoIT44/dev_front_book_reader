import * as api from '../../services/bookApi';
import {
    addNewBookRequest,
    addNewBookSuccess,
    addNewBookError,
} from '../actions/bookAction';

const addBookOperation = book => async dispatch => {
    dispatch(addNewBookRequest());
    try {
        const response = await api.addBook(book);

        dispatch(addNewBookSuccess(response));
    } catch (error) {
        dispatch(addNewBookError(error));
    }
};

export { addBookOperation };
