import React from "react";
import Grid from "@material-ui/core/Grid";

const LpText = () => {
    return (
        <Grid container item className="Lp_items" style = {{paddingLeft : '10%'}}>
            <p className="Lp_text_main">
                Stay Productive,
            </p>
            <p className="Lp_text_main">
                Work Remotely
            </p>
            <p className="Lp_text_sub">
                The key to work-from-home success is to create an environment 
                that allows you to focus on the tasks at hand. Whether you are
                working from home for the first time.
            </p>
        </Grid>
    )
}

export default LpText;