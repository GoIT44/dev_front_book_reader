import style from "./ResultBox.module.css";

const ResultBox = () => {
  return (
    <div className={style.resultBox}>
      <div className={style.resultBoxTitleWrap}>
        <h3 className={style.resultBoxTitle}>My training</h3>
      </div>
      <form className={style.formStatistic}>
        <div className={style.inputWrapper}>
          <label className={style.labelStatistic} for="TrainingInputDate">
            Start
          </label>
          <input
            placeholder="Start"
            type="date"
            className={style.inputDate}
            id="TrainingInputDate"
          />
        </div>
        <div className={style.inputWrapper}>
          <label className={style.labelStatistic} for="TrainingInputDate">
            Finish
          </label>
          <input
            type="date"
            className={style.inputDate}
            id="TrainingInputDate"
          />
        </div>
        <button type="submit" className={style.formButton}>
          Add
        </button>
      </form>
    </div>
  );
};

export default ResultBox;
