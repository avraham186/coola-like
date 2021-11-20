import { Grid } from '@material-ui/core';
import React from 'react';
import {Input} from '../input/Input.jsx';


export default function Inputs(props) {

    return (
        <Grid spacing={2}>
            {(props.inputs).map((input)=>{
                return (
                    <Input
                        key={input.id}
                        id={input.id}
                        label={input.label}
                        icon={input.icon}
                        minLength={input.minLength}
                        maxLength={input.maxLength}
                        type={input.type}
                        handleChange={props.handleChange}
                        required={input.required}
                    />
                )})}
        </Grid>
    );
}