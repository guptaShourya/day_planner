import React from "react";
import Grid from "@material-ui/core/Grid";
import { GoogleLoginButton } from "react-social-login-buttons";
import './index.css'

const GoogleButton = () => {
    return (
        <Grid item className = "social-buttons">
            <GoogleLoginButton/>
        </Grid>
    );
}

export default GoogleButton;