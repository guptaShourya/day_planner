import React from "react";
import Grid from "@material-ui/core/Grid";
import GoogleButton from "./AuthButtons/google";

const RmButtons = ({type}) => {
    return (
        <Grid container direction  = 'row' justifyContent = 'space-evenly' alignItems = 'center'>
            <GoogleButton type = {type}/>
        </Grid>
    )
}

export default RmButtons;