import { useEffect, useState } from "react";
import style from '../Timer.module.css';

const TimerItem = ({endTime}) => {
    const year = new Date().getFullYear() + 1
    const timerDate = endTime || new Date(year, 0, 1, 0, 0, -1)
    const [differenceTime, setDifferenceTime] = useState(null)
    const day = Math.floor(differenceTime / (1000 * 60 * 60 * 24));
    const hour = Math.floor((differenceTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minute = Math.floor((differenceTime % (1000 * 60 * 60)) / (1000 * 60));
    const second = Math.floor((differenceTime % (1000 * 60)) / 1000);
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            // console.log(intervalId)
            setDifferenceTime(timerDate - Date.now())
            // console.log(intervalId)
            
        }, 1000);
        return ()=>{
            
            return clearInterval(intervalId)
        }
      }, []);
    return (
        <div className={style.timerWrapper}>
                <div className={style.timerBlock}>
                    <div className={style.timerItem}>
                        <p className={style.timerNumber}>{day}</p>
                        <p className={style.timerDote}>:</p>
                    </div>
                        <p className={style.timerWord}>дн</p>
                </div>
                <div className={style.timerBlock}>
                    <div className={style.timerItem}>
                        <p className={style.timerNumber}>{hour<=9 ? `0${hour}`: hour}</p>
                        <p className={style.timerDote}>:</p>
                    </div>
                        <p className={style.timerWord}>год</p>
                </div>
                <div className={style.timerBlock}>
                    <div className={style.timerItem}>
                        <p className={style.timerNumber}>{minute<=9 ? `0${minute}`: minute}</p>
                        <p className={style.timerDote}>:</p>
                    </div>
                        <p className={style.timerWord}>хв</p>
                </div>
                <div className={style.timerBlock}>
                    <div className={style.timerItem}>
                        <p className={style.timerNumber}>{second<=9 ? `0${second}`: second}</p>
                    </div>
                        <p className={style.timerWord}>сек</p>
                </div>
                
            </div>
    );
}

export default TimerItem;