import React from "react";
import Grid from "@material-ui/core/Grid";
import { FacebookLoginButton } from "react-social-login-buttons";
import './index.css'

const FacebookButton = () => {
    return (
        <Grid item className = "social-buttons">
            <FacebookLoginButton/>
        </Grid>
    );
}

export default FacebookButton;