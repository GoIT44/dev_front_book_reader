import axios from 'axios';

axios.defaults.baseURL = 'https://api-br.herokuapp.com/api/'

export const addBook = (book) => {
    const tokenAPI = localStorage.getItem('token')   
    axios.defaults.headers.common.Authorization = `Bearer ${tokenAPI}`
    return axios
        .post('/library/addbook', book)
        .then(res => {
            return (res.data.data)})
        .catch(err => {
            throw new Error(err.response.data.message);
        });
}

//
export const getAllBooks = async () => (await axios.get('/books')).data;

export const formatError = ({ name, message, response }) => ({
    name,
    message,
    status: response?.status,
  });

export const getLibraryInfo = () => {
    const tokenAPI = localStorage.getItem('token')   
    axios.defaults.headers.common.Authorization = `Bearer ${tokenAPI}`
    return axios
        .get('/library')
        .then(res => {
            return (res.data.data.books)})
        .catch(err => {
            throw new Error(err.response.data.message);
        });
}
