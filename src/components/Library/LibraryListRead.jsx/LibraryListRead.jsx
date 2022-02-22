// import React, { useContext } from 'react';
import { useSelector } from "react-redux";
import { ReactSVG } from "react-svg";

// import booksSelectors from "../../../redux/books/booksSelectors";
import { getFinishRead } from "../../../redux/selectors/bookSelector";

import styles from "../LibraryList/LibraryList.module.scss";
import book from "../../../assets/svg/bookIcon.svg";

const LibraryListRead = () => {
  const books = useSelector(getFinishRead);
  // const books = [
  //   {
  //     "_id": 1,
  //     "bookTitle": "Scrum. A revolutionary method of project management",
  //     "author": "Jeff Sutherland",
  //     "publicDate": 2014,
  //     "numbOfPages": 25,
  //     "readStatus": "Already read",
  //     "rating": 5,
  //     "comment": "This book is zaebis!"
  //   },
  //   {
  //     "_id": 2,
  //     "bookTitle": "Deadline. A novel about project management",
  //     "author": "Tom DeMarco",
  //     "publicDate": 2006,
  //     "totalPages": 188,
  //     "readStatus": "Already read",
  //     "rating": 1,
  //     "comment": "A litttle bit govno!"
  //   },
  //   {
  //     "_id": 3,
  //     "bookTitle": "5 Defects of the team. Proverbs about leadership",
  //     "author": "Patrick Lencioni",
  //     "publicDate": 2011,
  //     "totalPages": 125,
  //     "readStatus": "Reading now"
  //   },
  //   {
  //     "_id": 4,
  //     "bookTitle": "Development of valuable proposals",
  //     "author": "Alex Osterwalder, Yves Pigneur",
  //     "publicDate": 2013,
  //     "totalPages": 368,
  //     "readStatus": "Going to read"
  //   },
  //   {
  //     "_id": 5,
  //     "bookTitle": "Product management in Scrum. Agile methods for your business",
  //     "author": "Roman Pichler",
  //     "publicDate": 2010,
  //     "totalPages": 92,
  //     "readStatus": "Reading now"
  //   },
  //   {
  //     "_id": 6,
  //     "bookTitle": "A mental hospital in",
  //     "author": "Cooper Alan",
  //     "publicDate": 2009,
  //     "totalPages": 183,
  //     "readStatus": "Going to read"
  //   }
  // ];
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
