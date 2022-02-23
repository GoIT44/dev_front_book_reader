import { createAction } from '@reduxjs/toolkit';

export const getUsersBooksRequest = createAction('userLibrary/getUsersBooksRequest');
export const getUsersBooksSuccess = createAction('userLibrary/getUsersBooksSuccess');
export const getUsersBooksError = createAction('userLibrary/getUsersBooksError');

export const updateResumeBookRequest = createAction('books/updateResumeBookRequest');
export const updateResumeBookSuccess = createAction('books/updateResumeBookSuccess');
export const updateResumeBookError = createAction('books/updateResumeBookError');

 