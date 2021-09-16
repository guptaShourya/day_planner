import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import BarContainer from "./bar";
import './index.css'

const Navbar = () => {
    return (
        <AppBar position="static" id="Lp_navbar">
            <Toolbar>
                <BarContainer />
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;