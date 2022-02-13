import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import styles from "./BookSelect.module.css";

const BookSelect = () => {
  const [books, setBooks] = React.useState("");

  const handleChange = (event) => {
    setBooks(event.target.value);
  };

  return (
    <div className={styles.bookSelect}>
      <FormControl sx={{ m: 1, minWidth: 270, maxWidth: "84%" }}>
        <InputLabel id="demo-simple-select-autowidth-label">
          Choose books from the library
        </InputLabel>
        <Select
          labelId="demo-simple-select"
          value={books}
          onChange={handleChange}
          placeholder={"Choose books from the library"}
          autoWidth
          label="Choose books from the library"
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
      <div className={styles.btn__wrap}>
        <button className={styles.btn__add}>Add</button>
      </div>
    </div>
  );
};

export default BookSelect;
