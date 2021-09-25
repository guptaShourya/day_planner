import React from "react";
import Grid from "@material-ui/core/Grid";
import GoogleButton from "./AuthButtons/google";
import FacebookButton from "./AuthButtons/facebook";

const RmButtons = ({type}) => {
    return (
        <Grid container direction  = 'row' justifyContent = 'space-evenly' alignItems = 'center'>
            <GoogleButton/>
            <FacebookButton/>
        </Grid>
    )
}

export default RmButtons;