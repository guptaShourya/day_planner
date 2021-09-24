import React from "react";
import Grid from "@material-ui/core/Grid";

const RmText = ({type}) => {
    console.log(type);
    return (
        <Grid container item>
            <p className = "Rm_Intro_text">
                {type?
                "Hey There! Please login to your account":
                "Hey There! Get started with Pascal"}
            </p>
        </Grid>
    )
}

export default RmText;