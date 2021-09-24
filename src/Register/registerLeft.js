import React from "react";
import { Grid } from "@material-ui/core";
import RegisterMedia from "./registerMedia";
import RegisterNative from "./registerNative";

const RegisterLeft = ({type}) => {
    return (
        <Grid item style = {{width : "50%", height : "100%"}}>
            <Grid container direction="column" justifyContent="center" alignItems="center" style = {{height : "100%"}}>
                <RegisterNative type = {type}/>
                <RegisterMedia type = {type}/>
            </Grid>
        </Grid>
    );
};

export default RegisterLeft;