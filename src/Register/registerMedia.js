import React from "react";
import { Grid } from "@material-ui/core";
import RmButtons from "./registerMediaButtons";

const RegisterMedia = ({type}) => {
    return (
        <Grid item style = {{marginTop : "6vw"}}>
            <RmButtons type = {type}/>
        </Grid>
    );
};

export default RegisterMedia;