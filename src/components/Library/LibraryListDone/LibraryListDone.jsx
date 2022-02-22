import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ReactSVG } from "react-svg";
// import booksSelectors from "../../../redux/books/booksSelectors";
import { getFinishRead } from "../../../redux/selectors/bookSelector";
import RatingReadOnly from "../../ModalComponents/RatingBook/ChooseRating/RatingReadOnly";
import RatingBook from "../../ModalComponents/RatingBook/RatingBook";

import styles from "../LibraryList/LibraryList.module.scss";
import book from "../../../assets/svg/bookIcon.svg";

const LibraryListDone = () => {
  const [showModal, setShowModal] = useState(false);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  
  const books = useSelector(getFinishRead)

  const [id, setId] = useState(null);

  const isShowModal = ({ _id: id, comment, rating }) => {
    setId(id);
    setComment(comment);
    setRating(rating);
    setShowModal(!showModal);
  };

  return (
    <>
      {showModal && (
        <RatingBook
          id={id}
          showModal={showModal}
          setShowModal={setShowModal}
          comment={comment}
          rating={rating}
        />
      )}
      {books.some((book) => book.readStatus === "Already read") && (
        <div className={styles.category}>
          <h2 className={styles.categoryTitle}>Прочитано</h2>
          <div className={styles.categoryListTitle}>
            <h3 className={styles.categoryListTitleItemNameDone}>Назва</h3>
            <h3 className={styles.categoryListTitleItemAuthorDone}>Автор</h3>
            <h3 className={styles.categoryListTitleItemYearDone}>Рік</h3>
            <h3 className={styles.categoryListTitleItemPageDone}>Стор.</h3>
            <h3 className={styles.categoryListTitleItemRateDone}>Рейтинг</h3>
          </div>
          <ul>
            {books.map(
              ({
                _id,
                bookTitle,
                author,
                publicDate,
                numbOfPages,
                readStatus,
                rating,
                comment,
              }) =>
              readStatus === "Already read" && (
                  <li key={_id} className={styles.bookListItem}>
                    <ReactSVG src={book} className={styles.iconDone} />
                    <div className={styles.bookListItemNameDone}>
                      <span>
                        <ReactSVG src={book} className={styles.iconDoneMob} />
                      </span>
                      <span className={styles.titleBookName}>{bookTitle}</span>
                    </div>
                    <p className={styles.bookListItemAuthorDone}>
                      <span className={styles.bookListItemMob}>Автор</span>
                      {author}
                    </p>
                    <p className={styles.bookListItemYearDone}>
                      <span className={styles.bookListItemMob}>Рік</span>
                      {publicDate}
                    </p>
                    <p className={styles.bookListItemPageDone}>
                      <span className={styles.bookListItemMob}>Стор.</span>
                      {numbOfPages}
                    </p>
                    <div className={styles.stars}>
                      <span className={styles.bookListItemMob}>Рейтинг</span>
                      <RatingReadOnly rating={rating} />
                    </div>

                    <button
                      type="button"
                      className={styles.buttonRezume}
                      onClick={() => isShowModal({ _id, comment, rating })}               
                    >
                      Резюме
                    </button>
                  </li>
                )
            )}
          </ul>
        </div>
      )}
    </>
  );
};

export default LibraryListDone;
