import { style } from "@mui/system";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getTrainingBooks } from "../../redux/training/trainingSelectors";
import styles from "./Booklist.module.css";
import BooksListItem from "./BooksListItem/BooksListItem";

const Booklist = () => {
  // const [screenWidth, setScreenWidth] = useState(null);
  // const [books, setBooks] = useState([]);
  const books = useSelector(getTrainingBooks)
  
  
  // const books = [
  //   {
  //     title: "Book",
  //     year: 2002,
  //     author: "Author",
  //     pages: 356,
  //   },
  //   {
  //     title: "Animate Book",
  //     year: 2007,
  //     author: "Animate Author",
  //     pages: 549,
  //   },
  //   {
  //     title: "Interesting Book",
  //     year: 2000,
  //     author: "Ivan Franko",
  //     pages: 326,
  //   },
  // ];

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
            {books.map((book)=><BooksListItem 
            title={book.bookTitle}
            author={book.author}
            year={book.publicDate}
            pages={book.numbOfPages}
            id={book._id}
            />)}
      </ul>
  );
};

export default Booklist;
