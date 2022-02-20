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

      {/* <div className={styles.select__wrap}>
        <FormControl sx={{ m: 1, maxWidth: 270, height: 42 }}>
          <InputLabel id="demo-simple-select-autowidth-label">
            Choose books from the library
          </InputLabel>
          <Select
            labelId="demo-simple-select"
            value={books}
            onChange={handleChange}
            placeholder={"Обрати книги з бiлiотеки"}
            autoWidth
            label={"Обрати книги з бiлiотеки"}
          >
            <MenuItem value="">
              <em>-------</em>
            </MenuItem>
            <MenuItem value={20}>
              Scrum. A revolutionary method of project management.
            </MenuItem>
            <MenuItem value={21}>
              Deadline. A novel about project management.
            </MenuItem>
            <MenuItem value={22}>
              5 Defects of the team. Proverbs about leadership.
            </MenuItem>
          </Select>
        </FormControl>
      </div> */}
    </div>
  );
};

export default BookSelect;
