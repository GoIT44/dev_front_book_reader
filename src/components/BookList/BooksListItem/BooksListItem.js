import style from './BooksListItem.module.css';
import iconSprite from '../../../images/icons-sprite.svg'

const BooksListItem = ({title, author, year, pages}) => {
    // useSelector прочитана книга или нет и менять класы на иконках
    return (
        
        <li className={style.bookItem}>
            <div className={style.iconWrapper}>
                <svg className={style.iconBookList} width="12px" height="8px">
                    <use xlinkHref={`${iconSprite}#icon-done`} />
                </svg>
            </div>
            <ul className={style.bookDescrList}>
                <li className={style.bookDescrItem}>
                    <h3 className={style.titleBook}><span className={style.subTitle}>Назва книги</span>{title}</h3>
                </li>
                <li className={style.bookDescrItem}>
                    <span className={style.subTitle}>Автор</span><p className={style.bookDesc}>{author}</p>
                </li>
                <li className={style.bookDescrItem}>
                    <span className={style.subTitle}>Рік</span><p className={style.bookDesc}>{year}</p>
                </li>
                <li className={style.bookDescrItem}>
                    <span className={style.subTitle}>Стор:</span><p className={style.bookDesc}>{pages}</p>
                </li>
            </ul>
        </li>
    );
}

export default BooksListItem;