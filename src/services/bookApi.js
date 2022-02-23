import axios from "axios";

axios.defaults.baseURL = "https://api-br.herokuapp.com/api/";

export const addBook = async (book) => {
  const tokenAPI = localStorage.getItem("token");
  axios.defaults.headers.common.Authorization = `Bearer ${tokenAPI}`;
  await axios
    .post("/library/addbook", book)
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      throw new Error(err.response.data.message);
    });
};

export const formatError = ({ name, message, response }) => ({
    name,
    message,
    status: response?.status,
  });

export const getLibraryInfo = async () => {
  const tokenAPI = localStorage.getItem("token");
  axios.defaults.headers.common.Authorization = `Bearer ${tokenAPI}`;
  const {data} = await axios.get("/library")
  console.log(data);
  return data.data.books;
};
