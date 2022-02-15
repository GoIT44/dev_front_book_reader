import { createReducer } from '@reduxjs/toolkit';
import { addNewBookSuccess } from '../actions/bookAction';

const initialState = {
    willRead: [],
    readNow: [],
    readFinish: [],
};

const bookReducer = createReducer(initialState, {
    [addNewBookSuccess]: (state, action) => ({
        ...state,
        willRead: [...state.willRead, action.payload.newBook],
    }),
});

export { bookReducer };
