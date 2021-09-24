import React from "react";
import { Grid } from "@material-ui/core";
import RmButtons from "./registerMediaButtons";

const RegisterMedia = ({type}) => {
    return (
        <Grid item style = {{height : "50%"}}>
            <Grid container direction="column" justifyContent="center" alignItems="center">
                <RmButtons type = {type}/>
            </Grid>
        </Grid>
    );
};

export default RegisterMedia;