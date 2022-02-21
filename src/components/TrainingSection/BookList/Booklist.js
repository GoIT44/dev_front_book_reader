import { nanoid } from "nanoid";
import styles from "./Booklist.module.css";
import BooksListItem from "./BooksListItem/BooksListItem";

const Booklist = ({bookList}) => {
  

  return (
    <ul className={styles.bookList}>
      <li className={styles.bookItemTitle}>
        <ul className={styles.bookDescrList}>
          <li className={styles.bookDescrItem}>
            <p className={styles.subTitle}>Назва книги</p>
          </li>
          <li className={styles.bookDescrItem}>
            <p className={styles.subTitle}>Автор</p>
          </li>
          <li className={styles.bookDescrItem}>
            <p className={styles.subTitle}>Рік</p>
          </li>
          <li className={styles.bookDescrItem}>
            <p className={styles.subTitle}>Стор</p>
          </li>
        </ul>
      </li>
      {bookList.length > 0 ? (
        bookList.map((book) => (
          <BooksListItem
            key={nanoid()}
            title={book.bookTitle}
            author={book.author}
            year={book.publicDate.split('-')[0]}
            pages={book.numbOfPages}
            id={book._id}
          />
        ))
      ) : (
        <BooksListItem />
      )}
    </ul>
  );
};

export default Booklist;
