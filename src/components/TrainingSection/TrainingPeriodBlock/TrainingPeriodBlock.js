import style from "./TrainingPeriodBlock.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addEndDateTrainingOperation, addStartDateTrainingOperation } from "../../../redux/trainingPlan/trainingPlanOperations";

const TrainingPeriodBlock = () => {
  const dispatch = useDispatch()
  const [dateStart, setDateStart] = useState("")
  const [dateEnd, setDateEnd] = useState("")
  const onChange = (e)=>{
    const {name, value} = e.target    
    if (name === "dateStart") {
       setDateStart(value);
       dispatch(addStartDateTrainingOperation(value))
    }   
    if (name === "dateEnd") {
      setDateEnd(value)
      dispatch(addEndDateTrainingOperation(value))
    }
    
    // setResult((prev)=>({...prev, [name]: value}));
};
  return (
    <div className={style.trainingPeriodBlock}>
      <div className={style.inputWrapper}>
        <label className={style.labelInput} forhtml="startTrain">
          Початок
        </label>
        <input
          type="date"
          className={style.inputDate}
          name="dateStart"
          value={dateStart}
          id="startTrain"
          onChange={onChange}
          placeholder="Початок"
        />
      </div>
      <div className={style.inputWrapper}>
        <label className={style.labelInput} forhtml="endTrain">
          Закінчення
        </label>
        <input
          type="date"
          className={style.inputDate}
          name='dateEnd'
          value={dateEnd}
          onChange={onChange}
          id="endTrain"
          placeholder="Закінчення"
        />
      </div>
    </div>
  );
};

export default TrainingPeriodBlock;
