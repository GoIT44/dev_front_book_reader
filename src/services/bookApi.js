import axios from 'axios';

export const addBook = (book) => {
    return axios
        .post('/books', book)
        .then(res => {
                console.log(res.data)
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
