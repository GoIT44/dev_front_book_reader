import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { ReactSVG } from "react-svg";

import booksSelectors from "../../../redux/books/booksSelectors";
import booksOperations from "../../../redux/books/booksOperations";
// import LibraryModal from "../../LibraryModal/LibraryModal";

import styles from "../LibraryList/LibraryList.module.scss";
import book from "../../../assets/svg/bookIcon.svg";
import trash from "../../../assets/svg/delete.svg";

const LibraryListPlan = () => {
  const dispatch = useDispatch();

  const books = [
    {
      "_id": 1,
      "title": "Scrum. A revolutionary method of project management",
      "author": "Jeff Sutherland",
      "year": 2014,
      "totalPages": 25,
      "status": "already read"
    },
    {
      "_id": 2,
      "title": "Deadline. A novel about project management",
      "author": "Tom DeMarco",
      "year": 2006,
      "totalPages": 188,
      "status": "already read"
    },
    {
      "_id": 3,
      "title": "5 Defects of the team. Proverbs about leadership",
      "author": "Patrick Lencioni",
      "year": 2011,
      "totalPages": 125,
      "status": "reading now"
    },
    {
      "_id": 4,
      "title": "Development of valuable proposals",
      "author": "Alex Osterwalder, Yves Pigneur",
      "year": 2013,
      "totalPages": 368,
      "status": "going to read"
    },
    {
      "_id": 5,
      "title": "Product management in Scrum. Agile methods for your business",
      "author": "Roman Pichler",
      "year": 2010,
      "totalPages": 92,
      "status": "reading now"
    },
    {
      "_id": 6,
      "title": "A mental hospital in",
      "author": "Cooper Alan",
      "year": 2009,
      "totalPages": 183,
      "status": "going to read"
    }
  ];

  // const books = useSelector(booksSelectors.getAllBooks);
  const onRemove = (_id) => {
    dispatch(booksOperations.removeBook(_id));
  };

  // const [isBookModal, setIsBookModal] = useState(false);
  // const openAddBookModal = () => setIsBookModal(!isBookModal);

  return (
    <>
      {books.some((book) => book.status === "going to read") && (
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
              ({ _id, title, author, year, totalPages, status }) =>
                status === "going to read" && (
                  <li key={_id} className={styles.bookListItem}>
                    <ReactSVG src={book} className={styles.iconPlan} />
                    <div className={styles.bookListItemName}>
                      <span>
                        <ReactSVG src={book} className={styles.iconPlanMob} />
                      </span>
                      <span className={styles.titleBookName}>{title}</span>
                    </div>
                    <p className={styles.bookListItemAuthor}>
                      <span className={styles.bookListItemMob}>Автор</span>
                      {author}
                    </p>
                    <p className={styles.bookListItemYear}>
                      <span className={styles.bookListItemMob}>Рік</span>
                      {year}
                    </p>
                    <p className={styles.bookListItemPage}>
                      <span className={styles.bookListItemMob}>Стор.</span>
                      {totalPages}
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
            // onClick={openAddBookModal}
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
      {!books.some((book) => book.status === "going to read") && (
        <button
          type="button"
          className={styles.btnAddMobEmpty}
          // onClick={openAddBookModal}
        >
          +
        </button>
      )}
      {/* {openAddBookModal && (
        <LibraryModal
          isBookModal={isBookModal}
          setIsBookModal={setIsBookModal}
        />
      )} */}
    </>
  );
};

export default LibraryListPlan;
