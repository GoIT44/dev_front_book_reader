import style from './BooksListItem.module.css';

const BooksListItem = ({title, author, year, pages}) => {
    return (
        
        <li className={style.bookItem}>
            <h3 className={style.titleBook}>{title}</h3>
            <ul className={style.bookDescrList}>
                <li className={style.bookDescrItem}>
                    <span>Автор</span><p className={style.bookDesc}>{author}</p>
                </li>
                <li className={style.bookDescrItem}>
                    <span>Рік</span><p className={style.bookDesc}>{year}</p>
                </li>
                <li className={style.bookDescrItem}>
                    <span>Стор:</span><p className={style.bookDesc}>{pages}</p>
                </li>
            </ul>
        </li>
    );
}

export default BooksListItem;