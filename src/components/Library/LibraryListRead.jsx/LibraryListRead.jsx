// import React, { useContext } from 'react';
import { useSelector } from "react-redux";
import { ReactSVG } from "react-svg";

// import booksSelectors from "../../../redux/books/booksSelectors";
import { getNowRead } from "../../../redux/selectors/bookSelector";

import styles from "../LibraryList/LibraryList.module.scss";
import book from "../../../assets/svg/bookIcon.svg";

const LibraryListRead = () => {
  const books = useSelector(getNowRead);
 
  return (
    <>
      {books.some((book) => book.readStatus === "Reading now") && (
        <div className={styles.category}>
          <h2 className={styles.categoryTitle}>Читаю</h2>
          <div className={styles.categoryListTitle}>
            <h3 className={styles.categoryListTitleItemName}>Назва</h3>
            <h3 className={styles.categoryListTitleItemAuthor}>Автор</h3>
            <h3 className={styles.categoryListTitleItemYear}>Рік</h3>
            <h3 className={styles.categoryListTitleItemPage}>Стор.</h3>
          </div>
          <ul>
            {books.map(
              ({ _id, bookTitle, author, publicDate, numbOfPages, readStatus }) =>
              readStatus === "Reading now" && (
                  <li key={_id} className={styles.bookListItem}>
                    <ReactSVG src={book} className={styles.iconRead} />
                    <div className={styles.bookListItemName}>
                      <span>
                        <ReactSVG src={book} className={styles.iconReadMob} />
                      </span>
                      <span className={styles.titleBookName}>{bookTitle}</span>
                    </div>
                    <p className={styles.bookListItemAuthor}>
                      <span className={styles.bookListItemMob}>Автор</span>
                      {author}
                    </p>
                    <p className={styles.bookListItemYear}>
                      <span className={styles.bookListItemMob}>Рік</span>
                      {publicDate}
                    </p>
                    <p className={styles.bookListItemPage}>
                      <span className={styles.bookListItemMob}>Стор.</span>
                      {numbOfPages}
                    </p>
                  </li>
                )
            )}
          </ul>
        </div>
      )}
    </>
  );
};

export default LibraryListRead;
