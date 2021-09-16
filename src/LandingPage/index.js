import React from "react";
import Navbar from "./NavBar/navbar";
import LandingPageMain from "./MainSection/main";
import { Grid } from "@material-ui/core";

const LandingPage = () => {
    return (
        <Grid container direction="column" justifyContent="center" alignItems="center">
            <Navbar />
            <LandingPageMain />
        </Grid>
    );
}
export default LandingPage;