import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import styles from "./BookSelect.module.css";
import { addBookTrainingOperation } from "../../../../redux/trainingPlan/trainingPlanOperations";
import { useDispatch } from "react-redux";

const BookSelect = () => {
  const dispatch = useDispatch();
  const [trainingBook, setTrainingBook] = React.useState("");
  const [arrBook, setArrbook] = React.useState([])
  const handleChange = (event) => {
    setTrainingBook(event.target.value);
  };
  const onSubmit = (e)=> {
    e.preventDefault()
    setArrbook((prev)=>(prev.push(trainingBook)))
    // dispatch(addBookTrainingOperation(trainingBook))
    setTrainingBook("")
  }
  console.log(arrBook)
  console.log(trainingBook)
  return (
    <div className={styles.bookSelect}>
      <div className={styles.select__wrap}>
        <form onClick={onSubmit}>
          <FormControl sx={{ minWidth: 270 }} fullWidth >
            <InputLabel id="demo-simple-select-label">
              Обрати книги з бiблiотеки
            </InputLabel>
            <Select
              // sx={{ height: 42 }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={trainingBook}
              label="Обрати книги з бiблiотеки"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>-------</em>
              </MenuItem>
              <MenuItem
                value={"Scrum. A revolutionary method of project management."}
              >
                Scrum. A revolutionary method of project management.
              </MenuItem>
              <MenuItem value={"Deadline. A novel about project management."}>
                Deadline. A novel about project management.
              </MenuItem>
              <MenuItem
                value={"5 Defects of the team. Proverbs about leadership."}
              >
                5 Defects of the team. Proverbs about leadership.
              </MenuItem>
            </Select>
            <div className={styles.btn__wrap}>
                <button type="submit" className={styles.btn__add} >Додати</button>
            </div>
          </FormControl>

        </form>
      </div>
    </div>
  );
};

export default BookSelect;
