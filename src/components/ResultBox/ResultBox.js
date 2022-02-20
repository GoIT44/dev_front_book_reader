import { useState, useEffect } from 'react';
import{useDispatch, useSelector} from 'react-redux'
import { addResultOperations, getResultOperations } from '../../redux/training/trainingOperations';
import { getResultSelector } from '../../redux/training/trainingSelectors';
// import { addResultOperations, getResultOperations } from '../../redux/resultTraining/resultTrainingOperations';
// import { getResultSelector } from '../../redux/resultTraining/resultTrainingSelectors';
import ResultListItem from '../ResultListItem/ResultListItem';
import style from './ResultBox.module.css'

const initialDate = {
    dateResult: new Date().toLocaleDateString().split(".").reverse().join("-"),
}
const ResultBox = () => {
    // useEffect(() => {
    //     dispatch(getResultOperations());
    // })
    const resultItem = useSelector(getResultSelector)
    const [dateResult, setDateResult] = useState(initialDate.dateResult);
    const [pagesResult, setPagesResult] = useState("")
    
    const dispatch = useDispatch()
    const onChange = (e)=>{
        let {name, value} = e.target    
        if (name === "pagesResult") {
            setPagesResult(+value);
        }   
        if (name === "dateResult") {
            setDateResult(value)
        }
        // setResult((prev)=>({...prev, [name]: value}));
    };
    const onSubmit = async (e)=>{
        e.preventDefault()
        
        dispatch(addResultOperations({dateResult, pagesResult}));
        setPagesResult(null);
        setDateResult(initialDate.dateResult)

    }

    return (
        <div className={style.resultBox} onSubmit={onSubmit}>
            <h3 className={style.resultBoxTitle}>Результати</h3>
            <form className={style.formStatistic}>
                <div className={style.inputWrapper}>
                    <label className={style.labelStatistic} htmlFor="statisticInputDate">
                    Дата
                    </label>
                        <input type="date" name='dateResult' value={dateResult} min={dateResult} onChange={onChange} className={style.inputDate} id='statisticInputDate' required/>
                </div>
                <div className={style.inputWrapper}>
                    <label className={style.labelStatistic} htmlFor='statisticInputText'>
                    Кількість сторінок
                    </label>
                        <input type="text" name='pagesResult' value={pagesResult} onChange={onChange} className={style.inputDate} id='statisticInputText' required/>
                </div>
                <button type='submit' className={style.formButton}>Додати результат</button>
            </form>
            <div className={style.statisticWrapper}>
            <h3 className={`${style.resultBoxTitle} ${style.resultBoxTitleStatistic}`}>Статистика</h3>
            <ul className={style.statisticList}>
                {resultItem ? <ResultListItem resultItem={resultItem}/> : <p>У вас пока что нет результатов </p>}
                
            </ul>
            </div>
        </div>
    );
}

export default ResultBox;