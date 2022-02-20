import style from './BooksListItem.module.css';
import iconSprite from '../../../images/icons-sprite.svg'
import { useSelector } from 'react-redux';
import { getTotalBook, readBook } from '../../../redux/training/trainingSelectors';

const BooksListItem = ({title, author, year, pages, id}) => {
    const booksTraining = useSelector(getTotalBook);
    const readBookNow = booksTraining.find(item=>item.id===id)
    console.log(readBookNow)
    // useSelector прочитана книга или нет и менять класы на иконках
    return (
        
        <li key={`book${title}`} className={style.bookItem}>
            <div className={readBookNow.read ? style.iconWrapperRead : style.iconWrapper}>
                <svg className={readBookNow.read ? style.iconBookListRead : style.iconBookList} width="12" height="8">
                    <use xlinkHref={`${iconSprite}#icon-done`} />
                </svg>
            </div>
            <ul className={style.bookDescrList}>
                <li key={title} className={style.bookDescrItem}>
                    <h3 className={style.titleBook}><span className={style.subTitle}>Назва книги</span>{title}</h3>
                </li>
                <li key={author} className={style.bookDescrItem}>
                    <span className={style.subTitle}>Автор</span><p className={style.bookDesc}>{author}</p>
                </li>
                <li key={year} className={style.bookDescrItem}>
                    <span className={style.subTitle}>Рік</span><p className={style.bookDesc}>{year}</p>
                </li>
                <li key={pages} className={style.bookDescrItem}>
                    <span className={style.subTitle}>Стор:</span><p className={style.bookDesc}>{pages}</p>
                </li>
            </ul>
        </li>
    );
}

export default BooksListItem;