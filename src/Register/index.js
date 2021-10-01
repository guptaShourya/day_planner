import React from 'react';
import { Grid } from '@material-ui/core';
import './index.css'
import Form from './registerForm';

const RegisterMain = ({type}) => {
    return (
        <Grid container direction="row" justifyContent="center" alignItems="center" style = {{height : "100%"}} id = "register-main"> 
            <Form type = {type} />
        </Grid>
    );
};

export default RegisterMain;