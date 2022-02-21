import * as React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import FormControl from "@mui/material/FormControl";
import styles from "./TrainingPeriodBlock.module.css";
import style from '../../../ResultBox/ResultBox.module.css';
import { useDispatch } from "react-redux";
import { addDateTrainingOperation } from "../../../../redux/trainingPlan/trainingPlanOperations";

const TrainingPeriodBlock = () => {
  const dispatch = useDispatch();
  // const [startValue, setStartValue] = React.useState(null);
  // const [finishValue, setFinishValue] = React.useState(null);
  const [dateStart, setDateStart] = React.useState("");
  const [dateEnd, setDateEnd] = React.useState("");
  console.log(dateStart)
  console.log(dateEnd)

  const onChange = (e)=>{
    let {name, value} = e.target    
    if (name === "dateStart") {
      setDateStart(value);
    }   
    if (name === "dateEnd") {
      setDateEnd(value)
    }
   
};
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={styles.dateInputBlock}>
        <ul className={styles.input__list}>
          <li className={styles.input__item}>
            <FormControl sx={{ m: 1, minWidth: 270, height: 42 }}>
              {/* <DatePicker
                label="Початок"
                value={startValue}
                onChange={(newValue) => {
                  setStartValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              /> */}
               <input 
               type="date" 
               name='dateStart' 
               value={dateStart} 
              //  min={dateResult} 
               onChange={onChange} 
               className={style.inputDate} 
               id='statisticInputDate' 
               required/>
            </FormControl>
          </li>
          <li className={styles.input__item}>
            <FormControl sx={{ m: 1, minWidth: 270, height: 42 }}>
              {/* <DatePicker
                label="Завершення"
                value={finishValue}
                onChange={(newValue) => {
                  setFinishValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              /> */}
              <input 
               type="date" 
               name='dateEnd' 
               value={dateEnd} 
              //  min={dateResult} 
               onChange={onChange} 
               className={style.inputDate} 
               id='statisticInputDate' 
               required/>
            </FormControl>
          </li>
        </ul>
      </div>
    </LocalizationProvider>
  );
};

export default TrainingPeriodBlock;
