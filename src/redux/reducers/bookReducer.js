import { createReducer } from '@reduxjs/toolkit';
import { addNewBookSuccess } from '../actions/bookAction';
import { getUsersBooksSuccess } from '../actions/userLibraryAction';

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
    [getUsersBooksSuccess]: (state, { payload }) => {
        return {
            ...state,
            willRead: (payload.filter((book)=> book.readStatus === 'Going to read')),
            readNow: (payload.filter((book)=> book.readStatus === 'Reading now')),
            readFinish: (payload.filter((book)=> book.readStatus === 'Already read')),
        };
    },
});

export { bookReducer };
