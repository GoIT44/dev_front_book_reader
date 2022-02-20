import { createSelector } from '@reduxjs/toolkit';

const getAllBooks = state => state.books.items; //
const getResume = state => state.books.items; //

const getPlanBooks = createSelector([getAllBooks], books =>
  books.filter(({ status }) => status === 'going to read'),
);

const getLoading = state => state.books.loading;

const getError = state => state.books.error;
// const isFirstVisit = state => state.books.firstVisit;

const booksSelectors = {
  getAllBooks,
  getPlanBooks,
  getLoading,
  getError,
  // isFirstVisit,
  getResume,
};
export default booksSelectors;
