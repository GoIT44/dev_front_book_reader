// import { getAllBooks, formatError, getLibraryInfo } from '../../services/bookApi';
// import axios from 'axios';
// import booksActions from './booksActions';

// const {
//   fetchBooksRequest,
//   fetchBooksSuccess,
//   fetchBooksError,
//   updateResumeBookRequest,
//   updateResumeBookSuccess,
//   updateResumeBookError
// } = booksActions;

//  const fetchBooks = () => async dispatch => {
//   dispatch(fetchBooksRequest());

//   try {
//     const data = await getLibraryInfo();
//     console.log(data)
//     dispatch(fetchBooksSuccess(data));
//   } catch (error) {
//     dispatch(fetchBooksError(formatError(error)));
//   }
// };

// const updateResumeBook = (id, rating, comment) => async dispatch => {
//   dispatch(updateResumeBookRequest());
//   try {
//     const { data } = await axios.post(
//       `https://api-br.herokuapp.com/api/library/addReview/${id}`,
//       {
//         rating,
//         comment,
//       },
//     );
//     dispatch(updateResumeBookSuccess(data));
//   } catch (error) {
//     console.log(error);
//     dispatch(updateResumeBookError());
//   }
// };


// const booksOperations = {
//   fetchBooks,
//   updateResumeBook
// };

// export default booksOperations;
