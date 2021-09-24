import React from 'react';
import { Grid } from '@material-ui/core';
import RegisterLeft from './registerLeft';
import RegisterRight from './registerRight';
import './index.css'

const RegisterMain = ({type}) => {
    return (
        <Grid container direction="row" justifyContent="space-evenly" alignItems="center" style = {{height : "100%"}}> 
            <RegisterLeft type = {type}/>
            <RegisterRight/>
        </Grid>
    );
};

export default RegisterMain;