import axios from "axios";

axios.defaults.baseURL = "https://api-br.herokuapp.com/api/";

export const addBook = (book) => {
  const tokenAPI = localStorage.getItem("token");
  axios.defaults.headers.common.Authorization = `Bearer ${tokenAPI}`;
  return axios
    .post("/library/addbook", book)
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      throw new Error(err.response.data.message);
    });
};

export const getLibraryInfo = () => {
  const tokenAPI = localStorage.getItem("token");
  axios.defaults.headers.common.Authorization = `Bearer ${tokenAPI}`;
  return axios
    .get("/library")
    .then((res) => {
      // console.log(res.data.data.books);
      return res.data.data.books;
    })
    .catch((err) => {
      throw new Error(err.response.data.message);
    });
};

// export const addReviewToBook = (id, book) => {
//     return axios
//         .patch('/library/addReview', book)
//         .then(res => res.data.data)
//         .catch(err => {
//             throw new Error(err.response.data.message);
//         });
// }
