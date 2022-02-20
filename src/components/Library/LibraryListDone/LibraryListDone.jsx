import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ReactSVG } from "react-svg";
import booksSelectors from "../../../redux/books/booksSelectors";
import RatingReadOnly from "../../ModalComponents/RatingBook/ChooseRating/RatingReadOnly";
import RatingBook from "../../ModalComponents/RatingBook/RatingBook";

import styles from "../LibraryList/LibraryList.module.scss";
import book from "../../../assets/svg/bookIcon.svg";

const LibraryListDone = () => {
  const [showModal, setShowModal] = useState(false);
  const [resume, setResume] = useState("");
  const [rating, setRating] = useState(0);


  // const books = useSelector(booksSelectors.getAllBooks);

  const books = [
    {
      "_id": 1,
      "title": "Scrum. A revolutionary method of project management",
      "author": "Jeff Sutherland",
      "year": 2014,
      "totalPages": 25,
      "status": "already read",
      "rating": 5,
      "resume": "This book is zaebis!"
    },
    {
      "_id": 2,
      "title": "Deadline. A novel about project management",
      "author": "Tom DeMarco",
      "year": 2006,
      "totalPages": 188,
      "status": "already read",
      "rating": 1,
      "resume": "A litttle bit govno!"
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
  

  const [id, setId] = useState(null);

  const isShowModal = ({ _id: id, resume, rating }) => {
    setId(id);
    setResume(resume);
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
          resume={resume}
          rating={rating}
        />
      )}
      {books.some((book) => book.status === "already read") && (
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
                title,
                author,
                year,
                totalPages,
                status,
                rating,
                resume,
              }) =>
                status === "already read" && (
                  <li key={_id} className={styles.bookListItem}>
                    <ReactSVG src={book} className={styles.iconDone} />
                    <div className={styles.bookListItemNameDone}>
                      <span>
                        <ReactSVG src={book} className={styles.iconDoneMob} />
                      </span>
                      <span className={styles.titleBookName}>{title}</span>
                    </div>
                    <p className={styles.bookListItemAuthorDone}>
                      <span className={styles.bookListItemMob}>Автор</span>
                      {author}
                    </p>
                    <p className={styles.bookListItemYearDone}>
                      <span className={styles.bookListItemMob}>Рік</span>
                      {year}
                    </p>
                    <p className={styles.bookListItemPageDone}>
                      <span className={styles.bookListItemMob}>Стор.</span>
                      {totalPages}
                    </p>
                    <div className={styles.stars}>
                      <span className={styles.bookListItemMob}>Рейтинг</span>
                      <RatingReadOnly rating={rating} />
                    </div>

                    <button
                      type="button"
                      className={styles.buttonRezume}
                      onClick={() => isShowModal({ _id, resume, rating })}               
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
