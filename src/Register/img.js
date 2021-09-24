import React from "react";
import rmimg from "./rmimg.png"
import Grid from "@material-ui/core/Grid";

const RmImg = () => {
    return (
        <Grid item style = {{width : "50%", height : "100%"}}>
            <img src={rmimg} alt="Styling" style = {{width : "100%", height : "100%"}}></img>
        </Grid>
    )
}

export default RmImg;