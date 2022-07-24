import React, { Component } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import CourseFilter from "./CourseFilter";
import CourseList from "./CourseList";
import CourseListJson from "./CourseListJson";

class Main extends Component {
  render() {
    return (
        <div>
          <CourseFilter />
          <CourseList courses={CourseListJson}/>
        </div>

    );
  }
}

export default Main;