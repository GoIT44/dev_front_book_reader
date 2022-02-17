// import { style } from "@mui/system";
// import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import iconSprite from "../../../images/icons-sprite.svg";
import BooksListItem from "./BooksListItem/BooksListItem";
import styles from "./Booklist.module.css";
import style from "./BooksListItem/BooksListItem.module.css";

const Booklist = () => {
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
        <li className={style.bookItem}>
          <div className={style.iconWrapper}>
            <svg className={style.iconBookList} width="22px" height="17px">
              <use xlinkHref={`${iconSprite}#icon-book`} />
            </svg>
            <span className={style.titleBook}> ...</span>
          </div>
        </li>
      )}
    </ul>
  );
};

export default Booklist;
