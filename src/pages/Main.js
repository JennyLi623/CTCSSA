import React, { Component } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import CourseFilter from "./CourseFilter";

class Main extends Component {
  render() {
    return (
        <div>
          <CourseFilter />
        </div>

    );
  }
}

export default Main;