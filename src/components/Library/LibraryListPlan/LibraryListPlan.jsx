import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { ReactSVG } from "react-svg";

import booksSelectors from "../../../redux/books/booksSelectors";
import booksOperations from "../../../redux/books/booksOperations";
import LibraryModal from "../../LibraryModal/LibraryModal";

import styles from "../LibraryList/LibraryList.module.scss";
import book from "../../../assets/svg/bookIcon.svg";
import trash from "../../../assets/svg/delete.svg";

const LibraryListPlan = () => {
  const dispatch = useDispatch();

  const books = [
    {
      "_id": 1,
      "bookTitle": "Scrum. A revolutionary method of project management",
      "author": "Jeff Sutherland",
      "publicDate": 2014,
      "numbOfPages": 25,
      "readStatus": "Already read",
      "rating": 5,
      "comment": "This book is zaebis!"
    },
    {
      "_id": 2,
      "bookTitle": "Deadline. A novel about project management",
      "author": "Tom DeMarco",
      "publicDate": 2006,
      "totalPages": 188,
      "readStatus": "Already read",
      "rating": 1,
      "comment": "A litttle bit govno!"
    },
    {
      "_id": 3,
      "bookTitle": "5 Defects of the team. Proverbs about leadership",
      "author": "Patrick Lencioni",
      "publicDate": 2011,
      "totalPages": 125,
      "readStatus": "Reading now"
    },
    {
      "_id": 4,
      "bookTitle": "Development of valuable proposals",
      "author": "Alex Osterwalder, Yves Pigneur",
      "publicDate": 2013,
      "totalPages": 368,
      "readStatus": "Going to read"
    },
    {
      "_id": 5,
      "bookTitle": "Product management in Scrum. Agile methods for your business",
      "author": "Roman Pichler",
      "publicDate": 2010,
      "totalPages": 92,
      "readStatus": "Reading now"
    },
    {
      "_id": 6,
      "bookTitle": "A mental hospital in",
      "author": "Cooper Alan",
      "publicDate": 2009,
      "totalPages": 183,
      "readStatus": "Going to read"
    }
  ];

  // const books = useSelector(booksSelectors.getAllBooks);
  const onRemove = (_id) => {
    dispatch(booksOperations.removeBook(_id));
  };

  const [isBookModal, setIsBookModal] = useState(false);
  const openAddBookModal = () => setIsBookModal(!isBookModal);

  return (
    <>
      {books.some((book) => book.readStatus === "Going to read") && (
        <div className={styles.category}>
          <h2 className={styles.categoryTitle}>Маю намір прочитати</h2>
          <div className={styles.categoryListTitle}>
            <h3 className={styles.categoryListTitleItemName}>Назва</h3>
            <h3 className={styles.categoryListTitleItemAuthor}>Автор</h3>
            <h3 className={styles.categoryListTitleItemYear}>Рік</h3>
            <h3 className={styles.categoryListTitleItemPage}>Стор.</h3>
          </div>
          <ul>
            {books.map(
              ({ _id, bookTitle, author, publicDate, numbOfPages, readStatus }) =>
              readStatus === "Going to read" && (
                  <li key={_id} className={styles.bookListItem}>
                    <ReactSVG src={book} className={styles.iconPlan} />
                    <div className={styles.bookListItemName}>
                      <span>
                        <ReactSVG src={book} className={styles.iconPlanMob} />
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
                    <button
                      type="button"
                      onClick={() => onRemove(_id)}
                      className={styles.btnTrash}
                    >
                      <ReactSVG src={trash} className={styles.trash} />
                    </button>
                  </li>
                )
            )}
          </ul>
          <button
            type="button"
            className={styles.btnAddMob}
            onClick={openAddBookModal}
          >
            +
          </button>
          <NavLink to="/training" className={styles.link}>
            <button type="button" className={styles.btnNext}>
              Далі
            </button>
          </NavLink>
        </div>
      )}
      {!books.some((book) => book.readStatus === "Going to read") && (
        <button
          type="button"
          className={styles.btnAddMobEmpty}
          onClick={openAddBookModal}
        >
          +
        </button>
      )}
      {openAddBookModal && (
        <LibraryModal
          isBookModal={isBookModal}
          setIsBookModal={setIsBookModal}
        />
      )}
    </>
  );
};

export default LibraryListPlan;
