import { nanoid } from "nanoid";
import useMedia from "../../../hooks/useMedia";
import style from "./BooksListItem.module.css";
import iconSprite from "../../../../images/icons-sprite.svg";

const BooksListItem = ({ title = "...", author, year, pages }) => {
  const screenSize = useMedia();
  return (
    <>
      <li className={style.bookItem}>
        <div className={style.flex__centered}>
          <svg width="19px" height="17px">
            <use xlinkHref={`${iconSprite}#icon-book`} />
          </svg>
          {screenSize.MOB ? (
            <h3 className={style.titleBook}>{title}</h3>
          ) : (
            <ul className={style.flex__centered}>
              <li key={nanoid()} className={style.bookDescrItem}>
                <p className={style.bookDesc}>{title}</p>
              </li>
              <li key={nanoid()} className={style.bookDescrItem}>
                <p className={style.bookDesc}>{author}</p>
              </li>
              <li key={nanoid()} className={style.bookDescrItem}>
                <p className={style.bookDesc}>{year}</p>
              </li>
              <li key={nanoid()} className={style.bookDescrItem}>
                <p className={style.bookDesc}>{pages}</p>
              </li>
            </ul>
          )}
          <button className={style.delete__btn}>
            <svg width="14px" height="18px">
              <use xlinkHref={`${iconSprite}#icon-delete`} />
            </svg>
          </button>
        </div>
        <ul className={style.bookDescrList}>
          {/* {(screenSize.TABL || screenSize.DESK) && (
            <li key={nanoid()} className={style.bookDescrItem}>
              <p className={style.bookDesc}>{title}</p>
            </li>
          )} */}
          {screenSize.MOB && (
            <li key={nanoid()} className={style.bookDescrItem}>
              <span>Автор:</span>
              <p className={style.bookDesc}>{author}</p>
            </li>
          )}
          {screenSize.MOB && (
            <li key={nanoid()} className={style.bookDescrItem}>
              <span>Рік:</span>
              <p className={style.bookDesc}>{year}</p>
            </li>
          )}
          {screenSize.MOB && (
            <li key={nanoid()} className={style.bookDescrItem}>
              <span>Стор:</span>
              <p className={style.bookDesc}>{pages}</p>
            </li>
          )}
        </ul>
      </li>
    </>
  );
};

export default BooksListItem;
