import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import Button from '@material-ui/core/Button';

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                {/* main container */}
                <Grid container justifyContent = "space-between">
                    {/* items to the left */}
                    <Grid item style = {{width : "50%"}}>
                        <Grid container> 
                            <Grid item>
                                <Typography variant="h6">
                                    NAME
                                </Typography>
                            </Grid>
                            <Grid item style = {{paddingLeft : "7%"}}>
                                {/* nav options to be added */}
                                <Button color="inherit">Login</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* items to the right */}
                    <Grid item>
                        <Grid container>
                            <Grid item>
                                <Button>
                                    Sign In
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button>
                                    Sign Up
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;