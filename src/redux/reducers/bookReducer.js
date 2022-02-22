import { createReducer } from '@reduxjs/toolkit';
import { addNewBookSuccess } from '../actions/bookAction';
import { getUsersBooksSuccess, updateResumeBookSuccess } from '../actions/userLibraryAction';

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
// const initialState = {
//     willRead: [],
//     readNow: [],
//     readFinish: [],
// };
//  const addBook = (state = [], action) => {
//     return [...state, action.payload.data];
//   };


// const bookReducer = createReducer([], {
//     [getUsersBooksSuccess]: (_, { payload }) => payload.data.books,
//     [addNewBookSuccess]: addBook,
//     [updateResumeBookSuccess]: (state, { payload }) => {
//         const id = payload.data.book._id;
//         const stateBook = payload.data.book;
    
//         return state.map(book =>
//           book._id === id ? { ...book, ...stateBook } : book,
//         );
// }});

export { bookReducer };
