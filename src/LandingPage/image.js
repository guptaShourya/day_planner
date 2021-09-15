import React from "react";
import lpimg from "./lpimg.png"
import Grid from "@material-ui/core/Grid";

const LpImg = () => {
    return (
        <Grid container item className="Lp_items">
            <img src={lpimg} alt="Styling" className="Lp_img"></img>
        </Grid>
    )
}

export default LpImg;