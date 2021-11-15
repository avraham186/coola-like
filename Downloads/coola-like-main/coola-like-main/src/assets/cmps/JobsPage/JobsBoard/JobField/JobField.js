import React, { useState } from 'react'
import '../JobField/JobField.css';

import { Checkbox, createMuiTheme, FormControl, Grid, InputBase, InputLabel, Select } from '@mui/material';
import { ThemeProvider } from 'styled-components';
import { TextField } from '@mui/material';
import { MenuItem } from '@mui/material';
import { createTheme } from '@mui/system';

function JobField() {
 

    const [field, setField] = useState('');
    const [type, setJobType] = useState('');
    const [area, setJobArea] = useState('');

    const theme = createTheme({
        direction: 'rtl',
      });

    
    const openSelectHandler = (e) => {
        setField(e.target.value)
    }

    
    const openJobTypeHandler = (e) => {
        setJobType(e.target.value)
    }

    
    const openJobAreaHandler = (e) => {
        setJobArea(e.target.value)
    }

    // const formStyles = styles();
    return (
      <div className="search-bar">
        <FormControl className="job-field">
            <InputLabel>תחום</InputLabel>
                <Select 
                value={field}
                onChange={openSelectHandler}>
                 
                    <MenuItem value={'פיתוח תוכנה'}>פיתוח תוכנה</MenuItem>
                    <MenuItem value={'אבטחת מידע וסייבר'}>אבטחת מידע וסייבר</MenuItem>
                    <MenuItem value={'בדיקות תוכנה'}>בדיקות תוכנה</MenuItem>
                    <MenuItem value={'UX/UI'}>UX/UI</MenuItem>
                    <MenuItem value={'תמיכה טכנית'}>תמיכה טכנית</MenuItem>
            </Select>
            </FormControl>


            <FormControl className="job-type">
            <InputLabel>סוג משרה</InputLabel>
                <Select 

                value={type}
                onChange={openJobTypeHandler}>
                    <MenuItem value={'משרה מלאה'}>משרה מלאה</MenuItem>
                    <MenuItem value={'משרה חלקית'}>משרה חלקית</MenuItem>
                    <MenuItem value={'התמחות'}>התמחות</MenuItem>
                    <MenuItem value={'התנדבות'}>התנדבות</MenuItem>
                    <MenuItem value={'משמרות'}>משמרות</MenuItem>
            </Select>
            </FormControl>
            
            <FormControl className="job-area">
            <InputLabel>איזור</InputLabel>
                <Select 
              
                value={area}
                onChange={openJobAreaHandler}>
                    <MenuItem value={'תל אביב - יפו'}>תל אביב - יפו</MenuItem>
                    <MenuItem value={'ירושלים'}>ירושלים</MenuItem>
                    <MenuItem value={'צפון'}>צפון</MenuItem>
                    <MenuItem value={'דרום'}>דרום</MenuItem>
            </Select>
            </FormControl>
     
        <InputBase 
        className="search"
        placeholder="חפש תחום/תפקיד">
        </InputBase>
     
        </div>
    )
}

export default JobField
