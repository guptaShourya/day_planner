import React from "react";
import { Grid } from "@material-ui/core";
import Name from "./name";
import ItemsRight from "./ItemsRight";

const BarContainer = () => {
    return (
        <Grid container justifyContent="space-between" id = "Lp_bar_container">
            <Name />
            <ItemsRight />
        </Grid>
    )
}

export default BarContainer;