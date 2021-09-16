import React from "react";
import LpImg from "./image";
import LpText from "./text";
import './index.css'
import { Grid } from "@material-ui/core";

const LandingPageMain = () => {
    return (
        <Grid item>
            <Grid container direction="row" justifyContent="space-evenly" alignItems="center">
                <LpText />
                <LpImg />
            </Grid>
        </Grid>
    );
}
export default LandingPageMain;