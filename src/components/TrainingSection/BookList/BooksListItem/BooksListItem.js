import style from "./BooksListItem.module.css";
import iconSprite from "../../../../images/icons-sprite.svg";
import { useDispatch } from "react-redux";
import { deleteBookTrainingOperation } from "../../../../redux/trainingPlan/trainingPlanOperations";

const BooksListItem = ({
  title = "...",
  author = "...",
  year = "...",
  pages = "...",
  id,
}) => {
  const dispatch = useDispatch()
  const onClick = (e) => {
    dispatch(deleteBookTrainingOperation(e.currentTarget.id))
    
  }
  // console.log(id)
  return (
    <li className={style.bookItem}>
      <div className={style.iconWrapper}>
        <svg className={style.iconBookList} width="22px" height="17px">
          <use xlinkHref={`${iconSprite}#icon-book`} />
        </svg>
      </div>
      <ul className={style.bookDescrList}>
        <li className={style.bookDescrItem}>
          <h3 className={style.titleBook}>
            <span className={style.subTitle}>Назва книги:</span>
            {title}
          </h3>
        </li>
        <li className={style.bookDescrItem}>
          <span className={style.subTitle}>Автор:</span>
          <p className={style.bookDesc}>{author}</p>
        </li>
        <li className={style.bookDescrItem}>
          <span className={style.subTitle}>Рік:</span>
          <p className={style.bookDesc}>{year}</p>
        </li>
        <li className={style.bookDescrItem}>
          <span className={style.subTitle}>Стор:</span>
          <p className={style.bookDesc}>{pages}</p>
        </li>
      </ul>
      <div className={style.iconWrapper}>
        {title === "..." ? (
          <div></div>
        ) : (
          <button id={id} className={style.btnDelete} onClick={onClick}>
            <svg className={style.iconBookList} width="14px" height="18px">
              <use xlinkHref={`${iconSprite}#icon-delete`} />
            </svg>
          </button>
        )}
      </div>
    </li>
  );
};

export default BooksListItem;
