import { style } from "@mui/system";
import React, { useState, useEffect } from "react";
import styles from "./Booklist.module.css";
import BooksListItem from "./BooksListItem/BooksListItem";

const Booklist = () => {
  // const [screenWidth, setScreenWidth] = useState(null);
  // const [books, setBooks] = useState([]);

  const books = [
    {
      title: "Book",
      year: 2002,
      author: "Author",
      pages: 356,
    },
    {
      title: "Animate Book",
      year: 2007,
      author: "Animate Author",
      pages: 549,
    },
    {
      title: "Interesting Book",
      year: 2000,
      author: "Ivan Franko",
      pages: 326,
    },
  ];

  // useEffect(() => {
  //   setScreenWidth(window.screen.width);
  // }, [screenWidth]);

  return (
      <ul className={styles.bookList}>
            {books.map((book)=><BooksListItem 
            title={book.title}
            author={book.author}
            year={book.year}
            pages={book.pages}
            />)}
      </ul>
  );
};

export default Booklist;
