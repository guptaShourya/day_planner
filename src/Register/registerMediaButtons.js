import React from "react";
import Grid from "@material-ui/core/Grid";
import GoogleButton from "./AuthButtons/google";
import FacebookButton from "./AuthButtons/facebook";
import LinkedInButton from "./AuthButtons/linkedin";

const RmButtons = ({type}) => {
    return (
        <Grid container direction  = 'column' justifyContent = 'center' alignItems = 'center'>
            <GoogleButton/>
            <FacebookButton/>
            <LinkedInButton/>
        </Grid>
    )
}

export default RmButtons;