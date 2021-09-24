import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import './index.css'

const GoogleButton = ({ type }) => {
    return (
        <Grid item>
            <Button style={{ backgroundColor: "white" }}>
                <Grid container direction = "row" justifyContent = 'space-between' alignItems = "center">
                    <Grid item >
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" />
                    </Grid>
                </Grid>
                <Grid item>
                    <p>
                        <b>
                            {type ? "Login with Google" : "Sign up with Google"}
                        </b>
                    </p>
                </Grid>
            </Button>
        </Grid>
    );
}

export default GoogleButton;