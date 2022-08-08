import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useAutocomplete } from '@mui/base/AutocompleteUnstyled';
import { styled } from '@mui/material/styles';
import { autocompleteClasses } from '@mui/material/Autocomplete';
import CourseListJson from "./CourseListJson";
import CourseList from './CourseList';

const Label = styled('label')({
    display: 'block',
  });
  
  const Input = styled('input')(({ theme }) => ({
    width: 200,
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.getContrastText(theme.palette.background.paper),
  }));
  
  const Listbox = styled('ul')(({ theme }) => ({
    width: 200,
    margin: 0,
    padding: 0,
    zIndex: 1,
    position: 'absolute',
    listStyle: 'none',
    backgroundColor: theme.palette.background.paper,
    overflow: 'auto',
    maxHeight: 200,
    border: '1px solid rgba(0,0,0,.25)',
    [`& li.${autocompleteClasses.focused}`]: {
      backgroundColor: '#4a8df6',
      color: 'white',
      cursor: 'pointer',
    },
    '& li:active': {
      backgroundColor: '#2977f5',
      color: 'white',
    },
  }));

export default function CourseFilter({setCourseName}) {
  const [subject, setSubject] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setSubject(event.target.value);
    };  

    const setCourseTag = (e, value) => {
      console.log(value);
      setCourseName(value.name);
      };  

    const courseNumber = useAutocomplete({
        id: 'use-autocomplete-demo',
        options: CourseListJson,
        getOptionLabel: (option) => option.number,
      });

      const courseName = useAutocomplete({
        id: 'use-autocomplete-demo',
        options: CourseListJson,
        getOptionLabel: (option) => option.name,
        onChange: setCourseTag
      });

  return (
    <div> 
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Subject</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={subject}
          label="Subject"
          onChange={handleChange}
        >
          <MenuItem value={'CS'}>CS</MenuItem>
          <MenuItem value={'MBA'}>MBA</MenuItem>
          <MenuItem value={'INFO'}>INFO</MenuItem>
        </Select>
      </FormControl>
    </Box>

    <div {...courseNumber.getRootProps()}>
        <Input {...courseNumber.getInputProps()} />
    </div>
      {courseNumber.groupedOptions.length > 0 ? (
        <Listbox {...courseNumber.getListboxProps()}>
          {courseNumber.groupedOptions.map((option, index) => (
            <li {...courseNumber.getOptionProps({ option, index })}>{option.number}</li>
          ))}
        </Listbox>
      ) : null}
    <div {...courseName.getRootProps()}>
        <Input {...courseName.getInputProps()} />
      </div>
      {courseName.groupedOptions.length > 0 ? (
        <Listbox {...courseName.getListboxProps()}>
          {courseName.groupedOptions.map((option, index) => (
            <li {...courseName.getOptionProps({ option, index })}>{option.name}</li>
          ))}
        </Listbox>
      ) : null}

    </div>
  );
}

