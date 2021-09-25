import React from "react";
import RmText from "./registerMediaText";
import Rform from "./registerForm";
import { Grid } from "@material-ui/core";

const RegisterNative = ({type}) => {
    return (
        <Grid item style = {{height : "50%"}}>
            <RmText type = {type}/>
            <Rform/>
        </Grid>
    );
};

export default RegisterNative;