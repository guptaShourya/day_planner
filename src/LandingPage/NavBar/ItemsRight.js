import React from "react";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import Button from '@material-ui/core/Button';

const ItemsRight = () => {

    return (
        <Grid item className = "Lp_items">
            <Grid container direction="row" justifyContent="flex-end" alignItems="center">
                <Grid item>
                    <Button>
                        <Typography variant="h6" class="Lp_navbar_text">
                            Sign In
                        </Typography>
                    </Button>
                </Grid>
                <Grid item id = "Lp_signup_container">
                    <Button id = "Lp_signup_button">
                        <Typography variant="h6" class="Lp_navbar_text" style={{ color: "white" }}>
                            Sign Up
                        </Typography>
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )

}

export default ItemsRight;