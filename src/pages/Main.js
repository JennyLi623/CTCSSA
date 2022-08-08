import React, { Component, useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import CourseFilter from "./CourseFilter";
import CourseList from "./CourseList";
import CourseListJson from "./CourseListJson";

function Main() {

  const [courseName, setCourseName] = useState('');
  console.log(courseName); 
    return (
        <div>
          <CourseFilter setCourseName={setCourseName}/>
          <CourseList courses={CourseListJson} courseName={courseName}/>
        </div>

    );
  }

export default Main;