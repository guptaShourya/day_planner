import React from "react";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";

const Name = () => {
    return (
        <Grid item className = "Lp_items">
            <Grid container>
                <Grid item>
                    <Typography variant="h6" class="Lp_navbar_name">
                        Pascal
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}
export default Name;