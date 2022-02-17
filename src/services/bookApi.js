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
