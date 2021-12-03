import {InputAdornment, TextField} from '@material-ui/core/';
import IconButton from "@material-ui/core/IconButton";
import { Visibility } from '@mui/icons-material';
import { VisibilityOff } from '@mui/icons-material';
import {useState} from "react";

export function Input({required, id, label, type, handleChange, icon}) {

    const [values, setValues] = useState({
        showPassword: false,
    });

    const handleClickShowPassword = () => {
        setValues({...values, showPassword: !values.showPassword});
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (

        <TextField
            dir="rtl"
            margin="normal"
            required={required ? required : false}
            id={id}
            placeholder={label}
            name={id}
            autoComplete={id}
            type={type === 'password' ? values.showPassword ? "text" : "password" : type}
            onChange={handleChange}
            InputProps={
                {
                    disableUnderline: true,
                    endAdornment:
                        type === 'password' ?
                            <InputAdornment position="start">
                                <IconButton
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {values.showPassword ? <Visibility/> : <VisibilityOff/>}
                                </IconButton>
                            </InputAdornment>
                            :
                            <></>
                }
            }
            style={{
                borderRadius: 10,
                padding: '4px 20px 4px 20px',
                fontSize: "14px",
                width: '90%',
                color: "#000",
                backgroundColor: "#FFF",
                border: 'none',
                fontFamily: 'RubiK',
                boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.2)',
            }}
        />
    );
}