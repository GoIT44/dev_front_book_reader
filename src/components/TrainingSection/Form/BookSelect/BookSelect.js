import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import styles from "./BookSelect.module.css";

const BookSelect = () => {
  const [traininigBook, setTraininigBook] = React.useState("");

  const handleChange = (event) => {
    setTraininigBook(event.target.value);
  };

  return (
    <div className={styles.bookSelect}>
      <div className={styles.select__wrap}>
        <FormControl sx={{ minWidth: 270 }} fullWidth>
          <InputLabel id="demo-simple-select-label">
            Обрати книги з бiблiотеки
          </InputLabel>
          <Select
            // sx={{ height: 42 }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={traininigBook}
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
        </FormControl>
      </div>
    </div>
  );
};

export default BookSelect;
