import React from 'react';
import { Grid } from "@material-ui/core";
import RmText from './registerMediaText';
import RegisterMedia from './registerMedia';

const Form = ({type}) => {
    return (
        <Grid item id = 'loginform'>
            <Grid container direction = "column" justifyContent = "center" alignItems = "center" style = {{marginTop: "2vw"}}>
                <RmText type = {type}/>
                <RegisterMedia type = {type}/>
            </Grid>
        </Grid>
    );
};

export default Form;