import React from "react";
import "./index.css"
import Navbar from "./navbar";
import LandingPageMain from "./main";
import { Grid } from "@material-ui/core";

const LandingPage = () => {
    return (
        <Grid container direction="column" justifyContent="center" alignItems="center">
            <Navbar/>
            <LandingPageMain/>
        </Grid>
    );
}
export default LandingPage;