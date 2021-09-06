import React from "react";
import lpimg from "./lpimg.png"
import "./index.css"
import { Grid } from "@material-ui/core";

const LandingPage = ()=>{
    return (
        <Grid container direction = "row" justifyContent = "space-evenly" alignItems = "center">
            <Grid container item className = "Lp_items">
                <img src = {lpimg} alt = "Styling" className = "Lp_img"></img> 
            </Grid>
            <Grid container item className = "Lp_items">
                <img src = {lpimg} alt = "Styling" className = "Lp_img"></img> 
            </Grid>
        </Grid>
    );
}
export default LandingPage;