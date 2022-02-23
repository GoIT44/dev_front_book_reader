import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { ReactSVG } from "react-svg";

// import booksSelectors from "../../../redux/books/booksSelectors";
import { getWillRead } from "../../../redux/books/selectors/bookSelector";
// import booksOperations from "../../../redux/books/booksOperations";
import LibraryModal from "../../LibraryModal/LibraryModal";

import styles from "../LibraryList/LibraryList.module.scss";
import book from "../../../assets/svg/bookIcon.svg";
// import trash from "../../../assets/svg/delete.svg";

const LibraryListPlan = () => {
  // const dispatch = useDispatch();

  const books = useSelector(getWillRead);
  console.log(books);
  // const onRemove = (_id) => {
  //   dispatch(booksOperations.removeBook(_id));
  // };



  const [isBookModal, setIsBookModal] = useState(false);
  const openAddBookModal = () => setIsBookModal(!isBookModal);

  return (
    <>
      {books && books.some((book) => book.readStatus === "Going to read") && (
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
                    {/* <button
                      type="button"
                      onClick={() => onRemove(_id)}
                      className={styles.btnTrash}
                    >
                      <ReactSVG src={trash} className={styles.trash} />
                    </button> */}
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
          <NavLink to="/statistic" className={styles.link}>
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
