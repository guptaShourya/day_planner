import React from "react";
import RmText from "./registerMediaText";
import { Grid } from "@material-ui/core";

const RegisterNative = ({type}) => {
    return (
        <Grid item style = {{height : "50%"}}>
            <RmText type = {type}/>
        </Grid>
    );
};

export default RegisterNative;