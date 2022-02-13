import style from './ResultBox.module.css'

const ResultBox = () => {
    return (
        <div className={style.resultBox}>
            <h3 className={style.resultBoxTitle}>Результати</h3>
            <form className={style.formStatistic}>
                <div className={style.inputWrapper}>
                    <label className={style.labelStatistic} for="statisticInputDate">
                    Дата
                    </label>
                        <input type="date" className={style.inputDate} id='statisticInputDate'/>
                </div>
                <div className={style.inputWrapper}>
                    <label className={style.labelStatistic} for='statisticInputText'>
                    Кількість сторінок
                    </label>
                        <input type="text" className={style.inputDate} id='statisticInputText'/>
                </div>
                <button type='submit' className={style.formButton}>Додати результат</button>
            </form>
            <div className={style.statisticWrapper}>
            <h3 className={`${style.resultBoxTitle} ${style.resultBoxTitleStatistic}`}>Статистика</h3>
            <ul className={style.statisticList}>
                <li className={style.statisticItem}>
                    <p className={style.dateText}>10.10.2019</p>
                    <p className={style.dateTime}>08:10:23</p>
                    <p className={style.dateText}>32 <span className={style.dateTime}>стор.</span></p>
                </li>
            </ul>
            </div>
        </div>
    );
}

export default ResultBox;