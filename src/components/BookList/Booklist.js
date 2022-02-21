import { style } from "@mui/system";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getTotalBook, getTraining, getTrainingBooks } from "../../redux/training/trainingSelectors";
import styles from "./Booklist.module.css";
import BooksListItem from "./BooksListItem/BooksListItem";

const Booklist = () => {
    // const [books, setBooks] = useState([])
    const training = useSelector(getTraining);
    if (!training) return
    const booksNeedRead = training.trainingBooks
    // setBooks(booksNeedRead)
  return (
      <ul className={styles.bookList}>
        <li key="title" className={styles.bookItemTitle}>
          <ul className={styles.bookDescrList}>
                <li key="nameBook" className={styles.bookDescrItem}>
                    <p className={styles.subTitle}>Назва книги</p>
                </li>
                <li key="author" className={styles.bookDescrItem}>
                    <p className={styles.subTitle}>Автор</p>
                </li>
                <li key="year" className={styles.bookDescrItem}>
                    <p className={styles.subTitle}>Рік</p>
                </li>
                <li key="page" className={styles.bookDescrItem}>
                    <p className={styles.subTitle}>Стор</p>
                </li>
          </ul>
        </li>
            {booksNeedRead && booksNeedRead.map((book)=><BooksListItem 
            title={book.bookTitle}
            author={book.author}
            year={book.publicDate}
            pages={book.numbOfPages}
            id={book._id}
            read={book.read}
            />)}
      </ul>
  );
};

export default Booklist;
