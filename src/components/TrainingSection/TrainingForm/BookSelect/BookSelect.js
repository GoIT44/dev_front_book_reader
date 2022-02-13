import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const BookSelect = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 270, maxWidth: 270 }}>
        <InputLabel id="demo-simple-select-autowidth-label">
          Choose books from the library
        </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          placeholder={"Choose books from the library"}
          autoWidth
          label="Choose books from the library"
        >
          <MenuItem value="">
            <em>-------</em>
          </MenuItem>
          <MenuItem value={10}>
            Scrum. A revolutionary methodof project management.
          </MenuItem>
          <MenuItem value={21}>
            Deadline. A novel about project management.
          </MenuItem>
          <MenuItem value={22}>
            5 Defects of the team. Proverbs about leadership.
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default BookSelect;
