import style from '../ResultBox/ResultBox.module.css'
const ResultListItem = ({resultItem}) => {
    return (
        resultItem.map((result)=>(
            <li key={result.time} className={style.statisticItem}> 
                <p className={style.dateText}>{result.date}</p>
                <p className={style.dateTime}>{result.time}</p>
                <p className={style.dateText}>{result.amountPage} <span className={style.dateTime}>стор.</span></p>
            </li>
        ))
        
    );
}

export default ResultListItem;