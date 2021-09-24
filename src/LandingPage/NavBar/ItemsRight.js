import React from "react";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

const ItemsRight = () => {

    return (
        <Grid item className="Lp_items">
            <Grid container direction="row" justifyContent="flex-end" alignItems="center">
                <Grid item>
                    <Link to='/login'>
                        <Button id="Lp_signin_button">
                            <Typography variant="h6" className="Lp_navbar_text">
                                Sign In
                            </Typography>
                        </Button>
                    </Link>
                </Grid>
                <Grid item id="Lp_signup_container">
                    <Link to='/signup'>
                        <Button id="Lp_signup_button">
                            <Typography variant="h6" className="Lp_navbar_text" style={{ color: "white" }}>
                                Sign Up
                            </Typography>
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </Grid>
    )

}

export default ItemsRight;