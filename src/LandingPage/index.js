import React from "react";
import "./index.css"
import LpImg from "./image";
import LpText from "./text";
import { Grid } from "@material-ui/core";

const LandingPage = () => {
    return (
        <Grid container direction="row" justifyContent="space-evenly" alignItems="center">
            <LpText/>
            <LpImg />
        </Grid>
    );
}
export default LandingPage;