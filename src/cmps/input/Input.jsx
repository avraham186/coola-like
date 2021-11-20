import { InputAdornment, TextField } from '@material-ui/core/';

export function Input({required,id,label,type,handleChange,icon}) {


    return (
        <TextField
            variant="outlined"
            margin="normal"
            required={required ? required : false}
            fullWidth
            id={id}
            color="primary"
            placeholder={label}
            name={id}
            autoComplete={id}
            type={type}
            onChange={handleChange}
            InputProps={ icon ? {
                startAdornment:
                    <InputAdornment position="start">
                        {icon}
                    </InputAdornment>
            } : {}}
        />
    );
}