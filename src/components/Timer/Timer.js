import { useSelector } from 'react-redux';
import { endTraining } from '../../redux/training/trainingSelectors';
import style from './Timer.module.css'
import TimerItem from "./TimerItem/TimerItem";
const Timer = () => {
    const timeEndTraining = useSelector(endTraining);
    const endTime = new Date(timeEndTraining)
    // console.log(timeEndTraining.split('T')[0])
    // const endTime = new Date(2022, 3, 15, 0, 0) // сюда будет приходить дата окончания тренировки
    console.log(endTime)
    return (
        <div className={style.timersWrapper}>
            <div className={style.timer}>
                <h3 className={style.timerTitle}>До закінчення року залишилось</h3>
                <TimerItem/>
            </div>
            <div className={style.timer}>
                <h3 className={style.timerTitle}>До досягнення мети залишилось</h3>
                <TimerItem endTime={endTime}/>
            </div>
        </div>
    );
}

export default Timer;