import React from "react";
import Grid from "@material-ui/core/Grid";
import { LinkedInLoginButton } from "react-social-login-buttons";
import './index.css'

const LinkedInButton = () => {
    return (
        <Grid item className = "social-buttons">
            <LinkedInLoginButton/>
        </Grid>
    );
}

export default LinkedInButton;