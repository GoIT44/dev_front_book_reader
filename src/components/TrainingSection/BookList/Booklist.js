// import { style } from "@mui/system";
// import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
// import useMedia from "../../hooks/useMedia/useMedia.js";
import BooksListItem from "./BookListItem/BooksListItem";
import styles from "./Booklist.module.css";

const Booklist = () => {
  // const [screenWidth, setScreenWidth] = useState(null);
  // const [books, setBooks] = useState([]);
  // const screenSize = useMedia();

  const books = [
    {
      title: "Book",
      year: 2002,
      author: "Author",
      pages: 356,
      id: 1,
    },
    {
      title: "Animate Book",
      year: 2007,
      author: "Animate Author",
      pages: 549,
      id: 2,
    },
    {
      title: "Interesting Book",
      year: 2000,
      author: "Ivan Franko",
      pages: 326,
      id: 3,
    },
  ];

  // useEffect(() => {
  //   setScreenWidth(window.screen.width);
  // }, [screenWidth]);

  return (
    <>
      <ul className={styles.title__list}>
        <li key={nanoid()} className={styles.title__listItem}>
          Назва книги
        </li>
        <li key={nanoid()} className={styles.title__listItem}>
          Автор
        </li>
        <li key={nanoid()} className={styles.title__listItem}>
          Рік
        </li>
        <li key={nanoid()} className={styles.title__listItem}>
          Стор
        </li>
      </ul>
      <ul className={styles.bookList}>
        {books.length > 0 ? (
          books.map((book) => (
            <BooksListItem
              key={nanoid()}
              title={book.title}
              author={book.author}
              year={book.year}
              pages={book.pages}
            />
          ))
        ) : (
          <BooksListItem />
        )}
      </ul>
    </>
  );
};

export default Booklist;
