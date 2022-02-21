import { useSelector } from 'react-redux';
import {  getTraining } from '../../redux/training/trainingSelectors';
import style from './SideBarStatistics.module.css';

const SideBarStatistics = () => {

    const training = useSelector(getTraining);
    if (!training) return

    const books = training.trainingBooks
    const countBook = books.length
    const timeStartTraining = training.startTrain;
    const timeEndTraining = training.endTrain;
    const leftRead = books.filter((book)=>(book.read === false)).length || "0";
    // console.log(timeEndTraining)
    const diffDay = (new Date(timeEndTraining)-new Date(timeStartTraining)) / 1000/60/60/24;
    return (
        <div className={style.sideBar}>
            <h3 className={style.sideBarTitle}>Моя мета прочитати</h3>
            <ul className={style.sideBarList}>
                <li className={style.sideBarItem}>
                    <p className={style.sidebarNumber}>{countBook ? countBook :0}</p>
                    <p className={style.sideBarText}>Кількість книжок</p>
                </li>
                <li className={style.sideBarItem}>
                    <p className={style.sidebarNumber}>{diffDay}</p>
                    <p className={style.sideBarText}>Кількість днів</p>
                </li>
                <li className={style.sideBarItem}>
                    <p className={style.sidebarNumber}>{leftRead}</p>
                    <p className={style.sideBarText}>Залишилось книжок</p>
                </li>
            </ul>
        </div>
    );
}

export default SideBarStatistics;