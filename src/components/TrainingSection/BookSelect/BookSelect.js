import styles from "./BookSelect.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBookTrainingOperation } from "../../../redux/trainingPlan/trainingPlanOperations";
import { getBookList } from "../../../redux/trainingPlan/trainingPlanSelectors";

const BookSelect = ({ bookSelect }) => {
  const dispatch = useDispatch();
  const bookPrev = useSelector(getBookList);
  const [currentBook, setCurrentBook] = useState("");
  const [arrBook, setArrBook] = useState([]);
  const onChange = (e) => {
    setCurrentBook(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    !bookPrev.includes(currentBook) &&
      dispatch(addBookTrainingOperation(currentBook));
    setCurrentBook("");
  };
  return (
    <div className={styles.bookSelect}>
      <form className={styles.form} onSubmit={onSubmit}>
        <div className={styles.select__wrap}>
          <label className={styles.labelSelect} forhtml="selectBook">
            Обрати книги з бiблiотеки
          </label>
          <select
            type="select"
            className={styles.select}
            value={currentBook}
            onChange={onChange}
            id="selectBook"
          >
            <option value="...">....</option>
            {bookSelect &&
              bookSelect.map((book) => (
                <option key={book._id} id={book._id} value={book._id}>
                  {book.bookTitle}
                </option>
              ))}
          </select>
        </div>
        <div className={styles.btn__wrap}>
          <button type="submit" className={styles.btn__add}>
            Додати
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookSelect;
