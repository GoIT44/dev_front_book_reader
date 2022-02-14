import { useState, useEffect } from 'react';
import{useDispatch, useSelector} from 'react-redux'
import { addResultOperations, getResultOperations } from '../../redux/resultTraining/resultTrainingOperations';
import { getResultSelector } from '../../redux/resultTraining/resultTrainingSelectors';
import ResultListItem from '../ResultListItem/ResultListItem';
import style from './ResultBox.module.css'

const initialState = {
    date: new Date().toLocaleDateString().split(".").reverse().join("-"),
    time: "",
    amountPage: "",
}
const ResultBox = () => {
    // useEffect(() => {
    //     dispatch(getResultOperations());
    // })

    const [result, setResult] = useState({...initialState});
    const resultItem = useSelector(getResultSelector);
    const dispatch = useDispatch()
    const onChange = (e)=>{
        let {name, value} = e.target        
        setResult((prev)=>({...prev, [name]: value, time: new Date().toLocaleTimeString()}));
    };
    const onSubmit = async (e)=>{
        e.preventDefault()
        
        dispatch(addResultOperations({...result, date: result.date.split('-').reverse().join('.')}));
        setResult({...initialState});

    }
    return (
        <div className={style.resultBox} onSubmit={onSubmit}>
            <h3 className={style.resultBoxTitle}>Результати</h3>
            <form className={style.formStatistic}>
                <div className={style.inputWrapper}>
                    <label className={style.labelStatistic} htmlFor="statisticInputDate">
                    Дата
                    </label>
                        <input type="date" name='date' value={result.date} onChange={onChange} className={style.inputDate} id='statisticInputDate'/>
                </div>
                <div className={style.inputWrapper}>
                    <label className={style.labelStatistic} htmlFor='statisticInputText'>
                    Кількість сторінок
                    </label>
                        <input type="text" name='amountPage' value={result.amountPage} onChange={onChange} className={style.inputDate} id='statisticInputText' required/>
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