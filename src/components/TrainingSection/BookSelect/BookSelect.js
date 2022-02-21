import styles from './BookSelect.module.css';
import {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBookTrainingOperation } from '../../../redux/trainingPlan/trainingPlanOperations';
import { getBookList } from '../../../redux/trainingPlan/trainingPlanSelectors';

const BookSelect = ({bookSelect, getbook}) => {
    
    const dispatch = useDispatch()
    const bookPrev = useSelector(getBookList)
    const [currentBook, setCurrentBook] = useState("");
    const [arrBook, setArrBook] = useState([]);
    const onChange = (e) => {
        setCurrentBook(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        !bookPrev.includes(currentBook) && dispatch(addBookTrainingOperation(currentBook))
        setCurrentBook("")
            
    }
    return (
        <div className={styles.bookSelect}>
            <div className={styles.select__wrap}>
                <form className={styles.form} onSubmit={onSubmit}>
                    <select className={styles.selectBook} value={currentBook} onChange={onChange}>
                    <option value="..." selected>....</option>
                        {bookSelect && bookSelect.map((book)=>(
                            <option id={book._id} value={book._id}>{book.bookTitle}</option>
                        ))}
                        <option></option>
                    </select>
                    <div className={styles.btn__wrap}>
                        <button type="submit" className={styles.btn__add}>Додати</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default BookSelect;