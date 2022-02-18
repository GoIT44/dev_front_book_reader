import * as React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import FormControl from "@mui/material/FormControl";
import styles from "./TrainingPeriodBlock.module.css";

const TrainingPeriodBlock = function () {
  const [startValue, setStartValue] = React.useState(null);
  const [finishValue, setFinishValue] = React.useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={styles.dateInputBlock}>
        <ul className={styles.input__list}>
          <li className={styles.input__item}>
            <FormControl sx={{ m: 1, minWidth: 270, height: 42 }}>
              <DatePicker
                label="Початок"
                value={startValue}
                onChange={(newValue) => {
                  setStartValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </FormControl>
          </li>
          <li className={styles.input__item}>
            <FormControl sx={{ m: 1, minWidth: 270, height: 42 }}>
              <DatePicker
                label="Завершення"
                value={finishValue}
                onChange={(newValue) => {
                  setFinishValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </FormControl>
          </li>
        </ul>
      </div>
    </LocalizationProvider>
  );
};

export default TrainingPeriodBlock;
